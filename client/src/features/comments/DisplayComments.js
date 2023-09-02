import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import Comment from "./Comment";

function DisplayComments() {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments.entities);

  useEffect(() => {
    dispatch(fetchComments());
  }, [])

  const commentsList = comments.map((c) => (
    <Comment key={c.id} comment={c}/>
  ))

  return (
    <div>
      {commentsList}
    </div>
  );
}

export default DisplayComments;