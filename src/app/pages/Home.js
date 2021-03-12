import React from "react";
import Header from "../component/Header";
import AboutUs from "../component/AboutUs";
import Quality from "../component/Quality";
import Services from "../component/Services";
import Counter from "../component/Counter";
import Advertisement from "../component/Advertisement";
import CallUs from "../component/CallUs";
import Portfolio from "../component/Portfolio";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import { ScrollingProvider } from "react-scroll-section";

const Home = (props) => {
  console.log("propppy");
  console.log(props);
  return (
    <ScrollingProvider>
      <div>
        <Header />
        <div className="spacer-120" />
        <AboutUs />
        <div className="quality-spacer" />
        <Quality />
        <Services />
        <Counter />
        <Advertisement />
        <CallUs history={props.history} />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </ScrollingProvider>
  );
};

export default Home;
