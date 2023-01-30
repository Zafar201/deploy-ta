import axios from "axios";
import { AGENT_BOOKING_FAIL, AGENT_BOOKING_REQUEST, AGENT_BOOKING_SUCCESS, AGENT_CREATE_ACCOUNT_FAIL, AGENT_CREATE_ACCOUNT_REQUEST, AGENT_CREATE_ACCOUNT_SUCCESS, AGENT_CREATE_PASSWORD_FAIL, AGENT_CREATE_PASSWORD_REQUEST, AGENT_CREATE_PASSWORD_SUCCESS, AGENT_PROPERTIES_DETAILS_FAIL, AGENT_PROPERTIES_DETAILS_REQUEST, AGENT_PROPERTIES_DETAILS_SUCCESS, AGENT_PROPERTIES_FAIL, AGENT_PROPERTIES_REQUEST, AGENT_PROPERTIES_SUCCESS, AGENT_SIGNIN_FAIL, AGENT_SIGNIN_REQUEST, AGENT_SIGNIN_SUCCESS, AGENT_SIGNOUT, GETQUOTE_FAIL, GETQUOTE_REQUEST, GETQUOTE_SUCCESS } from "../constants/agentConstant";
import {  URL } from "../constants/generalConstants";

export const checkPropertyAgents = (location,rating='0',name='all',type='all',meal_plan='all',transfer='all',price='all') =>async(dispatch,getState)=>{
  // console.log(rating,'rtt')
    dispatch({type:AGENT_PROPERTIES_REQUEST});
    const { agentSignin: { agentInfo }} = getState();
    try{
        const {data} =await axios.get(`${URL}/api/agent/search?location=${location}&starring=${rating}&name=${name}&holiday_type=${type}&meal_plan=${meal_plan}&transfer=${transfer}&price=${price}`,{
          headers: { "x-auth-token": `${agentInfo.token}`},
        })
        dispatch({type:AGENT_PROPERTIES_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:AGENT_PROPERTIES_FAIL,payload:error.message})
    }
}


export const detailsPropertyAgent = (propId,from,to,rooms) => async (dispatch,getState) => {
    dispatch({ type: AGENT_PROPERTIES_DETAILS_REQUEST, payload:{propId,from,to,rooms} });
    const { agentSignin: { agentInfo }} = getState();

    
    try {
      const {data} = await axios.post(`${URL}/api/agent/get-a-property/${propId}`,{from,to,rooms},{
        headers: { "x-auth-token": `${agentInfo.token}`},
      });
   
      dispatch({ type: AGENT_PROPERTIES_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: AGENT_PROPERTIES_DETAILS_FAIL,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      });
    }
  };  


  export const getQuote= (guest_name,propId,property_name,from,to,rooms,tax,extra_charges,cancellation_policy,t_and_c,nett_total_price,nationality,splitStay)=>async(dispatch,getState)=>{
    dispatch({type:GETQUOTE_REQUEST})
    const { agentSignin: { agentInfo }} = getState();
    try{
      const {data} = await axios.post(`${URL}/api/agent/get-qoute`,{guest_name,propId,property_name,from,to,rooms,tax,extra_charges,cancellation_policy,t_and_c,nett_total_price,nationality,splitStay},{
        headers: { "x-auth-token": `${agentInfo.token}`},
      });
      dispatch({type:GETQUOTE_SUCCESS,payload:data.qoute})
    }catch(error){
      dispatch({
        type: GETQUOTE_FAIL,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      });
    }
  }

  export const bookingAgent= (guest_name,propId,property_name,from,to,rooms,tax,extra_charges,cancellation_policy,t_and_c,nett_total_price,nationality,splitStay)=>async(dispatch,getState)=>{
    dispatch({type:AGENT_BOOKING_REQUEST,payload:{guest_name,propId,property_name,from,to,rooms,tax,extra_charges,cancellation_policy,t_and_c,nett_total_price,nationality,splitStay:splitStay}})
    const { agentSignin: { agentInfo }} = getState();
    try{
      const {data} = await axios.post(`${URL}/api/agent/add-booking`,{guest_name,propId,property_name,from,to,rooms,tax,extra_charges,cancellation_policy,t_and_c,nett_total_price,nationality,splitStay},{
        headers: { "x-auth-token": `${agentInfo.token}`},
      });
      dispatch({type:AGENT_BOOKING_SUCCESS,payload:data})
    }catch(error){
      dispatch({
        type: AGENT_BOOKING_FAIL,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
      });
    }
  }


  export const createAccountAgent=( f_name,l_name,email,phone,address)=>async(dispatch)=>{
    dispatch({type:AGENT_CREATE_ACCOUNT_REQUEST, f_name,l_name,email,phone,address})
    try{
      const {data}=await axios.post(`${URL}/api/agent/signup`,{ f_name,l_name,email,phone,address})
      dispatch({type:AGENT_CREATE_ACCOUNT_SUCCESS,payload:data})
    }catch(error){
     const message =
     error.response && error.response.data.message
       ? error.response.data.message
       : error.message;
      dispatch({ type: AGENT_CREATE_ACCOUNT_FAIL, payload: error.response.data.message })
 
    }
 }

 export const createPasswordAgent=(password,userId)=>async(dispatch)=>{
  dispatch({type:AGENT_CREATE_PASSWORD_REQUEST});
 

  try{
    const {data} = await axios.put(`${URL}/api/agent/update-password/${userId}`,{password})
    dispatch({type:AGENT_CREATE_PASSWORD_SUCCESS,payload:data});
    // dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    // localStorage.setItem('userInfo', JSON.stringify(data));
   
  }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: AGENT_CREATE_PASSWORD_FAIL, payload: message });
  }
}


export const agentSignIn =(email,password)=>async(dispatch)=>{
  dispatch({type:AGENT_SIGNIN_REQUEST,payload:{email,password}});
  try{
    const {data}= await axios.post(`${URL}/api/agent/login`,{email,password})
    dispatch({type:AGENT_SIGNIN_SUCCESS,payload:data});
    localStorage.setItem('agentInfo', JSON.stringify(data));
   
  }catch(error){
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
     dispatch({ type: AGENT_SIGNIN_FAIL, payload: message })
  }
}

export const agentSignout = () => (dispatch) => {
  localStorage.removeItem('agentInfo');
  dispatch({ type: AGENT_SIGNOUT });
  // document.location.href = '/signin';
};