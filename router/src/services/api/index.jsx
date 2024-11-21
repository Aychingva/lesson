import axios from "axios"

const apiurl = "https://dummyjson.com"
export const api = axios.create({
    baseUrl: apiurl
})