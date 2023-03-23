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
    urlImage: [
      {
        id: 1,
        url: RedShoes,
        color: "bg-[#ffffff]",
        stock: 43,
        sizes: ["40", "41", "42"],
      },
      {
        id: 2,
        url: OrangeShoes,
        color: "bg-[#fff000]",
        stock: 42,
        sizes: ["40", "41"],
      },
    ],
    product_price: 100000,
    product_color: "bg-[#F8C166]",
    slug: "nike-air-1",
    amount: 20,
  },
  {
    id: 2,
    product_name: "Nike air 2",
    urlImage: [
      {
        id: 1,
        url: OrangeShoes,
        color: "bg-[#ffffff]",
        stock: 53,
        sizes: ["40", "41", "42"],
      },
      {
        id: 2,
        url: RedShoes,
        color: "bg-[#fff000]",
        stock: 58,
        sizes: ["40", "41"],
      },
    ],
    product_price: 200000,
    product_color: "bg-[#F8C166]",
    slug: "nike-air-2",
    amount: 20,
  },
  {
    id: 3,
    product_name: "Nike air 3",
    urlImage: [
      {
        id: 1,
        url: BlueShoes,
        color: "bg-[#ffffff]",
        stock: 49,
        sizes: ["40", "41", "42"],
      },
      {
        id: 2,
        url: OrangeShoes,
        color: "bg-[#fff000]",
        stock: 90,
        sizes: ["40"],
      },
    ],
    product_price: 300000,
    product_color: "bg-[#3583DD]",
    slug: "nike-air-3",
    amount: 20,
  },
  {
    id: 4,
    product_name: "Nike air 4",
    urlImage: [
      {
        id: 1,
        url: WhiteShoes,
        color: "bg-[#ffffff]",
        stock: 44,
        sizes: ["40", "41", "42"],
      },
      {
        id: 2,
        url: OrangeShoes,
        color: "bg-[#fff000]",
        stock: 40,
        sizes: ["40", "41"],
      },
    ],
    product_price: 400000,
    product_color: "bg-[#3583DD]",
    slug: "nike-air-4",
    amount: 20,
  },
  {
    id: 5,
    product_name: "Nike air 5",
    urlImage: [
      {
        id: 1,
        url: BlackShoes,
        color: "bg-[#ffffff]",
        stock: 40,
        sizes: ["40"],
      },
      {
        id: 2,
        url: OrangeShoes,
        color: "bg-[#fff000]",
        stock: 20,
        sizes: ["40", "41"],
      },
    ],
    product_price: 500000,
    product_color: "bg-[#000]",
    slug: "nike-air-5",
    amount: 20,
  },
];
