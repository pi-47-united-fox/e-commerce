import axios from 'axios'
const server = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://ecommerce-cms-porto.herokuapp.com/'
  
})

export default server
