import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DM from "./DM";
import { fetchMessages } from "./dmsSlice";

function DisplayDMs() {
    const dispatch = useDispatch();

    const messages = useSelector((state) => state.messages.entities);
    console.log(messages)
  
    useEffect(() => {
      dispatch(fetchMessages());
    }, [])
  
    if(messages){return (
      <div className="posts-container">
        {messages.map((m) => <DM key={m.id} message={m} user={m.user}/>)}
      </div>
    );} else{
      return(<p>Loading DMs...</p>)
    }
}

export default DisplayDMs;