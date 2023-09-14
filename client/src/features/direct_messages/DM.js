import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DM({ message }) {
  const { content, user_id, recipient_id } = message

  return (
    <div>
        <p>{content}</p>
    </div>
  );
}

export default DM;