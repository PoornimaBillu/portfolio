import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import ContactOne from './Components/Contact/ContactOne';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <ContactOne />
      <Footer />
    </div>
  );
}

export default App;
