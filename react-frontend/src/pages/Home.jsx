import React from "react";
import { Announcement } from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductsGroup from "../components/ProductsGroup";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductsGroup />
      <Newsletter />
    </div>
  );
};

export default Home;
