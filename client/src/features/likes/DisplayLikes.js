import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikes } from './likesSlice';
import EmptyHeartIcon from "../EmptyHeartIcon";
import { addLike } from "./likesSlice"

function DisplayLikes({ id }) {
    const dispatch = useDispatch();

    const likes = useSelector((state) => state.likes.entities);

    useEffect(() => {
        dispatch(fetchLikes());
    }, [])

    function handleOnClick() {
        dispatch(addLike());
    }

    const likesToDisplay = [...likes].filter((l) => l.post_id === id)

  return (
    <div>
        <button onClick={handleOnClick}><EmptyHeartIcon/> {likesToDisplay.length} Likes</button>
    </div>
  );
}

export default DisplayLikes;