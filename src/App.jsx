import "./style/App.css";
import AppNavBar from "./components/AppNavBar";
import Work from "./components/Work";
import { useState } from "react";
import About from "./components/About";

function App() {
  const [work, setWork] = useState(true);

  return (
    <main className="main-container">
      <AppNavBar work={work} setWork={setWork} />
      {work ? <Work /> : <About />}
    </main>
  );
}

export default App;
