import React from "react";

import { Container } from "./home.styles";

import Navbar from "components/organisms/Navbar";
import HeroSection from "components/molecules/HeroSection";

const Home: React.FC<any> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <HeroSection
        title="Manage your wallet easily"
        description="A complete dashboard with chart that will help you to get a new level of
        finance's life
        "
      />
    </Container>
  );
};

export default Home;
