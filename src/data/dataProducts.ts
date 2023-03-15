import RedShoes from "../components/assets/shoes.svg";
import OrangeShoes from "../components/assets/orangeNike.svg";
import BlueShoes from "../components/assets/blueNike.svg";
import WhiteShoes from "../components/assets/whiteNike.svg";
import BlackShoes from "../components/assets/blackNike.svg";

type TypeDataProducts = {
  id: number;
  product_name: string;
  urlImage: string;
  product_price: number;
  product_color?: string;
  product_size?: string[];
};

export const dataProducts: TypeDataProducts[] = [
  {
    id: 1,
    product_name: "Nike air 1",
    urlImage: RedShoes,
    product_price: 100000,
    product_color: "#C3CAFF",
    product_size: ["40", "41", "42"],
  },
  {
    id: 2,
    product_name: "Nike air 2",
    urlImage: OrangeShoes,
    product_price: 200000,
    product_color: "#4FE078",
    product_size: ["40", "41", "42"],
  },
  {
    id: 3,
    product_name: "Nike air 3",
    urlImage: BlueShoes,
    product_price: 300000,
    product_color: "#B43EC7",
    product_size: ["40", "41", "42"],
  },
  {
    id: 4,
    product_name: "Nike air 4",
    urlImage: WhiteShoes,
    product_price: 400000,
    product_color: "#4FE078",
    product_size: ["40", "41", "42"],
  },
  {
    id: 5,
    product_name: "Nike air 5",
    urlImage: BlackShoes,
    product_price: 500000,
    product_color: "#3583DD",
    product_size: ["40", "41", "42"],
  },
];
