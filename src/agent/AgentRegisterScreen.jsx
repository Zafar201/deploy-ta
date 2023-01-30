import React,{useEffect, useState} from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createAccountAgent } from '../actions/agentAction'

function AgentRegisterScreen() {
    const [name, setName] = useState("")
    const [name2, setName2] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const agentCreateAccount= useSelector(state=>state.agentCreateAccount)
    const {loading,error,success} = agentCreateAccount
    const dispatch = useDispatch()
  
    const submitHandler=(e)=>{
      e.preventDefault()
      dispatch(createAccountAgent(name,name2,email,phone,address))   
    }
    useEffect(()=>{
      if(success){
        alert("your account is created wait for admin approvel")
 
        setName('')
        setName2('')
        setEmail('')
        setPhone('')
        setAddress('')
      }
      if(error){
        alert(error)
      }
  
    },[success,error])
  
   const maxLengthCheck = (e) => {
      if (e.target.value.length > e.target.maxLength) {
       e.target.value = e.target.value.slice(0, e.target.maxLength)
        }
      }
   
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
        
   
      
        <div className='register'>
         <Container className='register-body'>
             <Row>
                <h1>Create Account</h1>
               
             </Row>
             <form onSubmit={submitHandler}>
             <Row className='register-body-1' style={{marginTop:"60px"}}>
                 <Col md={4} style={{paddingLeft:"0px"}}>
                    <p>First name</p>
                  <input type="text" 
                   value={name}
                  required 
                  id="name" 
                  name="name" 
                  onChange={(e)=>setName(e.target.value)} />
                 </Col>
                 <Col md={4}>
                      <p>Last name</p>
                      <input 
                      type="text" 
                      value={name2}
                      required
                      id="name2" 
                      name="name2" 
                      onChange={(e)=>setName2(e.target.value)}/>
                 </Col>
             </Row>
             <Row className='register-body-2'>
                  <p>Email Address</p>
                 <input 
                 type="email" 
                 id="email" 
                 value={email}
                 required 
                 ame="email" 
                 onChange={(e)=>setEmail(e.target.value)}/>
             </Row>
             <Row className='register-body-2'>
                  <p>Phone number</p>
                 <input 
                 type="number" 
                 id="phone" 
                 required 
                 value={phone}
                 maxLength = "10"
                  onInput={maxLengthCheck}
                 name="phone" 
                 onChange={(e)=>setPhone(e.target.value)}/>
             </Row>
             <Row>
                 <p>Address</p>
                 <textarea
                    name="address"
                    id="address" 
                    cols="4"
                    rows="5"
                    required
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                  ></textarea>
             </Row>
             {/* {loading && <LoadingBox> </LoadingBox> } */}
               {/* {error && <MessageBox>{error}</MessageBox>} */}
             <Row>
                <button type='submit'>Submit</button> 
             </Row>
            
             </form>
         </Container>
         </div>
      </div>
    )
  }

export default AgentRegisterScreen