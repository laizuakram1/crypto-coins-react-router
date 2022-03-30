
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage'
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path = "/" element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
