// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "./usersSlice";
// import UserDetails from "./UserDetails";
// import { useParams } from 'react-router-dom';

// function DisplayUser() {
//   const dispatch = useDispatch();

//   const users = useSelector((state) => state.users.entities);
//   const { id } = useParams();
//   console.log(users, id)

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [])

//   const userToDisplay = users.find((u) => u.id === id*1)

//   // const usersList = users.map((u) => (
//   //   <UserDetails key={u.id} user={u}/>
//   // ))

//   return (
//     <div>
//       <UserDetails user={userToDisplay}/>
//     </div>
//   );
// }

// export default DisplayUser;