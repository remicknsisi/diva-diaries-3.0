import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DM from "./DM";
import { fetchMessages } from "./dmsSlice";
import { useNavigate } from 'react-router-dom';

function DisplayDMs() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const messages = useSelector((state) => state.messages.entities);
    console.log(messages)
  
    useEffect(() => {
      dispatch(fetchMessages());
    }, [])
  
    if(messages){return (
    <>
        <button className="button" onClick={() => navigate(`/`)}>Back</button>
        <div className="conversation-list">
            Messages
        
        {messages.map((m) => <DM key={m.id} message={m} user={m.user}/>)}
        </div>
    </>
    );} else{
      return(<p>Loading DMs...</p>)
    }
}

export default DisplayDMs;