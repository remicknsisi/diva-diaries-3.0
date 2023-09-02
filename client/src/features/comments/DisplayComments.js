import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import { fetchComments } from './commentsSlice';

function DisplayComments({ id }) {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments.entities);

  useEffect(() => {
    dispatch(fetchComments());
  }, [])

  const commentsToDisplay = [...comments].filter((c) => c.post_id === id)

  const commentsList = commentsToDisplay.map((c) => (
    <Comment key={c.id} comment={c}/>
  ))

      //want to render comments whose post_id matches the post's id it apepars on

  return (
    <div>
      {commentsList}
    </div>
  );
}

export default DisplayComments;