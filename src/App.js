import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CardDetails from './components/CardDetails';
import NavBar from './components/NavBar';

function App() {
  return (
      
    <Router>
      <div id='BackDrop'></div>
      
      <NavBar/>
    
          <Routes>  
            <Route path='/Rick-Morty' element={<Home/>}  />
            
            <Route path='/cardDetails/:id' element={<CardDetails/>}  />
          </Routes>
    </Router>
   
  );
}

export default App;
