import React from "react";
import { Container } from "../components/layouts/container/container";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <Container>
      <div className="flex flex-col p-2 ">
        <Link to={"/"}>⬅️ Kembali</Link>
        <div className="mt-2">
          {/* alamat */}
          <div></div>
          {/* detail product */}
          <div></div>
          {/* opsi pengantaran */}
          <div>
            {/* jika ambil di toko maka gratis */}
            {/* jika pengantaran maka 10k */}
          </div>
          {/* total */}
          <div></div>
          {/* Buat Pesanan */}
          <div></div>
        </div>
      </div>
    </Container>
  );
};
