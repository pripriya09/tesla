import React from "react";
// import DownArrow from "./images/down-arrow.svg";




function Section(props) {
  return (
    <section>
      <div className="carName">
        <h1>{props.name}</h1>
        <p>{props.tagline}</p>
      </div>

      <div className="cta">
        <a href="">{props.leftBtn}</a>
        <a href="">{props.rightBtn}</a>

        {/* <img src={DownArrow} alt="Down Arrow" /> */}
      </div>

    </section>
  );
}

export default Section;

// function Section(carName, tagline, lb, rb)