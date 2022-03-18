import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>      
 <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      </div>      
    </Router >
  );
}

export default App;
