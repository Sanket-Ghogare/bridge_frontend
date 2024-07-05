import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bridge from './pages/Bridge';

const App = () => {
  return (
    <div className='bg-slate-600 h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Bridge />} />
        </Routes>
      </Router>
    </div>

  );
};

export default App;