import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import { fetchComments } from './commentsSlice';

function DisplayComments({ id }) {
    const [isHidden, setIsHidden] = useState(true)

    const dispatch = useDispatch();

    const comments = useSelector((state) => state.comments.entities);

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch])

    const commentsToDisplay = [...comments].filter((c) => c.post_id === id)

    const commentsList = commentsToDisplay.map((c) => (
        <Comment key={c.id} comment={c}/>
    ))

  return (
    <div>
      {isHidden ? 
        <p onClick={() => setIsHidden(false)}>View all {commentsToDisplay.length} comments</p> 
        : 
        <>
            <p onClick={() => setIsHidden(true)}>Hide all {commentsToDisplay.length} comments</p> 
            {commentsList}
        </>
      }
    </div>
  );
}

export default DisplayComments;