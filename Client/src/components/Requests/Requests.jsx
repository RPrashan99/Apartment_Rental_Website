import React from 'react'
import classes from './requests.module.css'
import { Link } from 'react-router-dom'

export default function Thumbnails({purchases}) {
  return (
    <ul className={classes.list}>
        {
            purchases.map(purchase => 
                <li key={purchase.id}>
                    <img className={classes.image}
                        src={`${purchase.apartmentImage}`}
                        alt={purchase.apartmentName}/>
                    
                        <div className={classes.content}>
                            <div className={classes.city}>Name:<span className={classes.tab}></span> {purchase.apartmentName}</div>
                            <div className={classes.name}>Date:  <span className={classes.tab}></span> {purchase.movingDate}</div>
                            <div className={classes.country}>Status:<span className={classes.tab}></span> {purchase.apply}</div>
                        </div>
                </li>
            )
        }
    </ul>
  )
}