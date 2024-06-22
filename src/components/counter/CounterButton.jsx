import { useState } from "react";
import {PropTypes} from 'prop-types'

function CounterButton({ by ,incMethod,decMethod}) {
  //const [count, setCount] = useState(0);
  function incrementCounter() {
    incMethod(by);
  }
  function decCounter() {
    decMethod(by);
  }
    return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={incrementCounter}>
          +{by}
        </button>
        <button className="counterButton" onClick={decCounter}>
          -{by}
        </button>
      </div>
    </div>
  );
}
CounterButton.propTypes = {
  by: PropTypes.number,
};
CounterButton.defaultPrps = {
  by: 1,
};
export default CounterButton;
