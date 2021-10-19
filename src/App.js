import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Client from './components/screens/Client';
import Do from './components/screens/Do';
import Education from './components/screens/Education';
import Home from './components/screens/Home';
import Skills from './components/screens/Skills';
import Swalih from './components/screens/Swalih';
import Works from './components/screens/Works';

function App() {
  return (
    <>
      <Home />
      <Swalih />
      <Skills />
      <Education />
      <Do />
      <Works />
      <Client />
    </>
  );
}

export default App;
