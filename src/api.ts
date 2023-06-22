import axios from "axios"
import md5 from "md5"

export const API_URL = "https://gateway.marvel.com:443/v1/public/"

const ts = Number(new Date());

const hash = md5(ts + process.env.REACT_APP_PRIVATE_API_KEY! + process.env.REACT_APP_PUBLIC_API_KEY)

export const api = axios.create({
    baseURL: `${API_URL}/`, 
    params: {
        ts: ts,
        apikey: process.env.REACT_APP_PUBLIC_API_KEY,
        hash: hash,
        limit: 100
        },
})
