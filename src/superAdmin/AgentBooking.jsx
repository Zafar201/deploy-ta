

import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getBookings, getBookingsAgent } from '../actions/adminAction';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { APPROVE_BOOKING_RESET, REJECT_BOOKING_RESET } from '../constants/adminConstants';

function AgentBooking() {
  const agentBookingLists = useSelector((state) => state.agentBookingList);
  const { loading, error, property } = agentBookingLists;
  const approveBookings = useSelector((state) => state.approveBooking);
  const { success } = approveBookings;
  const rejectBookings = useSelector((state) => state.rejectBooking);
  const { success:rejectSuccess } = rejectBookings;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getBookingsAgent())
 }, [dispatch,success,rejectSuccess]);

 
  return (
    <div className='superadmin updatebooking'>
       
             <Row className='superadmin-top'>
                 <Col className='superadmin-bg' >
                     <Row> 
                         <Col style={{textAlign:"center"}}>
                         <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
                         </Col>
                       
                     </Row>
                 </Col>
                 <Col className='superadmin-bg2 superadmin-nav-active'>
                     <Row>
                        <h1>Update Booking</h1>
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
                    <h2>User Details</h2>
                 </div> */}
                <div>
                  <Link to='/updatebooking'>    <h2>Update Booking</h2></Link>
                </div>
                <div className="superadmin-active">
                  <Link to='/agentbookings'>    <h2>Agent Booking</h2></Link>
                </div>
              </Col>
                 
                 <Col>
                 {/* <Row className='updatebooking-body'>
                     <h1>Booking id</h1>
                    <input type='text' placeholder='Enter here'/>
                    <button>Proceed </button>
                 </Row> */}
             
             {loading? <LoadingBox></LoadingBox>:
             error? <MessageBox>{error}</MessageBox>:
             property.bookings.map((data)=>(

            <>
                 <Row key={data._id} className='updatebooking-body-card updatebooking-body-card2'>
                   <Col >
                     <h4>{data.property_name}</h4>
                   </Col>
                   <Col className='msg-pd'>
                     {data.adminApproved? (
                       <MessageBox>Approved</MessageBox>
                     ):(
                       <h4>Not approved</h4>
                     )}
                   </Col>
                   <Col >
                     <h4>{data.agent_name}</h4>
                   </Col>
                   <Col >
                     {/* <h4></h4> */}
                     <h4>{data.status}</h4>
                     {/* <h4>{data.email}</h4> */}
                   </Col>
                   <Col >
                     <h4>{data.nett_total_price}</h4>
                    
                   </Col>
                   <Col >
                  <button onClick={() => navigate(`/agentbooking/bookId/${data._id}`)}> View Booking</button>  
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

export default AgentBooking