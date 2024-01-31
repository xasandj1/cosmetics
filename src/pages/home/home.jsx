import React from "react";
import { Banner } from "./components/banner/banner";
import { Bestseller } from "./components/bestseller/Bestseller";
import { Deliver } from "./components/Deliver/Deliver";
import { Blog } from "./components/blog/Blog";

export const Home = () => {
  return (
    <>
      <Banner />
      <Bestseller />
      <Deliver />
      <Blog />
    </>
  );
};
