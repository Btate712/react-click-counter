import React from 'react';
import Show from './components/Show'
import './App.css';

function App() {
  return (
    <div className="App">
      <Show name="Community" description="A bunch of people do shenanigans at a community college" />
      <hr />
      <Show name="Scrubs" description="Hospital themed comedy about friendship" />
      <hr />
      <Show name="Ozark" description="Accountant creates money laundering empire" />
    </div>
  );
}

export default App;
