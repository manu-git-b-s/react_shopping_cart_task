import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Products from "./components/Products/Products";

function App() {
  // products list data
  const products = [
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00 - $80.00",
      rating: false,
      sale: false,
      original: false,
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$18.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$20.00",
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$25.00",
      rating: false,
      sale: true,
      original: true,
      originalPrice: "$50.00",
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00",
      rating: true,
      sale: false,
      original: false,
      originalPrice: "",
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$25.00",
      rating: false,
      sale: true,
      original: true,
      originalPrice: "$50.00",
    },
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$120.00 - $280.00",
      rating: false,
      sale: false,
      original: false,
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$18.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$20.00",
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00",
      rating: true,
      sale: false,
      original: false,
      originalPrice: "",
    },
  ];

  // state for cart
  const [cartNo, setCartNo] = useState(0);

  return (
    <>
      <NavBar cartNo={cartNo} />
      <Header />
      <Products products={products} setCartNo={setCartNo} />
      <Footer />
    </>
  );
}

export default App;
