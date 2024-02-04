import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ flex: 1 }}>TravelMedia.in</p>
      <img src={logo} style={{ flex: 1, width: "8rem", height: "3rem" }}></img>
      <div style={{ flex: 1 }}></div>
    </div>
  );
}

export default Header;
