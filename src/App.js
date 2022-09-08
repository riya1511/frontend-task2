import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Arch from './Components/Main/Arch';

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/arch' element={<Arch />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
