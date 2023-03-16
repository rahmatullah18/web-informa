import RedShoes from "../components/assets/shoes.svg";
import OrangeShoes from "../components/assets/orangeNike.svg";
import BlueShoes from "../components/assets/blueNike.svg";
import WhiteShoes from "../components/assets/whiteNike.svg";
import BlackShoes from "../components/assets/blackNike.svg";
import { TypeDataProduct } from "./typeDataProduct";

export const dataProducts: TypeDataProduct[] = [
  {
    id: 1,
    product_name: "Nike air 1",
    urlImage: RedShoes,
    product_price: 100000,
    product_color: "bg-[#F8C166]",
    product_size: ["40", "41", "42"],
    slug: "nike-air-1",
    sizes: ["40", "41", "42"],
    colors: ["bg-[#ffffff]", "bg-[#fff000]"],
    amount: 20,
    stock: 100,
  },
  {
    id: 2,
    product_name: "Nike air 2",
    urlImage: OrangeShoes,
    product_price: 200000,
    product_color: "bg-[#F8C166]",
    product_size: ["40", "41", "42"],
    slug: "nike-air-2",
    sizes: ["40", "41", "42"],
    colors: ["bg-[#ffffff]", "bg-[#fff000]"],
    amount: 20,
    stock: 100,
  },
  {
    id: 3,
    product_name: "Nike air 3",
    urlImage: BlueShoes,
    product_price: 300000,
    product_color: "bg-[#3583DD]",
    product_size: ["40", "41", "42"],
    slug: "nike-air-3",
    sizes: ["40", "41", "42"],
    colors: ["bg-[#ffffff]", "bg-[#fff000]"],
    amount: 20,
    stock: 100,
  },
  {
    id: 4,
    product_name: "Nike air 4",
    urlImage: WhiteShoes,
    product_price: 400000,
    product_color: "bg-[#3583DD]",
    product_size: ["40", "41", "42"],
    slug: "nike-air-4",
    sizes: ["40", "41", "42"],
    colors: ["bg-[#ffffff]", "bg-[#fff000]"],
    amount: 20,
    stock: 100,
  },
  {
    id: 5,
    product_name: "Nike air 5",
    urlImage: BlackShoes,
    product_price: 500000,
    product_color: "bg-[#000]",
    product_size: ["40", "41", "42"],
    slug: "nike-air-5",
    sizes: ["40", "41", "42"],
    colors: ["bg-[#ffffff]", "bg-[#fff000]"],
    amount: 20,
    stock: 100,
  },
];
