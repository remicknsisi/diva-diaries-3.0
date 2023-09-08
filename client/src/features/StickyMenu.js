import React, { useState, useEffect } from 'react';
import { logout } from './auth/authActions';
import { useSelector } from 'react-redux';
import AccountIcon from './icons/AccountIcon';
import PlusIcon from './icons/PlusIcon';

function StickyMenu() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentUserJSON = useSelector(state => state.auth.currentUser)
  // console.log(currentUserJSON, typeof(currentUserJSON))
  const currentUser = JSON.parse(currentUserJSON)
  // let currentUser = null;

  // if (typeof currentUserJSON === 'string') {
  //   try {
  //     currentUser = JSON.parse(currentUserJSON);
  //   } catch (error) {
  //     console.error('Error parsing currentUserJSON:', error);
  //     currentUser = null
  //   }
  // } else if (typeof currentUserJSON === 'object') {
  //   currentUser = currentUserJSON;
  // }
  // console.log(currentUser)

  if(currentUser){return (
    <header className={`sticky-menu ${isSticky ? 'sticky' : ''}`}>
        <header className="app-header">
            <a className="title" href={`/`}>DivaDiaries</a>
            <a href={`/users/${currentUser.user.id}`} ><AccountIcon /></a>
            <a href={`/users/${currentUser.id}/posts`} ><PlusIcon /></a>
            <a className="button" href={`/login`} onClick={() => logout(currentUser)}>Logout</a>
            {/* mkae this change to login */}
        </header>
    </header>
  );} else {
    return(
        null
    )
  }
}

export default StickyMenu;