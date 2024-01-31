import React from "react";
import { Banner } from "./components/banner/banner";
import { Bestseller } from "./components/bestseller/Bestseller";
import { Deliver } from "./components/Deliver/Deliver";

export const Home = () => {
  return (
    <>
      <Banner />
      <Bestseller />
      <Deliver />
    </>
  );
};
