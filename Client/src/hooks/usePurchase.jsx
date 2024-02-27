import React, { Children, createContext, useContext, useState } from 'react'
import * as historyService from '../services/historyService'
import { toast } from 'react-toastify'

const Purchasecontext = createContext(null);

export const PurchaseProvider = ({Children}) => {

    const [purchaseItems, setPurchaseItems] = useState();

    const removeApartment = apartId => {
      const filteredApartments = purchaseItems.filter(item => item.apartment.id !== apartId);
      setPurchaseItems(filteredApartments);
    };

    const registerApartment = async data => {
      try{
          const history = await historyService.purchaseApart(data);
          toast.success('Rent Apply successful!');
      } catch (err) {
          toast.error(err.response.data);
      }
  };

  return (
    <Purchasecontext.Provider value={{ purchase: {items: purchaseItems}, removeApartment,registerApartment}}>
        {Children}
    </Purchasecontext.Provider>
  );
}

export const usePurchase = () => useContext(Purchasecontext);
