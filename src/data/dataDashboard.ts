import gambar1 from "../components/assets/gambar1.jpg";
import gambar2 from "../components/assets/gambar2.jpg";
import gambar3 from "../components/assets/gambar3.jpg";
import gambar4 from "../components/assets/gambar4.jpg";
import gambar5 from "../components/assets/gambar5.jpg";
import logoMaelo from "../components/assets/logo_maelo.svg";
export const dataDashboard = {
  jumbotron: {
    image: logoMaelo,
    title: "Toko Maelo",
    bgColor: "bg-primary-100",
  },
  title: "The Best Product We Have",
  category1: {
    title: "Kaos",
    class: "men",
    slug: "shoes-men",
    product: [
      {
        id: 1,
        product_name: "Nike air 1",
        product_color: "bg-[#F8C166]",
        slug: "nike-air-1",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: gambar1,
      },
      {
        id: 2,
        product_name: "Nike air 2",
        product_color: "bg-[#F8C166]",
        slug: "nike-air-2",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: gambar2,
      },
    ],
  },
  category2: {
    title: "Hoddie",
    class: "women",
    slug: "shoes-women",
    product: [
      {
        id: 3,
        product_name: "Nike air 3",
        product_color: "bg-[#3583DD]",
        slug: "nike-air-3",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: gambar3,
      },
      {
        id: 4,
        product_name: "Nike air 4",
        product_color: "bg-[#3583DD]",
        slug: "nike-air-4",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: gambar4,
      },
      {
        id: 5,
        product_name: "Nike air 5",
        product_color: "bg-[#000]",
        slug: "nike-air-5",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: gambar5,
      },
    ],
  },
  category3: {
    title: "Jaket",
    class: "women",
    slug: "shoes-women",
    product: [
      {
        id: 3,
        product_name: "Nike air 3",
        product_color: "bg-[#3583DD]",
        slug: "nike-air-3",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: gambar3,
      },
      {
        id: 4,
        product_name: "Nike air 4",
        product_color: "bg-[#3583DD]",
        slug: "nike-air-4",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: gambar4,
      },
      {
        id: 5,
        product_name: "Nike air 5",
        product_color: "bg-[#000]",
        slug: "nike-air-5",
        category: [{ id: 1, title: "shoes-men", slug: "shoes-men" }],
        urlImage: gambar5,
      },
    ],
  },
};
