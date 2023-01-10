import { useState } from "react";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiates?");

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={() => setMessage("Nieko tokio, viskas bus gerai :)")}>
        Jaučiuosi prastai
      </button>

      <button onClick={() => setMessage("Nieko tokio, viskas yra gerai :)")}>
        Jaučiuosi normaliai
      </button>

      <button onClick={() => setMessage("Jega valio")}>
        Jaučiuosi puikiai
      </button>
    </div>
  );
};

export default MoodChecker;
