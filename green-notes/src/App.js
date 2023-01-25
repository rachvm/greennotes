import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TipCard from "./components/TipCard/TipCard";
import data from "./data/data";
import { useState, useEffect } from "react";

function App() {
  const [randomTip, setRandomTip] = useState(null);

  useEffect(() => {
    cardRandomiser(data);
  }, []);

  function cardRandomiser(cardDataArray) {
    setRandomTip(
      cardDataArray[Math.floor(Math.random() * cardDataArray.length)]
    );
  }

  console.log(randomTip);
  return (
    <div className="App">
      <Header />
      {randomTip && <TipCard randomTip={randomTip} />}
      <Footer />
    </div>
  );
}

export default App;
