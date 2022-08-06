import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import WhatIsBMI from './Pages/WhatIsBMI';

function App() {
  return (
    <div className="relative bg-white">
      <Header />

      <Routes>
        {/* <Route path="/" exact element={<Calculator />} /> */}
        <Route path="/whatisbmi" element={<WhatIsBMI />} />
      </Routes>
    </div>
  );
}

export default App;
