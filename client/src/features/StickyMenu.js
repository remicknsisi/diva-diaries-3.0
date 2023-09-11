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
  const currentUser = JSON.parse(currentUserJSON)

  if (currentUser) {return (
    <header className={`sticky-menu ${isSticky ? 'sticky' : ''}`}>
        <header className="app-header">
            <a className="title" href={`/`}>DivaDiaries</a>
            <a href={`/users/${currentUser.user.id}`} ><AccountIcon /></a>
            <a href={`/users/${currentUser.user.id}/posts`} ><PlusIcon /></a>
            <a className="button" href={`/login`} onClick={() => logout(currentUser.user)}>Logout</a>
            {/* mkae this change to login */}
        </header>
    </header>
  );} else{
    return(
      <header className={`sticky-menu ${isSticky ? 'sticky' : ''}`}>
        <header className="app-header">
            <a className="title">DivaDiaries</a>
        </header>
    </header>
    )
  }
}

export default StickyMenu;