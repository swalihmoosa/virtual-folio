import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-tabs/style/react-tabs.css';
import Client from './components/screens/Client';
import Do from './components/screens/Do';
import Education from './components/screens/Education';
import Home from './components/screens/Home';
import Skills from './components/screens/Skills';
import Swalih from './components/screens/Swalih';
import Works from './components/screens/Works';
import Company from './components/screens/Company';
import Blog from './components/screens/Blog';
import Contact from './components/screens/Contact';
import Footer from './components/screens/Footer';
import Back from './components/screens/Back';

function App() {
  return (
    <>
      <Home />
      <Swalih />
      <Skills />
      <Education />
      <Do />
      <Back />
      <Works />
      <Client />
      <Company />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
