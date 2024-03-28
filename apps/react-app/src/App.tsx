import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Comments } from './components/Comments';
import { Home } from './components/Home';
import { Info } from './components/Info';

function App() {
  return (
    <>
      <BrowserRouter basename="dashboard">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
