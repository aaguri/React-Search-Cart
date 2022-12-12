import React from "react";
// import logo from "../logo.svg";

function Image(props) {
  const image = {
    url: "https://pixy.org/src/487/4870083.jpg",
  };

  const styles = {
    width: "10rem",
    height: "10rem",
  };
  return (
    <div>
      <img style={styles} src={image.url} alt="this is a logo"></img>
      {props.name}
    </div>
  );
}

export default Image;
