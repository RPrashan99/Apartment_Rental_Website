import axios from "axios";

export const getAllHistory = async () => {
    const {data} = await axios.get('api/history');
    return data;
};

export const searchUser = async userId => {
    const {data} = await axios.get('api/history/' + userId);
    return data;
};

export const purchaseApart = async purchaseData => {
    const {data} = await axios.post('api/history/purchase',purchaseData);
    return data;
};