import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const myName = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and redux</h4>

        <div className="quantity">
          <a
            className="quantity"
            title="Derement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={myName}
          ></input>
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
