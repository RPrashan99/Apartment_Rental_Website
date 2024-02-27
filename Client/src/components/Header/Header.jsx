import React, { useEffect, useState } from 'react'
import classes from './header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {

  const navigate = useNavigate();

  const {user, logout} = useAuth();
  const [admin, setAdmin] = useState('');

  useEffect(() => {
      const admin = user? user.isAdmin : false;
      setAdmin(admin);
  },[])

  return (

    <header className={classes.header}>
        <div className={classes.container}>
          <Link to="/" className={classes.logo}>
            <img className={classes.image}
                src={`/logo/GVlogo.png`}
                alt='GreenVilla'/>
          </Link>       
          <nav>
            <div className={classes.menu_container}>
              <div className={classes.menu}>
                <Link to="/">Home</Link>
                <Link to="/searchPage">Search</Link>
                {admin && <Link to ="/add">Add</Link>}
                <Link to="/history">Purchase</Link>
                <Link to="/Aboutus">About Us</Link>
              </div>
            </div>
          </nav>
          <div>
            <nav>
              <ul>
                { user? (
                  <li className={classes.user_container}>
                    <Link to="/profile">{user.name}</Link>
                    <div className={classes.user_control}>
                      <a onClick={logout}>Log Out</a>
                    </div>
                  </li>
                ):(
                  <div className={classes.sign}>
                    <Link to="/login">Log In</Link>
                    <Link to="/register">Sign Up</Link>
                  </div>  
                )}
              </ul>
            </nav>
          </div>
        </div>
    </header>

  )
}
