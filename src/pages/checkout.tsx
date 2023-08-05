import { useEffect, useState } from "react";
import { Container } from "../components/layouts/container/container";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { formatRupiah } from "../helpers/formatRupiah";
import Swal from "sweetalert2";

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
  const { items, cartTotal } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState<string>("");
  const [wa, setWa] = useState<string>("");
  const [idDelivery, setIdDelivery] = useState<number>(0);
  const [idBilling, setIdBilling] = useState<number>(0);
  const [priceOngkir, setPriceOngkir] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const handleDelivery = (item: TypeItemDelivery) => {
    setIdDelivery(item.id);
    setPriceOngkir(item.price);
    const sumTotal = cartTotal + item.price;
    setTotal(sumTotal);
  };
  const handleBilling = (item: TypeItemBilling) => {
    setIdBilling(item.id);
  };

  const handleCreateOrder = () => {
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

    if (
      idDelivery !== 0 &&
      idDelivery &&
      idBilling !== 0 &&
      idBilling &&
      address &&
      address !== "" &&
      wa &&
      wa !== ""
    ) {
      Swal.fire({
        icon: "success",
        title: "Pesanan di proses",
        text: "",
      });
    }
  };

  useEffect(() => {
    if (items.length < 1) {
      navigate("/");
    }
  }, [navigate, items]);

  return (
    <Container>
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
                          <span className="font-semibold mr-2">
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
              className="w-full shadow-md h-20 rounded-sm p-1"
              placeholder="Masukan alamat pengantaran anda"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            ></textarea>
          </div>
          {/* wa */}
          <div className="space-y-2">
            <span className="text-lg font-bold">📱 Nomor WhatsApp</span>
            <input
              className="w-full shadow-md  h-10 rounded-sm p-1"
              placeholder="089587......."
              onChange={(e) => setWa(e.target.value)}
              value={wa}
              type="number"
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
          <div className="flex justify-end">
            <ul className="space-y-4 mt-2">
              <li>SubTotal untuk Produk : {formatRupiah(cartTotal)} </li>
              <li>Total Ongkir : {formatRupiah(priceOngkir)} </li>
              <li className="font-bold text-lg">
                Total Pembayaran : {formatRupiah(total)}{" "}
              </li>
            </ul>
          </div>
          {/* Buat Pesanan */}
          <div className="flex justify-end">
            <button
              onClick={() => handleCreateOrder()}
              className="mt-2 bg-secondary-200 text-white p-2 text-lg rounded-sm"
            >
              Buat Pesanan
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
