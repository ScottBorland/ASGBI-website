import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage';
import Tour from './samplePages/Tour'
import SearchAppBar from './components/AppBar';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/:id" element={<Tour/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
