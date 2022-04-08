import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./dashboard";

function App() {
  const [count, setCount] = useState(0);

  return <Dashboard />;
}

export default App;
