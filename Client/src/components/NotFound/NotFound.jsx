import React from 'react'
import classes from './notFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound({message, linkRoute, linktext}) {
  return (
    <div className={classes.container}>
        {message}
        <Link to={linkRoute}>{linktext}</Link>
    </div>
  );
}

NotFound.defaultProps = {
    message : 'Nothing Found !',
    linkRoute: '/searchPage',
    linktext: 'Go To Home Page'
}
