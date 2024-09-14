import Display from "./Components/Display";
import Button from "./Components/Button";
import "./App.css";
import { useState } from "react";

function App() {
  let myBtn = [
    "C",
    "AC",
    "=",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
  ];

  const [calval, setCalVal] = useState([]);
  const onButtonClicked = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "C") {
      const sliceResult = calval.slice(0, -1);
      setCalVal(sliceResult);
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalVal(result);
    } else {
      const newValue = calval + buttonText;

      setCalVal(newValue);
    }
  };
  return (
    <div className="bigContainer">
      <div className="container">
        <div className="heading">
          <h2>My Calculator</h2>
        </div>
        <Display inputValue={calval}></Display>
        <Button buttons={myBtn} buttonClicked={onButtonClicked}></Button>
      </div>
    </div>
  );
}

export default App;
