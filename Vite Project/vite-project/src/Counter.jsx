import { useState } from "react";

function Counter() {
  let [count, setCounter] = useState(10);
  const Increment = () => {
    count < 20 ? setCounter(++count) : setCounter(20);
  };
  const Decrement = () => {
    count > 0 ? setCounter(--count) : setCounter(0);
  };
  return (
    <>
      <h1>This is a Counter Mini Project</h1>
      <h3>Counter: {count}</h3>
      <button onClick={Increment}>Increment Count</button>
      <br />
      <br />
      <button onClick={Decrement}>Decrement Count</button>
    </>
  );
}

export default Counter;
