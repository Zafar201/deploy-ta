import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function AgentRoute({ children }) {
    const agentSignin = useSelector((state) => state.agentSignin);
    const { agentInfo } = agentSignin;
    return agentInfo ? children : <Navigate to="/agent"/>;
  };

export default AgentRoute