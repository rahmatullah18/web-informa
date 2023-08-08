import { useEffect } from "react";
import { ContentAdmin } from "../content/contentAdmin";
import { NavbarAdmin } from "../navbar/navbarAdmin";
import { useNavigate } from "react-router-dom";

type TypeContainerProps = {
  children: React.ReactNode;
};

export const ContainerAdmin = ({ children }: TypeContainerProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("login")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="h-full md:flex md:justify-center md:items-center md:h-full">
      <div className="h-screen">
        <NavbarAdmin />
        <div className="h-full p-2">
          {/* <Sidebar /> */}
          <ContentAdmin>{children}</ContentAdmin>
        </div>
      </div>
    </div>
  );
};
