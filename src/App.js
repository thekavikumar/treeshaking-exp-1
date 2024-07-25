import React from 'react';
import { About } from './About';
function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>Viewing App Component</h1>
      <About />
    </div>
  );
}

export default App;
