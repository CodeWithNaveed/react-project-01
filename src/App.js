import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  // [state, setState] = useState(initialValue)
  const [advice, setAdvice] = useState("Advices show hongi");
  const [darkThemeHandler, setDarkThemeHandler] = useState(false);
  const [counter, setCounter] = useState(0);

  async function adviceLaao() {
    // //api call karwaounga
    const dataFromApi = await fetch("https://api.adviceSlip.com/advice");

    // //api json
    const {
      slip: { advice: adviceFromApi },
    } = await dataFromApi.json();

    // //api response ko ek state main store karungaٓ
    setAdvice(adviceFromApi);
    setDarkThemeHandler(!darkThemeHandler);
    setCounter(counter + 1);
  }

  return (
    <div
      style={{
        backgroundColor: darkThemeHandler ? "black" : "rgba(116, 117, 118, 0.518)",
        color: darkThemeHandler ? "white" : "black",
        height: "50vh",
        width: "50vw",
        margin: "100px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderRadius: "10px",
        padding: "50px",
      }}
    >
      <h1>{advice}</h1>
      <button onClick={adviceLaao}>Click karo advice pao</button>
      <p>Ab tak aap ne {counter} dafa advices parh li hain</p>
    </div>
  );
}

export default App;
