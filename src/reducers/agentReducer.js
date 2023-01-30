import { AGENT_BOOKING_FAIL, AGENT_BOOKING_REQUEST, AGENT_BOOKING_RESET, AGENT_BOOKING_SUCCESS, AGENT_CREATE_ACCOUNT_FAIL, AGENT_CREATE_ACCOUNT_REQUEST, AGENT_CREATE_ACCOUNT_SUCCESS, AGENT_CREATE_PASSWORD_FAIL, AGENT_CREATE_PASSWORD_REQUEST, AGENT_CREATE_PASSWORD_RESET, AGENT_CREATE_PASSWORD_SUCCESS, AGENT_PROPERTIES_DETAILS_FAIL, AGENT_PROPERTIES_DETAILS_REQUEST, AGENT_PROPERTIES_DETAILS_SUCCESS, AGENT_PROPERTIES_FAIL, AGENT_PROPERTIES_REQUEST, AGENT_PROPERTIES_SUCCESS, AGENT_SIGNIN_FAIL, AGENT_SIGNIN_REQUEST, AGENT_SIGNIN_SUCCESS, AGENT_SIGNOUT, GETQUOTE_FAIL, GETQUOTE_REQUEST, GETQUOTE_SUCCESS } from "../constants/agentConstant";

export const agentCheckPropertyReducer = (state = { loading: true}, action) => {
    switch (action.type) {
        case AGENT_PROPERTIES_REQUEST:
            return { loading: true }
        case AGENT_PROPERTIES_SUCCESS:
            return { loading: false, prop: action.payload.properties, pri:action.payload.properties }
        case AGENT_PROPERTIES_FAIL:
            return { loading: false, error: action.payload }
     
        default:
            return state;
    }
  }
  

  export const agentPropertyDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case AGENT_PROPERTIES_DETAILS_REQUEST:
        return { loading: true };
      case AGENT_PROPERTIES_DETAILS_SUCCESS:
        return { loading: false, property: action.payload.property };
      case AGENT_PROPERTIES_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const agentAccountCreateReducer =(state ={},action)=>{
    switch(action.type){
      case AGENT_CREATE_ACCOUNT_REQUEST:
       return {loading:true}
      case AGENT_CREATE_ACCOUNT_SUCCESS:
        return {loading:false,success:true}
      case AGENT_CREATE_ACCOUNT_FAIL:
        return {loading:false, error:action.payload}
  
      default:
        return state  
    }
  
  }

  export const agentPasswordCreateReducer= (state= {}, action)=>{
    switch(action.type){
      case AGENT_CREATE_PASSWORD_REQUEST:
        return {loading:true};
      case AGENT_CREATE_PASSWORD_SUCCESS:
        return {loading:false,success:true, agentInfo:action.payload};
      case AGENT_CREATE_PASSWORD_FAIL:
        return {loading:false,error:action.payload}
      case AGENT_CREATE_PASSWORD_RESET:
        return {};
      default:
        return state;        
    }
  }

  export const agentSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case AGENT_SIGNIN_REQUEST:
        return { loading: true };
      case AGENT_SIGNIN_SUCCESS:
        return { loading: false, agentInfo: action.payload };
      case AGENT_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case AGENT_SIGNOUT:
        return {};
      default:
        return state;
    }
  };

  export const agentGetQuoteReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case GETQUOTE_REQUEST:
        return { loading: true };
      case GETQUOTE_SUCCESS:
        return { loading: false, getQuotes: action.payload };
      case GETQUOTE_FAIL:
        return { loading: false, error: action.payload };   
      default:
        return state;
    }
  };

  export const agentBokkingReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case AGENT_BOOKING_REQUEST:
            return { loading: true }
        case AGENT_BOOKING_SUCCESS:
            return { loading: false, confirm:action.payload ,success:true}
        case AGENT_BOOKING_FAIL:
            return { loading: false, error: action.payload }
        case AGENT_BOOKING_RESET:
          return {};
        default:
            return state;
    }
  }