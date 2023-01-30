import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { agentSignIn } from '../actions/agentAction';
import AgentNavbar from '../components/AgentNavbar'

function AgentLoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const agentSignin = useSelector((state) => state.agentSignin);
    const { agentInfo, loading, error } = agentSignin;

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(agentSignIn(email,password))
    }
    useEffect(()=>{
        if(agentInfo){
            navigate('/agentsearch')
         
        }
       },[agentInfo])
  return (
    <div>
        <AgentNavbar/>

       <form className='login' onSubmit={submitHandler}>
          <Container>
              <Row>
                  <h1>Agent Login</h1>
                  {/* <p>Manage your properties</p> */}
              
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"48px"}} >
                  <div className='login-user'>
                      <img src="../assets/image/user.png" alt="" />
                      <input 
                       type="email"
                       id="email"
                       required
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder='Email'/>
                  </div>
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"27px"}}>
                  <div className='login-user'>
                      <img src="../assets/image/pass.png" alt="" />
                      <input
                       type="password"
                       id="password"
                       required
                       onChange={(e) => setPassword(e.target.value)}
                     
                       placeholder='Password'/>
                  </div>
                 
              </Row>
              <Row className='login-rem'>
                  {/* <Col  md={{ span: 3, offset: 3 }}>
                 
                      <input type="checkbox" /> <span>Remember me</span> 
                  
                  </Col>
                  <Col>
                    <p>Forgot credential?</p>
                  </Col>
                  <Col>
                  </Col> */}
              </Row>
              <Row style={{justifyContent:"center",paddingTop:"32px"}}>
                 <button type='submit'>Sign in</button> 
              </Row>
              <Row>
                <Link to='/agentRegister'>  <h3>Not registered yet? <span>Create an Account</span> </h3></Link>
              </Row>
          </Container>
       </form>
    </div>
  )
}

export default AgentLoginScreen