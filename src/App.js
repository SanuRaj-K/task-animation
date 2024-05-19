import { useEffect, useState } from "react";
import "./App.css";
import Bottom from "./Components/Bottom";
import CardSection from "./Components/CardSection";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  const [fadeInClass, setFadeInClass] = useState("");

  useEffect(() => {
    setFadeInClass("fade-in");
  }, []);
  return (
    <div className={`App ${fadeInClass} max-w-screen-2xl mx-auto`}>
      <Header />
      <Home />
      <CardSection />

      <Bottom />
    </div>
  );
}

export default App;
