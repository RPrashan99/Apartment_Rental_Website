import { Router } from "express";
import { ApartmentModel } from "../models/apartment.module.js";
import handler from 'express-async-handler';

const router = Router();

router.get('/', handler(async (req,res) => {
    const apartments = await ApartmentModel.find({});
    res.send(apartments);
}));

router.get('/search/:searchTerm', handler(async (req, res) => {
    const {searchTerm} = req.params;
    const searchRegex = new RegExp(searchTerm, 'i');

    const apartments = await ApartmentModel.find({name: { $regex: searchRegex}});

    res.send(apartments);
}));

router.get('/:apartId', handler(async (req, res) => {
    const {apartId} = req.params;
    const apartment = await ApartmentModel.findOne({id: apartId});

    res.send(apartment);
}));

router.post('/add', handler(async (req, res) => {
    const {ApartData} = req.body;

    const apartId = ApartmentModel.countDocuments();

    const newApartment = {
        id: apartId + 1,
        name: ApartData.name,
        price: ApartData.price,
        imageUrl: ApartData.image,
        city: ApartData.city,
        country: ApartData.country,
        description: ApartData.description,
        available: true,
        rules: ['No pets allowed','No smoking allowed','No littering outside apartments','No musical instrument playing allowed'],
        email: ApartData.email,
        teleNumber: ApartData.teleNumber
    };

    const result = await ApartmentModel.create(newApartment);
    console.log('Apartment created');
    res.send(result);
}));

export default router;