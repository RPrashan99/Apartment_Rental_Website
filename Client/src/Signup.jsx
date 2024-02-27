import {useEffect} from 'react'
import { useForm } from 'react-hook-form';
import Input from './components/Input/Input';
import classes from './signup.module.css';
import Button from './components/Button/Button';
import { Link } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import  { useAuth } from './hooks/useAuth';

export default function Signup() {

    const auth = useAuth();
    const { user } = auth;
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const returnUrl = params.get('returnUrl');

    useEffect(() => {
        if(!user) return;
        returnUrl ? navigate(returnUrl) : navigate('/');
    }, [user]);

    const { 
        handleSubmit,
        register,
        getValues,
        formState: {errors},
        } = useForm();

        const submit = async data => {
            await auth.register(data);
        };

  return (
    <div className={classes.container}>
        <div className={classes.details}>
            <div className={classes.title}>SignUp</div>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <Input type="text"
                        label="Name"
                        {...register('name', {
                            required: true,
                            minLength: 5,
                        })}
                        error={errors.name}
                />

                <Input type="email"
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

                <Input type="password"
                        label="Password"
                        {...register('password', {
                            required: true,
                            minLength: 5,
                        })}
                        error={errors.password}
                />

                <Input type="password"
                        label="Confirm Password"
                        {...register('confirmPassword', {
                            required: true,
                            validate: value =>
                                value !== getValues('password')
                                    ? 'Passwords Did Not Match'
                                    : true,
                        })}
                        error={errors.confirmPassword}
                />

                <Button type="submit" text="Register"/>

                <div className={classes.login}>
                    Alreay have an account ? &nbsp;
                    <Link to={`/login?${returnUrl ? 'returnUrl=' + returnUrl : ''}`}>
                        Login
                    </Link>
                </div>
                
            </form>
        </div>
    </div>
  )
}
