import React, { useState } from 'react';
import classes from './addPage.module.css'
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addApartment } from '../../services/locationService';
import ImageUpload from '../../components/ImageUpload/ImageUpload';

export default function AddPage() {

    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState(null);

    const { 
        handleSubmit,
        register,
        formState: {errors},
        } = useForm();

    const submit = async ApartData => {
        {
            imageUrl && {...ApartData, image: imageUrl};
        }
        addApartment(ApartData)
            .then(navigate('/searchPage'))
            .catch(err => {
                console.error('Apartment not added!',err);
            })
    };

    const handleImageSelect = (url, image) => {
        setImageUrl(url);
        console.log('Image added!');
    }

  return (
    <>
        <Header/>
        <div className={classes.container}>
            <div className={classes.title}>Add Apartment</div>
            <div>
                <ImageUpload onImageSelect={handleImageSelect}/>
            </div>
            <div className= {classes.form}>
                <form onSubmit={handleSubmit(submit)}>
                    <Input
                        type="text"
                        label="Apartment Name"
                        className = {classes.input}
                        {...register('name', {
                            required: true,
                        })}

                        error={errors.name}
                    />

                    <Input
                        type="number"
                        label="Price"
                        className = {classes.input}
                        {...register('price', {
                            required: true,
                        })}

                        error={errors.price}
                    />

                    <Input
                        type="text"
                        label="City"
                        className = {classes.input}
                        {...register('name', {
                            required: true,
                        })}

                        error={errors.name}
                    />

                    <Input
                        type="text"
                        label="Country"
                        {...register('country', {
                            required: true,
                        })}

                        error={errors.country}
                    />

                    <Input
                        type="text"
                        label="Description"
                        {...register('description', {
                            required: true,
                        })}

                        error={errors.description}
                    />

                    <Input
                        type="email"
                        label="Email"
                        {...register('email', {
                            required: true,
                        })}

                        error={errors.email}
                    />

                    <Input
                        type="text"
                        label="Telephone No."
                        {...register('teleNo', {
                            required: true,
                        })}

                        error={errors.teleNo}
                    />

                    <Button type='submit' text='Add'/>
                    
                </form>
            </div>
        </div>
    </>
  )
}
