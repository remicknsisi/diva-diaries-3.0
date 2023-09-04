import React, { useState, useEffect } from 'react';
import { logout } from './auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import AccountIcon from './icons/AccountIcon';

function StickyMenu() {
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();

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

  if(currentUser){return (
    <header className={`sticky-menu ${isSticky ? 'sticky' : ''}`}>
        <header className="app-header">
            <a className="title" href={`/`}>DivaDiaries</a>
            <a href={`/users/${currentUser.user.id}`} ><AccountIcon /></a>
            <a className="button" href={`/login`} onClick={() => logout(currentUser)}>Logout</a>
        </header>
    </header>
  );} else {
    return(
        null
    )
  }
}

export default StickyMenu;