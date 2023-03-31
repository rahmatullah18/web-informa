import greenShoes from "../components/assets/greenShoes.svg";
import blackNike from "../components/assets/blackNike.svg";
import redShoes from "../components/assets/shoes.svg";
import blueShoes from "../components/assets/blueNike.svg";
import orangeShoes from "../components/assets/orangeNike.svg";
import whiteShoes from "../components/assets/whiteNike.svg";
export const dataDashboard = {
  jumbotron: {
    image: greenShoes,
    title: "Nike",
    bgColor: "bg-primary-100",
  },
  title: "The Best Product We Have",
  category1: {
    title: "Shoes Men",
    class: "men",
    slug: "shoes-men",
    product: [
      {
        id: 1,
        product_name: "Nike air 1",
        product_color: "bg-[#F8C166]",
        slug: "nike-air-1",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: redShoes,
      },
      {
        id: 2,
        product_name: "Nike air 2",
        product_color: "bg-[#F8C166]",
        slug: "nike-air-2",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: orangeShoes,
      },
    ],
  },
  category2: {
    title: "Shoes Women",
    class: "women",
    slug: "shoes-women",
    product: [
      {
        id: 3,
        product_name: "Nike air 3",
        product_color: "bg-[#3583DD]",
        slug: "nike-air-3",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: blueShoes,
      },
      {
        id: 4,
        product_name: "Nike air 4",
        product_color: "bg-[#3583DD]",
        slug: "nike-air-4",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: whiteShoes,
      },
      {
        id: 5,
        product_name: "Nike air 5",
        product_color: "bg-[#000]",
        slug: "nike-air-5",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: blackNike,
      },
    ],
  },
};
