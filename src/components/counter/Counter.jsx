import { useState } from "react";
import "./Counter.css";
import PropTypes from "prop-types";
import CounterButton from "./CounterButton";
function Counter() {
  const [count, setCount] = useState(0);
  function incrementCounter(by) {
    setCount(count + by);
    console.log("clicked");
  }
  function decrementCounter(by) {
    setCount(count - by);
    console.log("clicked");
  }
  function resetCounter(){
    setCount(0);
  }
  return (
    <div>
      <span className="count">{count}</span>
      <CounterButton by={1} incMethod={incrementCounter} decMethod={decrementCounter}></CounterButton>
      <CounterButton by={2} incMethod={incrementCounter} decMethod={decrementCounter}></CounterButton>
      <CounterButton by={3} incMethod={incrementCounter} decMethod={decrementCounter}></CounterButton>
      <button className="resetButton" onClick={resetCounter}>
          Reset
        </button>
    </div>
  );
}


Counter.propTypes = {
  by: PropTypes.number,
};
Counter.defaultPrps = {
  by: 1,
};
export default Counter;
