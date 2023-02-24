import React from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Form from "../Layout/Form/Form";
import Hero from "../Layout/Hero/Hero";
import Team from "../Layout/Team/Team";
import VR from "../Layout/VR/VR";
const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <VR />
      <Form />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
