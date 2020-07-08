import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Whatwedo from "./Whatwedo";
import Contact from "./Contact";
import Listcard from "./Listcard";
import Footer from "./Footer";

export default function Baitap2() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container">
        <div className="row">
          <Whatwedo />
          <Contact />
        </div>
      </div>
      <Listcard />
      <Footer />
    </div>
  );
}
