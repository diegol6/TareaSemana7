import axios from "axios";


export const conexionAPI1 = axios.create({
    baseURL : 'https://api.openweathermap.org/data/2.5'
});

// export const conexionAPI2 = axios.create({
//     baseURL : 'https://api.openweathermap.org/data/2.5'
// });

// export const conexionAPI3 = axios.create({
//     baseURL : 'https://api.openweathermap.org/data/2.5'
// });