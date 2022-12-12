import React from "react";
import Button from "./components/button";
import ShoppingCart from "./components/shoppingcart";

const App = () => {
  let name = "This is a part of learning react from docs";
  const [state, setState] = React.useState({
    show: false,
    count: 0,
  });
  const increament = () => {
    setState({ ...state, show: true, count: state.count + 1 });
  };
  const decreament = () => {
    setState({ ...state, show: false, count: state.count - 1 });
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <Button
        show={state.show}
        count={state.count}
        incre={increament}
        decre={decreament}
      />
      <Button
        show={state.show}
        count={state.count}
        incre={increament}
        decre={decreament}
      />
      <Button
        show={state.show}
        count={state.count}
        incre={increament}
        decre={decreament}
      />
      <ShoppingCart />
    </div>
  );
};

export default App;
