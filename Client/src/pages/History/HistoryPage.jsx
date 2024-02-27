import React, { useEffect, useReducer, useState } from 'react'
import Header from '../../components/Header/Header'
import classes from './historyPage.module.css'
import { searchUser } from '../../services/historyService';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import { useAuth } from '../../hooks/useAuth';
import Requests from '../../components/Requests/Requests'

const intialState = { purchases: []};

    const reducer = (state, action) => {
        switch (action.type) {
            case 'HISTORY_LOADED':
                return {...state, purchases: action.payload};
            default:
                return state;
        }
    };

export default function HistoryPage() {

  const navigate = useNavigate();
  const [state,dispatch] = useReducer(reducer, intialState);
    const {purchases} = state;

  const auth = useAuth();
  const {user} = auth;
  const userId = user.id;

    useEffect(() => {

      if(!userId) {
        navigate('/login');
      };
        const loadHistory = searchUser(userId);  
        loadHistory.then(purchases => dispatch({type: 'HISTORY_LOADED', payload: purchases}));
    },[userId]);

  return (
    <div>
      <Header/>
      <div className={classes.container}>
        {purchases.length === 0 && (<NotFound/>)}
        <Requests purchases={purchases}/>
      </div>
    </div>
  )
}
