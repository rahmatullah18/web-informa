import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Loading } from "../components/ui/loading/loading";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmitLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/login`,
        data: {
          email: email,
          password: password,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Selamat Datang",
      });
      localStorage.setItem("login", "true");
      navigate("/admin-dashboard");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login Gagal",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("login")) {
      navigate("/admin-dashboard");
    }
  }, [navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center m-4 space-y-4">
        <img
          src={`${process.env.REACT_APP_URL}/icons/loginIcon.svg`}
          alt="loginIcon"
          className="w-32 h-32"
        />
        <form onSubmit={handleSubmitLogin} className="space-y-4">
          <div className="w-full">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Masukan Email"
              className="w-full p-2 text-lg rounded-md"
            />
          </div>
          <div className="w-full">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="text"
              placeholder="Masukan Password"
              className="w-full p-2 text-lg rounded-md"
            />
          </div>
          <button className="w-full p-2 text-white rounded-md bg-secondary-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
