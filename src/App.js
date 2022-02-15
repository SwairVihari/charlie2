
import './App.css';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';
import Headline from './Components/Headline/Headline';
import Hero from './Components/Hero/Hero';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Headline/>
      <Hero/>
      <Card/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
