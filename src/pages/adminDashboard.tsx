import { useEffect } from "react";
import { ContainerAdmin } from "../components/layouts/container/containerAdmin";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin-products");
  }, [navigate]);

  return <ContainerAdmin>adminDashboard</ContainerAdmin>;
};
