import React from "react";
import TracksPage from './TracksPage'
import '../App.css';
import vinyl from '../assets/vinyl_PNG88.png';

function App() {
  return (
    <div className="">
      <div className="header">
        <img src={vinyl} alt="vinyl record" />
        <h1>Flatiron Deep Cuts</h1>
      </div>
      <TracksPage />
    </div>
  );
}

export default App;
