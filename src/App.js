import './App.css';
// import MediaTable from './components/MediaTable';
import Nav from './components/Nav';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';
import {MediaProvider} from './contexts/MediaContext';


function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path='/single' element={<Single />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </MediaProvider>
    </Router>
  );
}

export default App;
