import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikes } from './likesSlice';
import EmptyHeartIcon from "../EmptyHeartIcon";

function DisplayLikes({ id }) {
    const dispatch = useDispatch();

    const likes = useSelector((state) => state.likes.entities);

    useEffect(() => {
        dispatch(fetchLikes());
    }, [])

    const likesToDisplay = [...likes].filter((l) => l.post_id === id)

  return (
    <div>
        <button><EmptyHeartIcon/> {likesToDisplay.length} Likes</button>
    </div>
  );
}

export default DisplayLikes;