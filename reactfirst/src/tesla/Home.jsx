// import React from "react";
import Header from "./Header.jsx";
import Section from "./Section.jsx";
import "./tesla.css";
import Model3 from "./images/model-3.jpg";
import Models from "./images/model-s.jpg";
import Modelx from "./images/model-x.jpg";
import Modely from "./images/model-y.jpg";


function Home() {

  return (
    <>
      <Header />
      <Section
        name="Model 3"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage={Model3} 
      />
      <Section
        name="Model S"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage={Models}
      />
      <Section
        name="Model X"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage={Modelx}
      />
      <Section
        name="Model Y"
        tagline="Order Online for touchless delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
        bgImage={Modely}
      />
      <Section
        name="Solar Panels"
        tagline="Lowest Cost Solar Panels in India"
        leftBtn="Order Now"
        rightBtn="Learn More"
       
      />
      <Section
        name="Solar Roof"
        tagline="Produce Clean Energy from your roof"
        leftBtn="Order Now"
        rightBtn="Learn More"
      
      />
      <Section name="Accessories" leftBtn="Order Now" bgImage="" />
    </>
  );
}

export default Home;

// Section("Model 3", "Neend")
 