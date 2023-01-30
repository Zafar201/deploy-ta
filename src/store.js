// const { createStore } = require("redux");
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import {passwordCreateReducer, userRejectReducer,countListReducer,bookingListReducer ,approveBookingReducer,rejectBookingReducer,getSignupRequestReducer,userApproveReducer, getAllUsersApproved, userSuspendReducer,adminSigninReducer, unSuspendReducer, getAgentSignupRequestReducer, agentApproveReducer, agentRejectReducer, agentBookingListReducer, agentApproveBookingReducer, agentRejectBookingReducer} from './reducers/adminReducer';
import { agentAccountCreateReducer, agentBokkingReducer, agentCheckPropertyReducer, agentGetQuoteReducer, agentPasswordCreateReducer, agentPropertyDetailsReducer, agentSigninReducer } from './reducers/agentReducer';
import { addproperrtyReducer,accountCreateReducer, addRoomReducer, bookingConfirmReducer, checkPropertyReducer, getRoomDetailsReducer, getRoomsDetailsReducer, propertyCreateReducer, propertyDeleteReducer, propertyDetailsReducer, propertyListReducer, propertyUpdateReducer, roomDeleteReducer, roomDetailsReducer, roomUpdateReducer,userSigninReducer, propImageDeleteReducer, roomImageDeleteReducer } from './reducers/generalReducer';

const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    adminSignin: {
      adminInfo: localStorage.getItem('adminInfo')
        ? JSON.parse(localStorage.getItem('adminInfo'))
        : null,
    },
    agentSignin: {
      agentInfo: localStorage.getItem('agentInfo')
        ? JSON.parse(localStorage.getItem('agentInfo'))
        : null,
    },
  };
const reducer=combineReducers({
 propertyList:propertyListReducer,
 propertyCreate:addproperrtyReducer,
 propertyDelete:propertyDeleteReducer,
 propertyDetails:propertyDetailsReducer,
 propertyUpdate:propertyUpdateReducer,
 roomAdd:addRoomReducer,
 roomDetails:roomDetailsReducer,
 getRooms:getRoomsDetailsReducer,
 roomDelete:roomDeleteReducer,
 roomUpdate:roomUpdateReducer,
 checkPropertys:checkPropertyReducer,
 bookingConfirm:bookingConfirmReducer,
 countList:countListReducer,
 bookingList:bookingListReducer,
 approveBooking:approveBookingReducer,
 rejectBooking:rejectBookingReducer,
 accountCreate:accountCreateReducer,
 signupCreate:getSignupRequestReducer,
 approveUser:userApproveReducer,
 rejectUser:userRejectReducer,
 createPssword:passwordCreateReducer,
 userSignin:userSigninReducer,
 allUsersApproved:getAllUsersApproved,
 userSuspend:userSuspendReducer,
 adminSignin:adminSigninReducer,
 unSuspend:unSuspendReducer,
 propImgDelete:propImageDeleteReducer,
 roomImgDelete:roomImageDeleteReducer,
 agentProperties:agentCheckPropertyReducer, 
 agentPropertyDetails:agentPropertyDetailsReducer,
 agentCreateAccount:agentAccountCreateReducer,
 agentCreateRequest:getAgentSignupRequestReducer,
 approveAgent:agentApproveReducer,
 rejectAgent:agentRejectReducer,
 agentPasswordCreate:agentPasswordCreateReducer,
 agentSignin:agentSigninReducer,
 agentGetQuote:agentGetQuoteReducer,
 agentBooking:agentBokkingReducer,
 agentBookingList:agentBookingListReducer,
 agentApproveBooking:agentApproveBookingReducer,
 agentRejectBooking:agentRejectBookingReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store

