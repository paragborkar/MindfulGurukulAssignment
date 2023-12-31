
import './App.css';
import Login from './components/Login';
import Signup from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App;
