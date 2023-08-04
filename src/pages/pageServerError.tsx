import { useNavigate } from "react-router-dom";

export const PageServerError = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="p-2 text-center">
          Maaf, untuk sementara aplikasi kami sedang mengalami kendala.
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-blue-500 underline"
        >
          Coba lagi
        </button>
      </div>
    </div>
  );
};
