import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <div className="h-[100vh] bg-red-300 sm:bg-green-400 md:bg-yellow-400 lg:bg-black"></div>
     

    </div>
  );
}

export default App;
