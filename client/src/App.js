import React from 'react';
import './styles.css';
import Profile from './components/Profile';

fetch("/Pizza").then(res => res.json())
.then(resp => (console.log(resp)))
function App() {
  return (
    
    <div>
      <h1>Navbar Here -----------------------------------------------------------------------------------------------------------------------------------</h1>
      <Profile></Profile>
    </div>

  );
}

export default App;
