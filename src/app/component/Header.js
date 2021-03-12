import React from "react";
import Nav from "./Nav";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HeaderCarousel from "./HeaderCarousel";
import { Section } from "react-scroll-section";

const Header = () => {
  return (
    <Section id="home">
      <Nav />
      <HeaderCarousel />
    </Section>
  );
};

export default Header;
