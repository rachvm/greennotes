import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TipCard from './components/TipCard/TipCard';

function App() {
  return (
    <div className="App">
      <Header/>
      <TipCard/>
      <Footer/>

    </div>
  );
}

export default App;
