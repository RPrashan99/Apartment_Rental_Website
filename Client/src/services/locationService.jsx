import axios from 'axios'

export const getAll = async () => {
    const {data} = await axios.get('api/apartments');
    return data;
};

export const search = async searchTerm => {
    const {data} = await axios.get('api/apartments/search/' + searchTerm);
    return data;
};

export const getById = async apartId => {
    const {data} = await axios.get('api/apartments/' + apartId);
    return data;
};

export const addApartment = async ApartData => {
    const {data} = await axios.post('api/apartments/add',ApartData);
    return data;
}