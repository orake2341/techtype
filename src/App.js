import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
              <Route path="/login" element={<Login/>}/>          
              <Route path="/signup" element={<Signup/>}/> 
              <Route path="/" element={<Home/>}/>         
        </Routes>     
      </div>
    </Router>
  );
}

export default App;
