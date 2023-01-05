import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";

// useState is a react hook, storing and setting information

function App() {
  const [name, setName] = useState("Guoda");
  const [age, setAge] = useState(24);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Button onClick={() => alert("Hello!")}>Sveiki</Button>
      <Button onClick={() => console.log("I am clicked")}>Sveiki</Button>
      <Button backgroundColor="green" onClick={() => setName("Panele Roze")}>
        Sveiki {name}
      </Button>
      <Button
        backgroundColor="green"
        onClick={() => {
          setAge(age * 2);
        }}
      >
        Help my age is: {age}
      </Button>
      <Button
        backgroundColor="red"
        onClick={() => {
          setName("Tadas");
        }}
      >
        {name}
      </Button>
      <Button onClick={() => setCount(count - 1)}>Minus one</Button>
      <span style={{ fontSize: 20, color: "blue", margin: "0 10px" }}>
        {count}
      </span>
      <Button backgroundColor="black" onClick={() => setCount(count + 1)}>
        Plus one
      </Button>
    </div>
  );
}

export default App;
