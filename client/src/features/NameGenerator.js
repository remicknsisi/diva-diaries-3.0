import React, { useState } from 'react';

function NameGenerator() {
  const [generatedName, setGeneratedName] = useState('');
  const [input, setInput] = useState('');


  function generateName(){
    const adjectiveList = ['Glamorous', 'Fabulous', 'Dazzling', 'Elegant'];
    const randomAdjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
    const firstName = input;

    const newName = `${randomAdjective} ${firstName}`;
    setGeneratedName(newName);
  }

  return (
    <div>
    <input className="form-input" type="text" placeholder="E.g. Michelle Visage" value={input} onChange={e => setInput(e.target.value)}></input>
      <h2>Your Drag Queen Name:</h2>
      <p>{generatedName}</p>
      <button classname="button" onClick={() => generateName()}>Generate Name</button>
    </div>
  );
}

export default NameGenerator;