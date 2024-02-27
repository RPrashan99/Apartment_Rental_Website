import React, { useEffect, useReducer, useState } from 'react'
import Header from '../../components/Header/Header'
import classes from './searchpage.module.css'
import { getAll, search } from '../../services/locationService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { useNavigate, useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import NotFound from '../../components/NotFound/NotFound';
import { useAuth } from '../../hooks/useAuth';


const intialState = { apartments: []};

    const reducer = (state, action) => {
        switch (action.type) {
            case 'APARTS_LOADED':
                return {...state, apartments: action.payload};
            default:
                return state;
        }
    };

export default function SearchPage() {

    const [state,dispatch] = useReducer(reducer, intialState);
    const navigate = useNavigate();
    const {apartments} = state;
    const auth = useAuth();
    const {user,isLogged} = auth;

    const {searchTerm} = useParams();

    useEffect(() => {

        if(!user) {
            navigate('/login');
        }
        const loadAparts = searchTerm? search(searchTerm) : getAll();
        loadAparts.then(apartments => dispatch({type: 'APARTS_LOADED', payload: apartments}));
    },[searchTerm]);

  return (
    <div>
        <Header/>
        <div>
            <>
                <Search/>
                {apartments.length === 0 && <NotFound/>}
                <Thumbnails apartments = {apartments}/>
            </>
            
        </div>
    </div>
    
  )
}
