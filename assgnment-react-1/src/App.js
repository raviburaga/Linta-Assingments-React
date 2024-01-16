import React from 'react';
import HomeComponent from "./Components/HomeComponent";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import ContactComponent from './Components/ContactComponent.js';
import AboutComponent from './Components/AboutComponent';
import NotFound from './Components/NotFound';


function App() {
  return (
      <>
      <Router>
    <Routes>
      <Route path='/' element={<HomeComponent />}></Route>
      <Route path='/contact' element={<ContactComponent />}></Route>
      <Route path='/about' element={<AboutComponent />}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </Router>
     
    </>
  );
}

export default App;
