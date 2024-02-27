import React, { useState } from 'react'
import classes from './homepage.module.css'
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function HomePage() {

  const {user} = useAuth();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <img className={classes.logo}
          src={'/logo/GVlogo.png'}
          alt='Logo image'/>
        <div className={classes.note}>
          Live Green Live Happily
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.paraTitle}>Our most popular destinations</div>
        <div className={classes.para}>We make the best apartments from all around the world available fro you.</div>
        <div className={classes.details}>
          <div className={classes.item}>
            <img className={classes.image}
                src={'/locations/Italy.jpg'}
                alt= 'Italy'/>
            <div className={classes.name}>Italy</div>
          </div>
          <div className={classes.item}>
            <img className={classes.image}
                src={'/locations/Sigiriya.jpg'}
                alt= 'Sigiriya'/>
            <div className={classes.name}>Sri Lanka </div>
          </div>
          <div className={classes.item}>
            <img className={classes.image}
              src={'/locations/Paris.jpg'}
              alt= 'Paris'/>
            <div className={classes.name}>France</div>
          </div>
        </div>
      </div>
      <div className={classes.content2}>
        <div className={classes.c2Para}>
          <div className={classes.para2Title}>Find a home perefect for you</div>
          <div className={classes.para2}>Our company provide you with variety of apartments in different locations to choose from making your life comfortable</div>
          {user? (
            <Link to="/searchPage">See more</Link>
          ):(
            <Link to="/login">See more</Link>
          )}
        </div>
        <img className={classes.image2}
            src={'/apartments/ApartDf.jpg'} 
            alt='Image'/>
        
      </div>
    </div>
  )
}
