import React, { useState, useEffect } from 'react';
import { logout } from './auth/authActions';
import { useDispatch, useSelector } from 'react-redux';

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

  const currentUser = useSelector(state => state.auth.currentUser)


  return (
    <header className={`sticky-menu ${isSticky ? 'sticky' : ''}`}>
    <header className="App-header">
        <a class="title" href={`/`}>DivaDiaries</a>
        {currentUser !== 'null' ? <a class="button" href={`/login`} onClick={() => logout(currentUser)}>Logout</a> : <a class="button" href={`/login`}>Login</a>}
      </header>
      {/* Your menu items go here */}
      <p>this is the sticky menu!</p>
    </header>
  );
}

export default StickyMenu;