import axios, { Axios } from "axios";

//append the starting of link
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance