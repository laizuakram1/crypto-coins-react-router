
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import Header from './components/Header/Header';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import About from './components/About/About';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
          <Route path = "/" element={<Homepage></Homepage>}></Route>
          <Route path = "/coins" element={<Coins></Coins>}></Route>
          <Route path = "/contact" element={<Contact></Contact>}></Route>
          <Route path = "/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
