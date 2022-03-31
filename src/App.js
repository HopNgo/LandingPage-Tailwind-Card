import "./App.css";
import { useState, useEffect } from "react";
import Content from "./components/Content";
import NavBar from "./components/Navbar";
import Slogan from "./components/Slogan";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    heightL: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width > 640) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowSize]);

  console.log(windowSize, isMobile);
  return (
    <div className="font-sora h-screen overflow-y-auto overflow-x-hidden py-8 bg-gradient-to-b px-4 md:px-12 dark:from-black dark:to-purple-700 from-white to-pink-500 text-black transition-all duration-500 ease-linear dark:text-white">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
