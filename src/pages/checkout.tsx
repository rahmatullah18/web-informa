import { useEffect, useState } from "react";
import { Container } from "../components/layouts/container/container";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { formatRupiah } from "../helpers/formatRupiah";
import Swal from "sweetalert2";
import axios from "axios";
import { Loading } from "../components/ui/loading/loading";
import { Helmet } from "react-helmet";

type TypeItemDelivery = {
  id: number;
  title: string;
  price: number;
};

type TypeItemBilling = {
  id: number;
  title: string;
};
const deliveries = [
  {
    id: 1,
    title: "Ambil di Toko",
    price: 0,
  },
  {
    id: 2,
    title: "Antar ke Rumah",
    price: 10000,
  },
];

const billings = [
  {
    id: 1,
    title: "COD",
  },
  {
    id: 2,
    title: "Transfer",
  },
];

export const Checkout = () => {
  const { items, cartTotal, totalItems, emptyCart } = useCart();

  const navigate = useNavigate();
  const [address, setAddress] = useState<string>("");
  const [wa, setWa] = useState<string>("");
  const [idDelivery, setIdDelivery] = useState<number>(0);
  const [idBilling, setIdBilling] = useState<number>(0);
  const [priceOngkir, setPriceOngkir] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelivery = (item: TypeItemDelivery) => {
    setIdDelivery(item.id);
    setPriceOngkir(item.price);
    const sumTotal = cartTotal + item.price;
    setTotal(sumTotal);
  };
  const handleBilling = (item: TypeItemBilling) => {
    setIdBilling(item.id);
  };

  const convertNumber = (number: string) => {
    const numberConvert = number.replace(/^0/, "62");
    return numberConvert;
  };

  const handleCreateOrder = async () => {
    // validasi
    if (!address || address === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Alamat tidak boleh kosong",
      });
    }
    if (!wa || wa === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nomor WhatsApp tidak boleh kosong",
      });
    }
    if (!name || name === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nama tidak boleh kosong",
      });
    }
    if (!idBilling || idBilling === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Harap pilih metode pembayaran",
      });
    }
    if (!idDelivery || idDelivery === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Harap pilih opsi pengiriman",
      });
    }

    if (!wa.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nomor WhatsApp tidak boleh kosong",
      });
    } else if (!/^(0)8[1-9][0-9]{6,9}$/i.test(wa)) {
      Swal.fire({
        icon: "error",
        title: "Nomor WhatsApp tidak valid",
        text: "Contoh yang benar : 089695......",
      });
    }

    if (
      idDelivery !== 0 &&
      idDelivery &&
      idBilling !== 0 &&
      idBilling &&
      address &&
      address !== "" &&
      wa &&
      wa !== "" &&
      !/^(0)8[1-9][0-9]{6,9}$/i.test(wa) !== true &&
      name &&
      name !== ""
    ) {
      // sapaan
      let sapaan = `*Haloo kakak* terimakasih telah order produk di toko kami\nBerikut ini detail produk yang anda pesan:\n\n`;
      let products = items.map((item: any, idx: any) => {
        return `*${idx + 1}. ${item.product_name}* \nJumlah : ${
          item.quantity
        } \nHarga : ${formatRupiah(item.price)}\nTotal harga : ${formatRupiah(
          item.itemTotal
        )}\n`;
      });
      let totalHargaPesanan = `\nTotal harga pesanan : ${formatRupiah(
        cartTotal
      )}\n`;
      let biayaPengiriman = `Biaya pengiriman : ${formatRupiah(priceOngkir)}\n`;
      let totalPembayaran = `*Total pembayaran : ${formatRupiah(total)}*\n \n`;
      let norek = "1231123123";
      let bankName = "BRI";
      let atasNama = "Rahmatullah";
      let metode =
        idBilling !== 1
          ? `*Metode pembayaran : Transfer rekening ${bankName} (${atasNama})* \nNomor rekening : *${norek}* \nSilahkan transfer sejumlah *${formatRupiah(
              total
            )}* ke rekening diatas \n \n*Mohon disertakan bukti transfer pada kolom chat ini sebagai bukti sah pemesanan* \n`
          : `*Metode pembayaran : Cash kurir* \n Silahkan anda persiapkan uang pas sejumlah *${formatRupiah(
              total
            )}* untuk diberikan ke kurir\n`;
      let pembatas = `-------------------------------------------------\n`;
      let nama = `Nama : \n${name} (${wa}) \n \n`;
      let alamat = `Alamat : \n${address} \n\nTerimakasih`;
      let paragraph = `${sapaan}${products}${totalHargaPesanan}${biayaPengiriman}${totalPembayaran}${metode}${pembatas}${nama}${alamat}`;
      const payload = {
        user_name: name,
        user_no_wa: wa,
        user_address: address,
        order_total_price: total,
        order_quantity: totalItems,
        paragraph: paragraph,
        wa: convertNumber(wa),
      };

      try {
        setIsLoading(true);
        await axios({
          method: "POST",
          url: `${process.env.REACT_APP_API_URL}/order/create-order`,
          data: payload,
          headers: {
            Accept: "application/json",
          },
        });
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Pesanan di proses",
          text: "Selanjutnya kami akan mengirimkan pesan  ke nomor whatsApp anda, untuk detail pesanan.",
        }).then(async (result) => {
          // const payload = {
          //   wa: convertNumber(wa),
          //   paragraph: paragraph,
          // };
          // await axios({
          //   method: "POST",
          //   url: `${process.env.REACT_APP_API_URL}/order/send-message`,
          //   data: payload,
          //   headers: {
          //     Accept: "application/json",
          //   },
          // });
          emptyCart();
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Lagi ada kendala",
        });
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (items.length < 1) {
      navigate("/");
    }
  }, [navigate, items]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Toko Maelo - Checkout</title>
      </Helmet>
      <div className="flex flex-col p-2 ">
        <Link to={"/"}>⬅️ Kembali</Link>
        <div className="mt-4 space-y-4">
          {/* detail product */}
          <div className="space-y-2">
            <span className="text-lg font-bold">🛒 Produk Dipesan</span>
            {items.length < 1 ? (
              <div>Keranjang masih kosong</div>
            ) : (
              <div className="space-y-2">
                {items.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex justify-center space-x-2 rounded-md hover:bg-gray-200"
                    >
                      <div
                        className={`relative w-20 space-y-5 rounded-lg overflow-hidden shadow-md h-24`}
                      >
                        <img
                          src={`${process.env.REACT_APP_IMAGE_URL}/${item.product_url}`}
                          alt="black"
                          className="w-full h-full object-fit"
                        />
                      </div>
                      <div className="flex flex-col w-full space-y-2 ">
                        <div className="text-xs">{item.product_name}</div>
                        <div className="text-xs">
                          <span className="font-semibold">Harga: </span>
                          {formatRupiah(item.price)}
                        </div>
                        <div className="text-xs">
                          <span className="mr-2 font-semibold">
                            Jumlah: {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* alamat */}
          <div className="space-y-2">
            <span className="text-lg font-bold">🏠 Alamat Pengantaran</span>
            <textarea
              className="w-full h-20 p-1 rounded-sm shadow-md"
              placeholder="Masukan alamat pengantaran anda"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            ></textarea>
          </div>
          {/* wa */}
          <div className="space-y-2">
            <span className="text-lg font-bold">📱 Nomor WhatsApp</span>
            <input
              className="w-full h-10 p-1 rounded-sm shadow-md"
              placeholder="089587......."
              onChange={(e) => setWa(e.target.value)}
              value={wa}
              type="number"
            />
          </div>
          {/* user ambil */}
          <div className="space-y-2">
            <span className="text-lg font-bold">🙋 Nama Penerima</span>
            <input
              className="w-full h-10 p-1 rounded-sm shadow-md"
              placeholder="Budi"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
            />
          </div>
          {/* opsi pengantaran */}
          <div className="space-y-2">
            <span className="text-lg font-bold">🚗 Opsi Pengiriman</span>
            <div className="space-x-2">
              {deliveries.map((item) => {
                return (
                  <button
                    key={item.id}
                    className={`bg-white p-2 rounded-sm ${
                      item.id === idDelivery ? "border-2 border-black" : ""
                    }`}
                    onClick={() => handleDelivery(item)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-lg font-bold">💵 Metode Pembayaran</span>
            <div className="space-x-2">
              {billings.map((item) => {
                return (
                  <button
                    key={item.id}
                    className={`bg-white p-2 rounded-sm ${
                      item.id === idBilling ? "border-2 border-black" : ""
                    }`}
                    onClick={() => handleBilling(item)}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </div>
          <hr className="border border-gray-700" />
          {/* total */}
          <div>
            <div className="flex justify-end flex-auto">
              <ul className="mt-2 space-y-4">
                <li>SubTotal untuk Produk : {formatRupiah(cartTotal)} </li>
                <li>Total Ongkir : {formatRupiah(priceOngkir)} </li>
                <li className="text-lg font-bold">
                  Total Pembayaran : {formatRupiah(total)}{" "}
                </li>
              </ul>
            </div>
            {/* Buat Pesanan */}
            <div className="flex justify-end">
              <button
                onClick={() => handleCreateOrder()}
                className="p-2 mt-2 text-lg text-white rounded-sm bg-secondary-200"
              >
                Buat Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
