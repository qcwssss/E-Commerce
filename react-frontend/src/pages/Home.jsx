import React from "react";
import { Announcement } from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
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
    </div>
  );
};

export default Home;
