import './App.css';
// import MediaTable from './components/MediaTable';
import Nav from './components/Nav';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
