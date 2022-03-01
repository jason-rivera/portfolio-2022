import { Routes, Route } from "react-router-dom";
import HomePage from './views/Home/HomePage.jsx';
import AboutPage from './views/About/AboutPage.jsx';
import Navigationbar from './components/Navbar/NavigationBar';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
