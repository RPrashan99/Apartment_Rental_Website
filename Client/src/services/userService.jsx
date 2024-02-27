import axios from "axios";

export const getUser = () =>
localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user'))
: null;

export const getAllUsers = async() =>
{
    const {data} = await axios.get('/api/users');
    return data;
};

export const login = async (email, password) => {
    const {data} = await axios.post('api/users/login', {email, password});
    localStorage.setItem('user', JSON.stringify(data));
    return data;
};

export const register = async registerData => {
    const {data} = await axios.post('api/users/register',registerData);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const deleteUser = async userId => {
    console.log('deleting user with id:', userId);
    const {data} = await axios.delete(`api/users/delete/${userId}`);
    return data;
}
