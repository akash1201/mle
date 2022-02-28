import { BASE_URL } from "../Constants/Constants"
import axios from 'axios'

const login = async (userName, password) => {

let data = {
            userName : userName,
            password : password
}

 try{
          let response = await axios.post(`/api/users/login`, data)

          return response
 }
 catch(err){
      return err.response
 }


}

const generateRpin = async () => {

     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }

   try{
     let response = await axios.get(`/api/users/generate-rpin`, config)
     return response
   }catch(err){
        return err.response
   }

}

const generateOrder = async () => {
     try{
          let response = await axios.post(`/api/razorpay/create-order`)
          return response
        }catch(err){
             return err.response
        }
}

const getAllRpins = async () => {

     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }

   try{
     let response = await axios.get(`/api/users/get-all-rpin`, config)
     return response
   }catch(err){
        return err.response
   }

}

const registerUser = async (data) => {
     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }

   try{
     let response = await axios.post(`/api/users/register-user`, data,config)
     return response
   }catch(err){
        return err.response
   }
}

const getMyDownLines = async () => {
   
     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }

   try{
     let response = await axios.get(`/api/users/get-my-downlines`, config)
     return response
   }catch(err){
        return err.response
   }

}

const getUserProfile = async () => {
   
     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }

   try{
     let response = await axios.get(`/api/users/get-user-info`, config)
     return response
   }catch(err){
        return err.response
   }

}

const registerVendor = async (data) => {
     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }

   try{
     let response = await axios.post(`/api/users/register-vendor`, data,config)
     return response
   }catch(err){
        return err.response
   }
}

const addUser = async (data) => {
     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }
     try{
          let response = await axios.post(`/api/users/add-user`, data,config)
          return response
        }catch(err){
             return err.response
        }

}
const getVendors = async () => {
     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }

   try{
     let response = await axios.get(`${BASE_URL}/users/get-vendors`, config)
     return response.data
   }catch(err){
        return err.response
   }
}

const getUsers = async () => {
     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }

   try{
     let response = await axios.get(`${BASE_URL}/users/get-users`, config)
     return response.data
   }catch(err){
        return err.response
   }
}
export {generateOrder, getUsers,getVendors, addUser,login, generateRpin, getAllRpins, registerUser, getMyDownLines, getUserProfile, registerVendor}