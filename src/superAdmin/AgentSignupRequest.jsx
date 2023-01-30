import React, { useEffect ,useState} from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { approveAgent, getSignUpRequestAgent, rejectAgent } from '../actions/adminAction';
import Dialog from '../components/Dialog';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { APPROVE_AGENT_RESET, APPROVE_USER_RESET, REJECT_AGENT_RESET, REJECT_USER_RESET } from '../constants/adminConstants';

function AgentSignupRequest() {
    const dispatch = useDispatch()
    const agentCreateRequest = useSelector((state) => state.agentCreateRequest);
    const { loading, error, users } = agentCreateRequest ;
    const approveAgentRequest= useSelector((state)=>state.approveAgent);
    const {success} = approveAgentRequest
    const rejectAgentRequest = useSelector((state)=>state.rejectAgent);
    const {done} = rejectAgentRequest
    const adminsignin = useSelector((state) => state.adminSignin);
    const { adminInfo } = adminsignin;
    const [data,setData]=useState('')
    const [showTask, setShowTask] = useState(false)
    useEffect(()=>{
      
        dispatch(getSignUpRequestAgent())
        if(success){
          alert("User accepted")
          dispatch({type:APPROVE_AGENT_RESET})
        }
        
        if(done){
         alert("User rejected")
         dispatch({type:REJECT_AGENT_RESET})
       }
      
 
    },[dispatch,success,done])
 
    
    const approveHandler=(userId)=>{
  
      dispatch(approveAgent(userId))
    }
    const rejectHandler=(userId)=>{
    
      dispatch(rejectAgent(userId))
    }
    const signoutHandler = () => {
     if (window.confirm('Are you sure you want to signout?')){
      //  dispatch(adminSignout());
     }
   };
 
   const openNow=(userId)=>{
     const post =users.find((e)=>e._id === userId) 
    //  console.log(post)
     setData(post)
     setShowTask(true)
 }
 const cancel=()=>{
   setShowTask(false)
 }
 const confirm=()=>{
   setShowTask(false)
 }
   return (
 <div className='superadmin updatebooking'>   
 <Row className='superadmin-top'>
     <Col className='superadmin-bg' md={3}>
         <Row> 
             <Col style={{textAlign:"center"}}>
             <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
             </Col>   
         </Row>
     </Col>
        <Col className=' '>
            <Row>
            <Link to='/superadmin'> <h1>Activity Status</h1> </Link>
            </Row>
        </Col>
        <Col className=''>
          <Row>
            <Link to='/updateuser'>   <h1>Update User</h1>   </Link>
          </Row>
        </Col>
      
        <Col>
            <Row className='superadmin-bg2 '>
            <Link to="/signuprequest"> <h1>Signup Request</h1> </Link> 
            </Row>
        </Col>

      <Col className='superadmin-nav-active'>
          <Row className="superadmin-bg2">
          <Link to="/agentsignuprequest"> <h1>Agent  Request</h1> </Link>
          </Row>
        </Col>


     <Col>
     <Row className='sup-sg'>
           {adminInfo && (
                  <Button onClick={signoutHandler}>Signout</Button>
                )}
           </Row>
     </Col>
    
 </Row>
 
 <Dialog show={showTask}
       cancel={cancel}
       confirm={confirm}
       datas={data}
       description='are you sure you want to delete'/>
 
 
 <Row className='superadmin-2'> 
  <Col md={3}>
     <div  className='superadmin-active'>
      <h2 >User Details</h2>
     </div>
     {/* <div>
        <h2>User Details</h2>
     </div> */}
     <div>
     <Link to='/updatebooking'> <h2>Update Booking</h2> </Link>
     </div>
     <div>
     <Link to='/agentbookings'> <h2>Agent Booking</h2> </Link>
     </div>
  </Col>
     
     <Col className='card-left no-new-singup'>
   
     {!loading && !error && users.length == 0 && (
     <MessageBox style={{marginTop:'70px !important'}}>No new signup requests </MessageBox>
      )}
     
 
 {loading? <LoadingBox></LoadingBox>:
 error? <MessageBox>{error}</MessageBox>:
 users &&  users.map((user)=>(
 <>
     <Row key={user._id} className='updatebooking-body-card'>
   
       <Col md={3}>
         <h4>{user.f_name}</h4>     
       </Col>      
       <Col md={1} style={{alignSelf:"center"}}  >
                     <img  
                       onClick={()=>openNow(user._id)}
                       style={{cursor:"pointer"}}
                       src="../assets/image/eyes.png"
                     />
                   
                   </Col>
           <Col  md={{ span: 1, offset: 3 }}>
            <button type='submit'onClick={() => approveHandler(user._id)}>accept</button>
           </Col>
           <Col style={{marginLeft:"70px"}} className='signup-body-button'>
           <button  type='submit'onClick={() => rejectHandler(user._id)}>decline</button>
           </Col>
           <Col>
           {/* <Col>
            <p>7:50pm</p>
           </Col> */}
     
           </Col>
      
      
     </Row>
    
   
    
     </>
     
      ))}
     
  
 </Col>
   
     
 </Row>
 
 <Row className='superadmin-2'> 
  <Col >
     <div>
    
     </div>   
  </Col>
             
 </Row>
 
 </div>
   )
 }
export default AgentSignupRequest