import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const movieSearch = async (movie)=>{
    const res = await axios.get(`https://www.omdbapi.com/?s=${movie}&apikey=${API_KEY}`);
    
    console.log(res.data)
    return res.data;

}