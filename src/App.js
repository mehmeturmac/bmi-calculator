import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Calculator from './components/Calculator';

// Pages
import WhatIsBMI from './Pages/WhatIsBMI';
import DietList from './Pages/DietList';

function App() {
  return (
    <div className="relative bg-white">
      <div className="border-b-2 border-gray-100 bg-[palevioletred]/60">
        <Header />
      </div>

      <Routes>
        <Route path="/" exact element={<Calculator />} />
        <Route path="/whatisbmi" element={<WhatIsBMI />} />
        <Route path="/dietlist" element={<DietList />} />
      </Routes>
    </div>
  );
}

export default App;
