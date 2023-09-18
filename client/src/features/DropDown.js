import React from "react";

function DropDown({ options, setSelectedOption }) {

  return (
    <div>
        <select type="text" onChange={e => setSelectedOption(e.target.value*1)}>
        {options}
        </select>
    </div>
  );
}

export default DropDown;