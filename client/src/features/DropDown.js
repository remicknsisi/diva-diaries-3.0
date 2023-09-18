import React from "react";

function DropDown({ options, setOptions }) {

  return (
    <div>
        <select type="text" onChange={e => setOptions(e.target.value)}>
        {options}
        </select>
    </div>
  );
}

export default DropDown;