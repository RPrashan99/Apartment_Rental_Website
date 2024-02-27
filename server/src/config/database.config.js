import { connect, set } from "mongoose";
import { UserModel } from "../models/user.module.js";
import { ApartmentModel } from "../models/apartment.module.js";
import { sample_user } from "../data.js";
import { sample_apartments } from "../data.js";
import { sample_purchase } from "../data.js";
import bcrypt from 'bcryptjs';
import { HistoryModel } from "../models/history.module.js";
const PASSWORD_HASH__SALT_ROUNDS = 10;

set('strictQuery',true);

export const dbconnect = async () => {
    try{
        connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await seedUsers();
        await seedApartments();
        await seedHistory();
        console.log('Connect Successful!');
    } catch (error) {
        console.log(error);
    }
};

async function seedUsers() {
    const userCount = await UserModel.countDocuments();
    if(userCount > 0){
        console.log('User seed is already done!');
        return;
    }

    for( let user of sample_user){
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH__SALT_ROUNDS);
        await UserModel.create(user);
    }

    console.log('User seed is done!');
};

async function seedApartments() {
    const apartmentCount = await ApartmentModel.countDocuments();
    if(apartmentCount > 0){
        console.log('Apartment seed is already done!');
        return;
    }

    for( let apartment of sample_apartments){
        apartment.imageUrl = `/apartments/${apartment.imageUrl}`;
        await ApartmentModel.create(apartment);
    }

    console.log('Apartment seed is done!');
};

async function seedHistory() {
    const historyCount = await HistoryModel.countDocuments();
    if(historyCount > 0){
        console.log('History seed is already done!');
        return;
    }

    for( let purchase of sample_purchase){
        purchase.apartmentImage = `/apartments/${purchase.apartmentImage}`;
        await HistoryModel.create(purchase);
    }

    console.log('History seed is done!');
};