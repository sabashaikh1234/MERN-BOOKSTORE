import axios from "axios";
const api=axios.create({
    baseURL: 'https://mern-bookstore-sa31.onrender.com/books'
})
export default api
