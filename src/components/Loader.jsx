// import React from "react";
import loaderGif from "../images/loader.png"; // Path to your GIF file

const Loader = () => {
  return (
    <div style={loaderStyles}>
      <img src={loaderGif} alt="Loading..." />
    </div>
  );
};

const loaderStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh", // Full screen height
  backgroundColor: "#fff", // Optional background color
};

export default Loader;
