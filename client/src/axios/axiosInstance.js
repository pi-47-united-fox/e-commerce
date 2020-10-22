import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'https://ecommerce-cms-idham.herokuapp.com'
})

// const axiosInstance = axios.create({
//     baseURL:'http://localhost:3000'
// })

export default axiosInstance