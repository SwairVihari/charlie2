import './App.css';
import React, {useState} from 'react'
import Terms from './Components/Terms';
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';
import ThankYou from './Components/ThankYou/ThankYou';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import MainComponent from './Components/MainComponent/MainComponent';
import { Button } from 'react-bootstrap';


function App() {
  
   const [signUp, setSignUp] = useState(false);

   
  return (
    <div className="App">
        
    <Router>
      <Routes>
      <Route path="/" element={!signUp ? <MainComponent setSignUp={setSignUp}/>: <ThankYou setSignUp={setSignUp}/>}/>
      <Route exact path="/termsandcondition" element={<Terms/>}/>
      <Route exact path="/privacy" element={<Privacy/>}/>
      <Route exact path="/contact" element={<Contact/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;