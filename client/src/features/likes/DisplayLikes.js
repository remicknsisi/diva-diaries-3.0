import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLikes } from './likesSlice';
import EmptyHeartIcon from "../EmptyHeartIcon";
import FullHeartIcon from "../FullHeartIcon";
import { addLike } from "./likesSlice"
import { useNavigate } from "react-router-dom";

function DisplayLikes({ id }) {
    const [errorsList, setErrorsList] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const likes = useSelector((state) => state.likes.entities);

    useEffect(() => {
        dispatch(fetchLikes());
    }, [])

    function handleOnClick() {
        fetch(`/likes`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                post_id: id
        })
          })
          .then(res => {
            if(res.ok){
                res.json().then((newLike) => {
                    dispatch(addLike(newLike));
                    navigate('/')})
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    const currentUserJSON = useSelector(state => state.auth.currentUser)
    const currentUser = JSON.parse(currentUserJSON)

    const likesToDisplay = [...likes].filter((l) => l.post_id === id)
    const selfLiked = likesToDisplay.filter((l) => l.user_id === currentUser.id)
    console.log(selfLiked)

  return (
    <div>
        { selfLiked ? <button onClick={handleOnClick}><FullHeartIcon/> {likesToDisplay.length} Likes</button> : <button onClick={handleOnClick}><EmptyHeartIcon/> {likesToDisplay.length} Likes</button>}
        <p className="error-message">{errorsList}</p>
    </div>
  );
}

export default DisplayLikes;