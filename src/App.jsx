import "./style/App.css";
import AppNavBar from "./components/AppNavBar";
import Work from "./components/Work";
import { useState } from "react";
import About from "./components/About";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [work, setWork] = useState(true);

  return (
    <main className="main-container">
      <AppNavBar work={work} setWork={setWork} />
      <ParallaxProvider>
        {work ? <Work /> : <About />}
      </ParallaxProvider>
    </main>
  );
}

export default App;
