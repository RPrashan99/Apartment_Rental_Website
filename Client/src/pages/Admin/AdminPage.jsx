import React, { useEffect, useReducer, useState } from 'react'
import classes from './adminPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { deleteUser, getAllUsers } from '../../services/userService';
import NotFound from '../../components/NotFound/NotFound';
import ThumbUsers from '../../components/ThumbUsers/ThumbUsers';
import { useAuth } from '../../hooks/useAuth';

const intialState = { users: []};

    const reducer = (state, action) => {
        switch (action.type) {
            case 'USERS_LOADED':
                return {...state, users: action.payload};
            default:
                return state;
        }
    };

export default function AdminPage() {

    const navigate = useNavigate();
    const [state,dispatch] = useReducer(reducer, intialState);
    const {users} = state;
    const auth = useAuth();
    const {user} = auth;

    const {userId} = useParams();

    useEffect(() => {
        if(!user.isAdmin){
            navigate('/');
        }
        const loadUsers = getAllUsers();
        loadUsers.then(users => dispatch({type: 'USERS_LOADED', payload: users}));
    },[users]);

  return (
    <div className={classes.container}>
        <div className={classes.header}>
            <img className={classes.logo}
                src={'/logo/GVlogo.png'}
                alt='Logo image'/>
            <div className={classes.heads}> Admin Page</div>
            <Link to="/">Home</Link>
        </div>
        <div className={classes.list}>
            <div className={classes.title}> User List</div>
            <div className={classes.list}>
                {users.length === 0 && <NotFound/>}
                <ThumbUsers users={users}/>
            </div>
        </div>
    </div>
  )
}
