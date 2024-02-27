import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import classes from './home.module.css'

function Home(){

   return(
      <div className={classes.container}>
        <Header/>
        <HomePage/>
      </div>
    
   )
}

export default Home;