import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import classes from './login.module.css'
import { useForm } from 'react-hook-form'
import Input from './components/Input/Input'
import { useAuth } from './hooks/useAuth'
import Button from './components/Button/Button'

function Login(){

    const { 
    handleSubmit,
    register,
    formState: {errors},
    } = useForm();

    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [ params ] = useSearchParams();
    const returnUrl = params.get('returnUrl');

    useEffect(() => {
        if(!user) return;

        const admin = user.isAdmin;

        returnUrl? navigate(returnUrl) : (
            admin? navigate('/admin') : navigate('/')
        );
    },[user]);

    const submit = async({email, password}) => {
        await login(email,password);
    }

    return(
        <div className={classes.container}>
            <div className={classes.details}>
                <div className={classes.title}>Login</div>
                <div className={classes.functions}>
                    <div className={classes.logo}>
                        <img className={classes.image}
                            src={'/logo/GVlogo.png'}
                            alt='Logo'/>
                        <div className={classes.note}>Live Green Live Happily</div>
                    </div>
                    <div className={classes.form}>
                        <form onSubmit={handleSubmit(submit)} noValidate>
                            <Input
                                type="email"
                                label="Email"
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[\w-.]+@([\w-.]+\.)+[\w-.]{2,63}$/i,
                                        message: 'Email is not valid',
                                    },
                                })}

                                error={errors.email}
                            />

                            <Input 
                                type="password"
                                label="Password"
                                {...register('password', {
                                    required: true,
                                })}
                                error={errors.password}
                            />

                            <Button type="submit" text="Login"/>

                            <div className={classes.link}>
                                <div className={classes.accountReg}>Don't have an Account</div> 
                                <Link to ={`/register${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>
                                    Signup
                                </Link>
                            </div>
                        </form>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Login;