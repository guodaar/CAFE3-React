import "./App.scss";
import CustomButton from "./components/CustomButton/CustomButton";
import Button from "./components/Button";
import Greeting from "./components/Greeting";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const fruits = ["banana", "pineapple", "strawberry"];
  const buttons = [
    {
      variant: "text",
      text: "help text",
    },
    {
      variant: "outlined",
      text: "Help outlined",
    },
    {
      variant: "contained",
      text: "help contained",
    },
  ];

  const handleAddCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <CustomButton variant="text">Text</CustomButton>
      <CustomButton variant="outlined">Outlined</CustomButton>
      <CustomButton variant="contained">Contained</CustomButton>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
      <Button onClick={handleAddCount}>Plus one</Button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <Button onClick={() => setCount(count - 1)}>Minus one</Button>
      <div>
        {count < 0 && "Negalima pasirinkti mažiau nei 0 prekių."}
        {count > 9 && "Jūs pasirinkote per didelį kiekį prekių."}{" "}
      </div>
      <br />
      {["Zalia", "Geltona", "Raudona"].map((text) => (
        <CustomButton key={text}>{text}</CustomButton>
      ))}

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <br />
      {buttons.map((button, index) => (
        <CustomButton key={index} variant={button.variant}>
          {button.text}
        </CustomButton>
      ))}
    </div>
  );
}

export default App;
