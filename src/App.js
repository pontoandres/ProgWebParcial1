import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Detalle from './components/Detalle';
//import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </Router>
  );
}

export default App;
