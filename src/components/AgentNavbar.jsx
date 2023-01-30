import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { agentSignout } from '../actions/agentAction';

function AgentNavbar({image}) {
  const agentSignin = useSelector((state) => state.agentSignin);
  const { agentInfo, loading, error } = agentSignin;
  const dispatch = useDispatch()

  const signoutHandler=()=>{
    dispatch(agentSignout())
  }
  return (
    <div>
         <div className="agent-nav">
        <Container>
          <Row>
            <Col className="agent-logo">
              <Link to="/agentsearch">
                <img src={image ? image : '../assets/image/log3.png'} alt="" />
              </Link>
            </Col>
            {agentInfo && (
               <Col >
                <Button style={{float:'right'}} onClick={signoutHandler}>signout</Button>
               </Col>
            )}
           
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default AgentNavbar