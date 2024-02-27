import { Router } from "express";
import { ApartmentModel } from "../models/apartment.module.js";
import { HistoryModel } from "../models/history.module.js";
import { UserModel } from "../models/user.module.js";
import handler from 'express-async-handler';

const router = Router();

router.get('/', handler(async (req,res) => {
    const requests = await HistoryModel.find({});
    res.send(requests);
}));

router.get('/:userId', handler(async (req, res) => {
    const {userId} = req.params;

    const histories = await HistoryModel.find({userId: userId});

    res.send(histories);
}));

router.post('/purchase',
        handler(async (req, res) =>{
            const purchaseData = req.body;

            const id = HistoryModel.countDocuments();

            const newPurchase = {
                id:id+1,
                userId: purchaseData.userId,
                apartmentName : purchaseData.apartmentName,
                apartmentImage: purchaseData.apartmentImage,
                movingDate: purchaseData.movingDate,
                apply: "Processing",
            };

            const result = await HistoryModel.create(newPurchase);
            res.send(result);
        }))

export default router;