import "./App.css";
import NeonButton from "./components/NeonButton";
import TiltingCard from "./components/TiltingCard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <TiltingCard />
    </div>
  );
}

export default App;
