import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/layouts/container/container";
import { useCart } from "react-use-cart";
import { formatRupiah } from "../helpers/formatRupiah";
import axios from "axios";
import Swal from "sweetalert2";
import { Loading } from "../components/ui/loading/loading";

export const Pesanan = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { items, emptyCart } = useCart();

  const pesananDiterima = async () => {
    const payload = {
      user_id: localStorage.getItem("user_id"),
      order_id: localStorage.getItem("order_id"),
    };
    setIsLoading(true);
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/pesanan-diterima`,
        data: payload,
      });

      setIsLoading(false);
      Swal.fire({
        icon: "success",
        title: "Terimakasih",
        // text: "Selanjutnya kami akan mengirimkan pesan  ke nomor whatsApp anda, untuk detail pesanan.",
      });
      localStorage.removeItem("order_id");
      emptyCart();
      navigate("/");
    } catch (error) {
      navigate("server-error");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("loginUser")) {
      navigate("/login-user");
    }
  }, [navigate]);

  useEffect(() => {
    if (!localStorage.getItem("order_id")) {
      navigate("/");
    }
  }, [navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="h-full p-2">
        <div className="space-y-2">
          <span className="text-lg font-bold">Pesanan Anda</span>

          {items.length < 1 ? (
            <div>pesanan masih kosong</div>
          ) : (
            <div className="space-y-2">
              {items.map((item) => {
                let images: any = item?.product_url
                  .split(", ")
                  ?.map((image: any) => image.trim());
                return (
                  <div
                    key={item.id}
                    className="flex justify-center space-x-2 rounded-md hover:bg-gray-200"
                  >
                    <div
                      className={`relative w-20 space-y-5 rounded-lg overflow-hidden shadow-md h-24`}
                    >
                      <img
                        src={`${process.env.REACT_APP_IMAGE_URL}/${images[0]}`}
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
        <div className="mt-10 text-sm font-semibold text-right">
          Tekan tombol jika pesanan anda telah sampai
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => pesananDiterima()}
            className="p-2 text-white rounded-md bg-secondary-200"
          >
            Pesanan di terima
          </button>
        </div>
      </div>
    </Container>
  );
};
