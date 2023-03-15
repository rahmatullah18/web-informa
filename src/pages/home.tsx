import { HomeProducts } from "../components/content/home/homeProducts";
import { HomeJumbotron } from "../components/content/home/homeJumbotron";
import { Container } from "../components/layouts/container/container";

export const Home = () => {
  return (
    <Container>
      <div className="space-y-4">
        <HomeJumbotron />
        <HomeProducts />
      </div>
    </Container>
  );
};
