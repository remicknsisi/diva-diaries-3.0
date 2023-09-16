import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMessages } from "./dmsSlice";
import DirectMessage from "./DirectMessage";
import NewDirectMessageForm from "./NewDirectMessageForm";
import { fetchUsers } from "../users/usersSlice";

function DisplayDirectMessages() {
  const { id, recipient_id } = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const messages = useSelector((state) => state.messages.entities);
  const users = useSelector((state) => state.users.entities);

  useEffect(() => {
    dispatch(fetchMessages());
    dispatch(fetchUsers());
  }, [])

  const sentMessagesToDisplay = [...messages].filter((m) => m.recipient_id === recipient_id*1)
  const recipientToDisplay = users.find((u) => u.id === recipient_id*1)
  const receivedMessagesToDisplay = recipientToDisplay ? recipientToDisplay.direct_messages : null
  const allMessages = receivedMessagesToDisplay ? [...receivedMessagesToDisplay, ...sentMessagesToDisplay] : null

  if (allMessages){allMessages.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
  
    return dateA - dateB;
  })};

  if(allMessages){return (
    <div className="message-container">
      <button className="button" onClick={() => navigate(`/users/${id}/direct_messages`)}>Back</button>
      {allMessages.map((message) => <DirectMessage key={message.id} message={message}/>)}
      <NewDirectMessageForm/>
    </div>
  )} else {
    return(
      <p>Loading messages...</p>
    )
  }
}

export default DisplayDirectMessages;