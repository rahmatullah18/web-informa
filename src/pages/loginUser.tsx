import React, { useEffect, useState } from "react";
import { Loading } from "../components/ui/loading/loading";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [lookPassword, setLookPassword] = useState(false);

  const handleSubmitFormLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (email === "" || password === "") {
      Swal.fire("Form harus di isi semua", "", "error");
    } else {
      const payload = {
        email,
        password,
      };

      try {
        const res: any = await axios({
          method: "POST",
          url: `${process.env.REACT_APP_API_URL}/login-user`,
          data: payload,
        });
        localStorage.setItem("loginUser", "true");
        console.log(res);

        localStorage.setItem("user_id", res?.data?.user?.id);
        setIsLoading(false);
        Swal.fire("Berhasil Login", "", "success");
        navigate("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Gagal",
        });
        setPassword("");
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("loginUser")) {
      navigate("/");
    }
  }, [navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full m-2 space-y-4 md:w-1/3">
        {/* title */}
        <h1 className="text-2xl font-bold text-center text-secondary-200">
          Login Maelo Shop
        </h1>
        {/* form */}
        <form
          className="p-2 space-y-2 bg-white rounded-lg"
          onSubmit={handleSubmitFormLogin}
        >
          <input
            type="text"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            className="w-full h-10 px-2 bg-gray-200 border rounded-lg"
            placeholder="Email atau Username"
          />
          <div className="relative">
            <img
              src={`${process.env.REACT_APP_URL}/icons/Eye.png`}
              alt="loginIcon"
              onClick={() => setLookPassword(!lookPassword)}
              className="absolute cursor-pointer right-1 top-2 w-7 h-7 "
            />
            <input
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              type={lookPassword ? "text" : "password"}
              className="w-full h-10 px-2 bg-gray-200 border rounded-lg"
              placeholder="Password"
            />
          </div>
          <button className="w-full p-2 text-white rounded-md bg-secondary-200">
            Submit
          </button>
          <div className="flex items-center space-x-2 text-sm">
            <span className="">Belum punya akun? </span>
            <Link to={"/register"} className="underline text-secondary-200">
              {" "}
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
