import React from "react";
import profile from "./profil/profile";
import './App.css';

function App() {
  return (
   <div>
      <profile
      fullName = "Moussa"
      bio = "Je suis developper fullstack"
      profession = "Developpeur"
      handleName= {(name) => alert('Hello${name}')}>
          <img src = "imgg.png" alt = "Profile"/>
      </profile>
   </div>
  );
};

export default App;
