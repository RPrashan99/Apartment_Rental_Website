import React, { useState } from 'react'
import classes from './thumbUser.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { deleteUser } from '../../services/userService'

export default function ThumbUsers({users}) {

    const [selectUser, setSelectUser] = useState({});

    const navigate = useNavigate();

    const setUser = async (user) => {
        
        if (!user){
            console.log('User is not defined');
            return;
        }

        try{
            setSelectUser(user);
            await deleteUser(user.id);
            navigate('/admin');
        } catch (error){
            console.log('Deletion error!',error);
        }
        
    };

  return (
    <ul className={classes.list}>
        {
            users.map(user => 
                <li key={user.id}>
                    <div className={classes.content}>
                        <div className={classes.name}>User Name:<span className={classes.tab}></span> {user.name}</div>
                        <div className={classes.price}>User Email:<span className={classes.tab}></span> {user.email}</div>
                        <div className={classes.country}>isAdmin:<span className={classes.tab}></span> {user.isAdmin? 'true': 'false'}</div>
                        <button onClick={() => setUser(user)}>Delete</button>
                    </div>
                </li>
            )
        }
    </ul>
  )
}
