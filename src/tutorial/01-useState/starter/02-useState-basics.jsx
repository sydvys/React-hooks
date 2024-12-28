import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function sub() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={sub}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </>
  );
};

export default UseStateBasics;
