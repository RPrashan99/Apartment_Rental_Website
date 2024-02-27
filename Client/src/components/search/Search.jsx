import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css'

export default function Search() {

    const [term, setTerm] = useState('');
    const navigate = useNavigate();
    const {searchTerm} = useParams();

    useEffect(() => {
        setTerm(searchTerm ?? '')
    },[searchTerm])

    const search = async () => {
        term? navigate('/searchPage/search/'+term) : navigate('/searchPage');
    };

    return (
    <div className={classes.container}>
        <input type='text'
            placeholder='Search Location(city/country)'
            onChange={e => setTerm(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && search()}
            value={term}/>

        <button onClick={search}>Search</button>
    </div>
  )
}
