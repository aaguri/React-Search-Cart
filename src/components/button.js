import React from "react";
import Image from "./image";
function Button({ show, count, incre, decre }) {
  return (
    <p>
      <button onClick={incre}>I am a button to increament</button>
      <button onClick={decre}>I am a button to decreament</button>
      {show && <Image name={"Ajay"} />}
      <p>{count}</p>
    </p>
  );
}

export default Button;
