import React from "react";
// import Logo from "./images/Logo.svg";

function Header() {
  return (
    <nav>
      {/* <img src={Logo} alt="Tesla Logo" /> */}
      <ul>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panels</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;