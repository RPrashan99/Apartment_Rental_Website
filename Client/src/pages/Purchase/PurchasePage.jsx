import React, { useEffect, useState } from 'react'
import classes from './purchasepage.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getById } from '../../services/locationService';
import Header from '../../components/Header/Header';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { usePurchase } from '../../hooks/usePurchase';
import Input from '../../../src/components/Input/Input'
import { purchaseApart } from '../../services/historyService';
import DatePicker from 'react-datepicker';

export default function PurchasePage() {
    const [apartment, setApartment] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const auth = useAuth();
    const {user} = auth;
    const {id} = useParams();
    const navigate = useNavigate();

    const {handleSubmit, register, formState: {errors}} = useForm();
;
    useEffect(() => {
        getById(id).then(setApartment);
    },[id]);

    const handleDateChange = (e) => {
        setSelectedDate(e.targrt.value);
    }

    const submit = async (e) => {
        e.preventDefault();

        console.log('SelectedDate: ', selectedDate);
        
        if(!user || !apartment || !selectedDate){
            console.log('Details are not defined!');
            return;
        }

        const id = user.id;

        const purchaseData = {
            userId: id,
            apartmentName: apartment.name,
            apartmentImage: apartment.price,
            movingDate: selectedDate,
        };

        purchaseApart(purchaseData)
            .then(() => {
                navigate('/history');
            })
            .catch( err => {
                console.error('Error in submission',err);
            })
       
    };
  
    return (
    <div>
        <Header/>
        <>
            {apartment && 
            <div>
                <div className = {classes.container}>

                    <div className={classes.images}>
                        <img className={classes.image}
                            src={`${apartment.imageUrl}`}
                            alt={apartment.name}/>
                    </div>
                    
                    <div className={classes.details}>
                        <div className={classes.apartDetails}>
                            <div className={classes.detailTitle}>Apartment Details</div>
                            <div className={classes.detailsRoom}>
                                <div>Bedroom</div>
                                <div>Living Room</div>
                                <div>Kitchen</div>
                                <div>Washroom</div>
                            </div>
                        </div>
                        <div className={classes.header}>
                            <div className={classes.name}>Name<span className={classes.tab}></span>{apartment.name}</div>
                            <div className={classes.price}>Price <span className={classes.tab}></span> ${apartment.price}/month</div>
                        </div>
                    </div>
                </div>
                <div className={classes.container2}>
                    <div className={classes.description}>
                        {apartment.description}
                    </div>
                    <div className={classes.movingDate}>
                        <div className={classes.available}>
                            <div>Availability: </div>
                            <div>Available</div>
                        </div>
                        <div className={classes.input}>
                            <form onSubmit={submit}>
                                <label htmlFor='movingDate'>Moving Date: </label>
                                <input
                                    type="date"
                                    id="movingDate"
                                    name="movingDate"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    required
                                />
                                <button type='submit'>Apply for Rent</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={classes.container3}>
                    <div className={classes.rulesAndReg}>
                        <div className={classes.title}>Rules and Regulations</div>
                        <ul className={classes.rules}>
                            {
                                apartment.rules?.map(rule => 
                                    <li key={rule}>
                                        {rule}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className={classes.patDetails}>
                        <div className={classes.title}>Payment Details</div>
                        <div className={classes.items}>
                            <div className={classes.itemTitle}>Apartment</div>
                            <div className={classes.item}>Booking Pay <span className={classes.tab2}></span> $500</div>
                            <div className={classes.item}>Monthly Rent<span className={classes.tab2}></span> ${apartment.price}</div>
                        </div>
                    </div>
                    <div className={classes.contact}>
                        <div className={classes.title}>Contact Details</div>
                        <img className={classes.fImage}
                            src={`${apartment.imageUrl}`}
                            alt={apartment.name}/>
                        <div>{apartment.name}</div>
                        <div>{apartment.teleNumber}</div>
                        <div>{apartment.email}</div>
                        <div>All contacts and emails are verified</div>
                    </div>
                </div>
            </div>
            }
        </>

        
    </div>
  )
}
