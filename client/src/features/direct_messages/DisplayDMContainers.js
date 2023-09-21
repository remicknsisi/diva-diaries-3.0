import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DMContainer from "./DMContainer";
import { fetchMessages } from "./dmsSlice";
import { fetchUsers } from "../users/usersSlice";
import { useNavigate, useParams } from 'react-router-dom';
import ComposeIcon from "../icons/ComposeIcon";
import DropDown from "../DropDown";

function DisplayDMContainers() {
  const [selectedOption, setSelectedOption] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams()

    const messages = useSelector((state) => state.messages.entities);
    const users = useSelector((state) => state.users.entities);

    function getUniqueRecipients(arr, key) {
        const uniqueValues = [];
        const seenValues = {};
      
        for (const item of arr) {
          const value = item[key];
          if (!seenValues[value]) {
            seenValues[value] = true;
            uniqueValues.push(value);
          }
        }
      
        return uniqueValues;
      }
      
      const uniqueRecipients = getUniqueRecipients(messages, "recipient_id");
    
      const recipientsToDisplay = users.filter((user) => uniqueRecipients.includes(user.id))
      const usersForNewChat = users.map((user) => recipientsToDisplay.includes(user) ? null : user).filter((user) => user!== null)
      const chatOptions = usersForNewChat.map(user => <option value={user.id} key={user.id}>{user.username}</option>)

  
    useEffect(() => {
      dispatch(fetchMessages());
      dispatch(fetchUsers());
    }, [])
  
    if(messages){return (
    <>
        <button className="button" onClick={() => navigate(`/`)}>Back</button>
        <p className="heading">All Conversations</p> 
        <p>Start a chat with...</p>
        <br/>
        <DropDown setSelectedOption={setSelectedOption} options={chatOptions}/>
        <br/>
        <button onClick={() => navigate(`/users/${id}/direct_messages/${selectedOption}`)} className="button">Let's Go! <ComposeIcon/></button>
        <div className="conversation-list">
            {recipientsToDisplay.map((recipient) => <DMContainer key={recipient.id} recipient={recipient}/>)}
        </div>
    </>
    );} else{
      return(<p>Loading DMs...</p>)
    }
}

export default DisplayDMContainers;