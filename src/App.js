import React from 'react';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Navbars />
      <Home />
    </div>
  );
}

export default App;
