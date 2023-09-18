import React, { useState } from 'react';

function NameGenerator() {
  const [generatedName, setGeneratedName] = useState('Ex: Sasha Velour');
  const [input, setInput] = useState('');


  function generateName(){
    const adjectiveList = ['Glamorous', 'Fabulous', 'Dazzling', 'Elegant', 'Radiant', 'Divine', 'Fierce', 'Vivacious', 'Magnetic', 'Luscious'];
    const randomAdjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];

    const commonNameList = ['Trinity', 'Sasha', 'Violet', 'Bianca', 'Jasmine', 'Coco']
    const randomName = commonNameList[Math.floor(Math.random() * commonNameList.length)];

    const firstName = input;

    const newName = input.length > 0 ? `${randomAdjective} ${firstName}` : `${randomAdjective} ${randomName}`
    setGeneratedName(newName);
  }

  return (
    <div className="generator">
        <h2>Need a little Inspo?</h2>
        <label className="form-input">Type your name here: </label>
        <input className="form-input" type="text" placeholder="E.g. Michelle Visage" value={input} onChange={e => setInput(e.target.value)}></input>
        <br/><br/>
        <button className="button" onClick={() => generateName()}>Generate Name</button>
        <br/><br/>
        <h3>Your Drag Queen Name:</h3>
        <p className="generated-name">{generatedName}</p>
    </div>
  );
}

export default NameGenerator;