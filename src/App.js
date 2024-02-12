import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from '../src/Pages/Home';
import Photos from "../src/Pages/Photos/Photos";
import Videos from "../src/Pages/Videos/Videos";
import About from "../src/Pages/About/About";
import Contact from "../src/Pages/Contact/Contact";

function App() {
  return (
    <div className='App'>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/photos" element={<Photos/>}/>
      <Route path="/videos" element={<Videos/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
</Router>
    </div>
  );
}

export default App;
