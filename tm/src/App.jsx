import { useContext } from "react";
import ThemeContext from "./context";

function App() {
  const { Theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
  };
  return (
    <div
      style={{
        backgroundColor: Theme === "Light" ? "white" : "black",
        color: Theme === "Light" ? "Black" : "White",
        height: "100vh",
      }}
    >
      <p>{Theme}</p>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
}

export default App;
