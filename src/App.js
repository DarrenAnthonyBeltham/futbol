import React from 'react';
import './index.css';     
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className="bg-brand-dark text-brand-light min-h-screen antialiased">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;