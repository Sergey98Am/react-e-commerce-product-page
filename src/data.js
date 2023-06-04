import product1 from "./assets/image-product-1.jpg";
import product2 from "./assets/image-product-2.jpg";
import product3 from "./assets/image-product-3.jpg";
import product4 from "./assets/image-product-4.jpg";

const product = {
  id: 1,
  company: "Sneaker Company",
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250.00,
  sale: 50.00,
  slides: [
    {
      src: product1,
      alt: "img-1",
    },
    {
      src: product2,
      alt: "img-2",
    },
    {
      src: product3,
      alt: "img-3",
    },
    {
      src: product4,
      alt: "img-4",
    },
  ],
};

export default product;
