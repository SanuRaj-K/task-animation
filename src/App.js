import "./App.css";
import Bottom from "./Components/Bottom";
import CardSection from "./Components/CardSection";
import Header from "./Components/Header";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <CardSection />

      <Bottom />
      {/* <div className="h-[100vh] bg-red-300 sm:bg-green-400 md:bg-yellow-400 lg:bg-black"></div> */}
    </div>
  );
}

export default App;
