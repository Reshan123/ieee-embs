import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from "./components/Team";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
