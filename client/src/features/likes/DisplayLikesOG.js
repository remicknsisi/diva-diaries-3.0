// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchLikes } from './likesSlice';
// import EmptyHeartIcon from "../icons/EmptyHeartIcon";
// import FullHeartIcon from "../icons/FullHeartIcon";
// import { addLike, removeLike } from "./likesSlice";
// import { useNavigate } from "react-router-dom";

// function DisplayLikes({ id, selfLiked }) {
//     const [errorsList, setErrorsList] = useState([])
//     const [error, setError] = useState('')
//     const navigate = useNavigate()
//     const dispatch = useDispatch();
//     const likes = useSelector((state) => state.likes.entities);
//     useEffect(() => {
//         dispatch(fetchLikes());
//     }, [])

//     const currentUserJSON = useSelector(state => state.auth.currentUser)
//     const currentUser = JSON.parse(currentUserJSON)

//     const likesToDisplay = [...likes].filter((l) => l.post_id === id)

//     function handleLike() {
//         fetch(`/posts/${id}/likes`, {
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify({
//                 post_id: id
//         })
//           })
//           .then(res => {
//             if(res.ok){
//                 res.json().then((newLike) => {
//                     dispatch(addLike(newLike));
//                     navigate('/')})
//             } else {
//                 res.json().then((message) => {
//                     console.log(message)
//                     const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
//                     setErrorsList(errorLis)
//                 })
//             }
//         })
//     }

//     function handleUnlike() {
//         const unlikedLike = likesToDisplay.find((l) => l.user_id === currentUser.user.id)

//         fetch(`/likes/${unlikedLike.id}`, {
//             method: 'DELETE',
//             headers: {"Content-Type": "application/json"},
//           })
//           .then(res => {
//             if(res.ok){
//                 res.json().then((deletedLike) => {
//                     dispatch(removeLike(deletedLike.id));
//                     })
//             } else {
//                 res.json().then((message) => {
//                     const errorMessage = message.error
//                     setError(errorMessage)
//                 })
//             }
//         })
//     }

//   return (
//     <div>
//         { selfLiked ? <button onClick={() => handleUnlike()}><FullHeartIcon/> {likesToDisplay.length} Likes</button> : <button onClick={() => handleLike()}><EmptyHeartIcon/> {likesToDisplay.length} Likes</button>}
//         <p className="error-message">{errorsList}</p>  
//         <p className="error-message">{error}</p>    
//     </div>
//   );
// }

// export default DisplayLikes;
    