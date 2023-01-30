import React, { useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountDetails } from "../actions/adminAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { adminSignout } from "../actions/adminAction";

function SuperAdmin() {
  const countList = useSelector((state) => state.countList);
  const { loading, error, count } = countList;

  const adminsignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminsignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountDetails());
  }, [dispatch]);
  const signoutHandler = () => {
    if (window.confirm('Are you sure you want to signout?')){
      dispatch(adminSignout());
    }
    
  };
  return (
    <div className="superadmin">
      
      <Row className="superadmin-top">
        <Col className="superadmin-bg" md={3}>
          <Row>
            <Col style={{textAlign:"center"}}>
            <Link to='/superadmin'>   <img src="/assets/image/log3.png" alt="" /></Link> 
            </Col>
          </Row>
        </Col>
        <Col className="superadmin-nav-active">
          <Row>
            <Link to="/superadmin">
              {" "}
              <h1>Activity Status</h1>{" "}
            </Link>
          </Row>
        </Col>
        <Col className="">
          <Row>
            <Link to="/updateuser">
              {" "}
              <h1>Update User</h1>{" "}
            </Link>
          </Row>
        </Col>

        <Col>
          <Row className="superadmin-bg2">
          <Link to="/signuprequest"> <h1>Signup Request</h1> </Link>
          </Row>
        </Col>

        <Col>
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

      <Row className="superadmin-2">
        <Col md={3}>
          <div className="superadmin-active">
            <h2>User Details</h2>
          </div>
          {/* <div>
       <h2>User Details</h2>
    </div> */}
          <div>
             <Link to='/updatebooking'>    <h2>Update Booking</h2></Link>
          </div>
          <div>
             <Link to='/agentbookings'>    <h2>Agent Booking</h2></Link>
          </div>
        </Col>

        <Col >
          {/* <Row className='updatebooking-body'>
        <h1>Booking id</h1>
       <input type='text' placeholder='Enter here'/>
       <button>Proceed </button>
    </Row> */}

          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            <>
              <Row className='count-pd'>
                <Col>
                  <h3>
                    {count.users}
                    <br /> <span>Users</span>{" "}
                  </h3>
                </Col>
                <Col>
                  <h3>
                    {count.properties}
                    <br /> <span>Properties</span>
                  </h3>
                </Col>
                <Col>
                  <h3>
                    {count.rooms}
                    <br />
                    <span>Rooms</span>
                  </h3>
                </Col>
                <Col md={2}></Col>
              </Row>

              <Row>
                <Col>
                  <h3>
                    {count.bookings}
                    <br /> <span>Booking</span>
                  </h3>
                </Col>
                <Col>
                  <h3>
                    {count.cBookings}
                     <br /> <span>Completed Booking</span>
                  </h3>
                </Col>
                <Col>
                  <h3>
                    {count.pBookings}
                    <br /> <span>Pending Bookings</span>
                  </h3>
                </Col>
                <Col md={2}></Col>
              </Row>
            </>
          )} 
        </Col>
      </Row>

      <Row className="superadmin-2">
        <Col>
          <div></div>
        </Col>
      </Row>
    </div>
  );
}

export default SuperAdmin;
