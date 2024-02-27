import React from 'react'
import classes from './thumbnails.module.css'
import { Link } from 'react-router-dom'

export default function Thumbnails({apartments}) {
  return (
    <ul className={classes.list}>
        {
            apartments.map(apartment => 
                <li key={apartment.id}>
                    <Link to={`/purchase/${apartment.id}`}>
                        <img className={classes.image}
                        src={`${apartment.imageUrl}`}
                        alt={apartment.name}/>
                    
                        <div className={classes.content}>
                            <div className={classes.name}>{apartment.name}</div>
                            <div className={classes.price}>Price: ${apartment.price}</div>
                            <div className={classes.city}>City: {apartment.city}</div>
                            <div className={classes.country}>Country: {apartment.country}</div>
                        </div>
                    </Link>
                </li>
            )
        }
    </ul>
  )
}
