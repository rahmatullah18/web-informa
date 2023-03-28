import React from "react";
import { Container } from "../components/layouts/container/container";
import greenShoes from "../components/assets/greenShoes.svg";
import { DashboardJumbotron } from "../components/content/dashboard/dashboardJumbotron";

export const Dashboard = () => {
  return (
    <Container>
      <div>
        {/* jumbotron */}
        <DashboardJumbotron
          image={greenShoes}
          title={"NIKE"}
          bgColor={"bg-primary-100"}
        />
      </div>
    </Container>
  );
};
