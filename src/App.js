import './App.css';
// import MediaTable from './components/MediaTable';
import Nav from './components/Nav';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';


function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path='/single' element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
