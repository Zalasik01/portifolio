import { useState, useEffect } from "react";
import ProjectList from "./components/ProjectList.jsx";
import { PrimaryButton, SecondaryButton, DangerButton } from "./components/Buttons";
import "./App.css";

function App() {
  const fullText = "Meu Portfólio";
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let interval;

    function startTyping() {
      setTyping(true);
      interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(interval);
          setTyping(false);
          setTimeout(() => {
            setText("");
            i = 0;
            startTyping();
          }, 1200);
        }
      }, 120);
    }

    startTyping();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>
        {text}
        {typing && <span>...</span>}
      </h1>
      <div style={{ marginBottom: "24px" }}>
        <PrimaryButton onClick={() => alert("Botão Primário!")}>Primário</PrimaryButton>
        <SecondaryButton onClick={() => alert("Botão Secundário!")}>Secundário</SecondaryButton>
        <DangerButton onClick={() => alert("Botão Perigo!")}>Perigo</DangerButton>
      </div>
      <ProjectList />
    </div>
  );
}

export default App;