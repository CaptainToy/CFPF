import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './element/home';
import Others from './element/other';
import Event from './element/event'
import BlogContainer from './element/blog';
import './style/style.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Others />} />
          <Route path="/event" element={<Event/>} />
          <Route path="/blog" element={<BlogContainer/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
