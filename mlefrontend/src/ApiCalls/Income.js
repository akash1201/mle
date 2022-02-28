import { BASE_URL } from "../Constants/Constants";
import axios from 'axios';

const getIncome = async () => {

          let userInfo = JSON.parse(localStorage.getItem('userInfo'))
          let config = {
               headers : {
                    Authorization : `Bearer ${userInfo.token}`
               }
          }
          try{
             let response = await axios.get(`/api/income/get-income-chart`, config);
             return response.data.data;
          }catch(err){
               return [];
          }
}

const getMembershipBenefits = async () => {
     let userInfo = JSON.parse(localStorage.getItem('userInfo'))
     let config = {
          headers : {
               Authorization : `Bearer ${userInfo.token}`
          }
     }
     try{
        let response = await axios.get(`/api/income/get-membership-benefits`, config);
        return response.data.data;
     }catch(err){
          return [];
     }
}

export { getIncome, getMembershipBenefits }