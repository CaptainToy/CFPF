import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './element/home';
import Others from './element/other';
import './style/style.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Define your home route */}
          <Route path="/" element={<Home />} />

          {/* Define other routes */}
          <Route path="/about" element={<Others />} />

          {/* You can add a 404 page for undefined routes */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
