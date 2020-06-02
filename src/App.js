import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const add = () => {
    setNum1(num1 + num2);
  };

  const sub = () => {
    setNum1(num1 - num2);
  };

  const mul = () => {
    setNum1(num1 * num2);
  };

  const div = () => {
    setNum1(num1 / num2);
  };

  const clear = () => {
    setNum1(0);
    setNum2(0);
  };

  return (
    <div className="bg-dark m-5 p-5 text-center">
      <div className="row mx-5">
        <div className="col">
          <input
            className="mr-3 form-control"
            type="number"
            value={num1}
            onChange={(e) => setNum1(+e.target.value)}
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            type="number"
            value={num2}
            onChange={(e) => setNum2(+e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="mt-4">
        <button className="btn btn-primary" onClick={add}>
          Add
        </button>
        <button className="ml-3 btn btn-primary" onClick={sub}>
          Substract
        </button>
        <button className="ml-3 btn btn-primary" onClick={mul}>
          Multiply
        </button>
        <button className="ml-3 btn btn-primary" onClick={div}>
          Division
        </button>
        <button className="ml-3 btn btn-primary" onClick={clear}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
