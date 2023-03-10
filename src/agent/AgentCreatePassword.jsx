import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { createPasswordAgent } from '../actions/agentAction'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

function AgentCreatePassword() {
    const [password,setPassword]= useState("")
    const [confirmPassword,setConfirmPassword] =useState("")
    const agentPasswordCreate= useSelector(state=>state.agentPasswordCreate)
    const {loading,error,userInfo} = agentPasswordCreate
    const dispatch = useDispatch()
    const params = useParams();
    const { id: userId } = params;
    const navigate = useNavigate()
  
    const submitHandler=(e)=>{
      e.preventDefault()
      if (password !== confirmPassword) {
        alert('Password and confirm password are not match');
      }else{
        dispatch(createPasswordAgent(password,userId))
      }
    
    }
    // useEffect(()=>{
    //   if(userInfo){
    //     navigate('/dashboard')
    //   }
    // },[userInfo])
  
    return (
      <div>
             <div className='admin-nav'>
         <Container>
             <Row>
                 <Col className='admin-logo'>
                 <Link to="/">    
                  <img src="../assets/image/log2.png" alt="" />
                 </Link>
                 </Col>
                 {/* <Col md={2} className='lang d-flex'>
                   <img src="../assets/image/lang.png" alt="" />
                   <p>  English</p>
                   
                   <img style={{height:"10px",marginTop:"18px"}} src="../assets/image/down-2.png" alt="" />
  
                 </Col> */}
             </Row>
         </Container>
         </div>
  
        <form onSubmit={submitHandler}>
         <div className='register'>
         <Container className='register-body'>
         <Row >
                <h1>Create Password</h1>
                {loading && <LoadingBox> </LoadingBox> }
                {error && <MessageBox>{error}</MessageBox>}
             </Row>
        
             <Row className='register-body-2' style={{marginTop:"60px"}}>
                  <p>Enter password</p>
                 <input type="password" id='password' onChange={(e)=>setPassword(e.target.value)}/>
             </Row>
             <Row className='register-body-2'>
                  <p>Confirm password</p>
                 <input type="password" id='confirmPassword'  onChange={(e)=>setConfirmPassword(e.target.value)} />
             </Row>
       
             <Row>
                 <button type='submit'>Submit</button>
             </Row>
         </Container>
         </div>
         </form> 
      </div>
    )
  }

export default AgentCreatePassword