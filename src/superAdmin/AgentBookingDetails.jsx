import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { approveBooking, approveBookingAgent, getBookings, getBookingsAgent, rejectBooking, rejectBookingAgent } from '../actions/adminAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { APPROVE_BOOKING_RESET, REJECT_BOOKING_RESET } from '../constants/adminConstants';
import { APPROVE_AGENT_BOOKING_RESET, REJECT_AGENT_BOOKING_RESET } from '../constants/agentConstant';

function AgentBookingDetails() {
   const agentBookingLists = useSelector((state) => state.agentBookingList);
   const { loading, error, property } = agentBookingLists;;
   const [bookingList, setBookingList] = useState({})
   const [roomList, setRoomList] = useState({})

   const approveBookings = useSelector((state) => state.agentApproveBooking);
   const { success:succesBooking } = approveBookings;
   const rejectBookings = useSelector((state) => state.agentRejectBooking);
   const { success:rejectSuccess } = rejectBookings;
   const params = useParams();
   const {propId,bookId} = params;
   const navigate = useNavigate()
   const dispatch = useDispatch()
   // console.log(propId,'pr')


   useEffect(() => {
      dispatch(getBookingsAgent())    
  }, [dispatch,succesBooking,rejectSuccess]);
  useEffect(()=>{
   if(property){
      const bookinglist=property.bookings.find((e)=>e._id == bookId)
         setBookingList(bookinglist)
         
        const roomlist=bookinglist.rooms
        setRoomList(roomlist)
        console.log(roomlist)
      }
  },[property])
  if(succesBooking){
     alert("Booking accepted")
     dispatch({type:APPROVE_AGENT_BOOKING_RESET})
       navigate('/agentbookings') 
  }
  if(rejectSuccess){
   alert("Booking rejected")
   dispatch({type:REJECT_AGENT_BOOKING_RESET})
   navigate('/agentbookings')
}

  const approve=()=>{
     dispatch(approveBookingAgent(bookId))
  }

  const reject=()=>{
     dispatch(rejectBookingAgent(bookId))
  }
  const truncate=(str,n)=>{
   return str.length>n?str.substr(0,n-1)+ "" :str
 }
  return (
    <div className='superadmin updatebooking'>
       
             <Row className='superadmin-top'>
                 <Col className='superadmin-bg' >
                     <Row> 
                         <Col  style={{textAlign:"center"}}>
                     <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
                         </Col>
                       
                     </Row>
                 </Col>
                 <Col className='superadmin-bg2 superadmin-nav-active'>
                     <Row>
                       <h1>Access Bookings</h1>
                     </Row>
                 </Col>
                 <Col className=''>
               
                 </Col>
                
                 <Col>
                 </Col>
                
             </Row>
        
             <Row className='superadmin-2'> 
              <Col md={3}>
                 <div >
                  <Link to='/superadmin'> <h2 >User Details</h2></Link> 
                 </div>
                 {/* <div>
                    <h2>Property Status</h2>
                 </div> */}
                 <div className='superadmin-active'>
                     <h2>Update Booking</h2>
                 </div>
              </Col>
                 
                  {loading ? <LoadingBox></LoadingBox>:
                 error? <MessageBox>{error}</MessageBox>:( 
            

                 
                 <Col className='acceptbooking'>
                   
                 <Row className='acceptbooking-body'>
                     <h1>Booking</h1>
                 </Row>
               
                
                 <Row className='acceptbooking-body-2'>
                     <Col md={3}>
                        <h1> Property Name</h1>
                        <h4>{bookingList.property_name}</h4>
                        {/* <h4>{bookinglist.propName}</h4> */}

                     </Col>
                     <Col md={3}>
                        <h1> Agent Name</h1>
                        <h4>{bookingList.agent_name}</h4>
                     </Col>
                     {/* <Col>
                        <h1> Customer detail</h1>
                     </Col> */}
                 </Row>

                 <Row className='acceptbooking-body-2'>
                     <Col md={6}>
                        <h1> Customer detail</h1>
                        <h4>{bookingList.agent_email}</h4>
                        <h4>{bookingList.nationality}</h4>
                     </Col>
                     {/* <Col md={3}>
                     <h1>Rooms</h1>
                      {property.bookings.find((e)=>e._id == bookId).rooms.map((itm)=>(  
                       <h4>{itm.room_name}</h4> 
                      ))} 
                     </Col> */}
                   <Col>
                   
                   </Col>
                 </Row>

                 <Row className='acceptbooking-body-2'>
                 <h1> Rooms</h1>
                     <Col className='d-flex' >
                        {property.bookings.find((e)=>e._id == bookId).rooms.map((itm)=>(  
                           <div className='minimum'>
                       <h4>Room Name:{itm.room_name}</h4> 
                       <h4>Adult:{itm.adult}</h4> 
                       <h4>Child:{itm.child}</h4> 
                       <h4>transfer:{itm.transfer.type}</h4> 
                       <h4>Meals:{itm.meal_plan.type}</h4> 
                       </div>
                        ))} 
                     </Col>
                     
                     {/* <Col md={3}>
                       <h1> adult</h1>
                       {property.bookings.find((e)=>e._id == bookId).rooms.map((itm)=>(  
                       <h4>{itm.adult}</h4> 
                        ))} 
                     </Col>  */}

                     {/* <Col md={3}>
                       <h1> child</h1>
                       {property.bookings.find((e)=>e._id == bookId).rooms.map((itm)=>(  
                       <h4>{itm.child}</h4> 
                        ))} 
                     </Col>  */}
                     
                   <Col>
                   
                   </Col>
                 </Row>
                 
              
                 <Row className='acceptbooking-body-3'>
                     <Col>
                        {/* <h1> helooo</h1> */}
                        
                     </Col>

                   
                     {bookingList.adminApproved?
                        <MessageBox>approved</MessageBox>:
                        bookingList.status === 'rejected' ?
                        <MessageBox variant='danger'>rejected</MessageBox>:(
                           <>
                        <Col className='acceptbooking-body-btn'>
                       
                               <button onClick={approve} type='submit'>Accept</button> 
                       </Col>
                      
                             <Col className='acceptbooking-body-btn2'>
                                  <button onClick={reject} type='submit'>Decline</button>
                             </Col>                  
                       </>
                        )}
            
                   <Col>
                 <Link to='/agentbookings'><h4 >   Go Back  </h4></Link>     
                   </Col>
                 </Row>
            
           </Col>
                )} 
                 
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

export default AgentBookingDetails