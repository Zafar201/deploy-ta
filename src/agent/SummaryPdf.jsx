import { format } from "date-fns";
import React, { useRef } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { getQuote } from "../actions/agentAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function SummaryPdf() {
  const location =useLocation()
  const navigate = useNavigate()
  const agentGetQuote=useSelector((state=>state.agentGetQuote))
  const {loading,error,getQuotes}=agentGetQuote
  // const {agent_email}= getQuotes
  const {guestName,propId,propertyName,startingDate,endingDate,roomArrays,tax,extraservice,cp,terms,totalPrice,nationality,splitStay,nights,splittedDays1,splittedDays2}  =location.state
  console.log(location.state,'k');
  const componentRef = useRef();
  const dispatch = useDispatch()
  

  useEffect(()=>{
      dispatch(getQuote(guestName,propId,propertyName,startingDate,endingDate,roomArrays,tax,extraservice,cp,terms,totalPrice,nationality,splitStay))
  },[dispatch])
  return (
    <div className="pdf">
      {loading? <LoadingBox></LoadingBox>:
      error? <MessageBox>{error}</MessageBox>:(
        <Row style={{width:'100%'}}>
        <Col md={2}>
          <ReactToPrint
            trigger={() => <button style={{marginBottom:'16px'}}>Print this out!</button>}
            content={() => componentRef.current}
          />
          <button onClick={()=>navigate(-1)} style={{marginTop:'-75px'}}>Go Back</button>
        </Col>
        <Col md={9} className="summary-pdf" ref={componentRef} >
          <Row>
            <img src="../assets/image/log3.png" alt="" />
          </Row>
          <hr />
          <Row>
            <h1 style={{ textAlign: "center" }}>Quotation</h1>
          </Row>
          <Row>
            <Col md={9}>
              <h2>Customer:</h2>
              <h1>{getQuotes.agent_name}(Tour Operator)</h1>
              <h1>{getQuotes.agent_email}</h1>
            </Col>
            <Col md={3}>
              <h1> Quotation#: {getQuotes._id}</h1>
              <h1>Date:Valid until: 1st Sep 2022 </h1>
            </Col>
          </Row>
          <Row>
            <h1>
              <strong>Guest name:</strong>{getQuotes.guest_name}
            </h1>
          </Row>
          <Row>
            <Col>
              <table className="pdf-table">
                <tbody>
                  <tr className="tr-1">
                    <th>Details</th>
                    <th></th>
                    <th>Price</th>
                  </tr>
                  <tr className="tr-2">
                    <th>{getQuotes.property_name}</th>
                    <th></th>
                    <th>USD</th>
                  </tr>
                  <tr className="tr-3">
                    <th>Deluxe Villa x 3 (Breakfast) </th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <th>Accommodation</th>
                    {splitStay ? getQuotes.rooms.map((itm)=>(
                      <div>
                        <th>
                          {itm.room_name} for {itm.adult} adults from {itm.from} to {itm.to}   for {nights} nights         
                      </th>
                      </div>
                    )):getQuotes.rooms.map((itm)=>(
                      <div>
                       <th>
                        {itm.room_name} for {itm.adult} adults from {startingDate} to {endingDate}   for {nights} nights    
                       </th>
                      </div>
                     ))}
                  
                    <th>5,308.71</th>
                  </tr>
            
                  <tr className="tr-1">
                    <th>Additional items</th>
                    <th></th>
                    <th>Price</th>
                  </tr>

                  <tr>
                    <th>transfer</th>
                    {splitStay ? getQuotes.rooms.map((itm)=>(
                      <div>
                        <th>
                        {itm.transfer.type} for  adults from {itm.from} to {itm.to},
                        for {nights} nights 

                      </th>
                      </div>
                    )):getQuotes.rooms.map((itm)=>(
                      <div>
                      <th>
                        {itm.transfer.type} for  adults from {startingDate} to {endingDate},
                          for {nights} nights 
                    </th>
                    </div>
                    ))}
                  
                    
                   
                  
                    <th>5,308.71</th>
                  </tr>
                
                </tbody>
              </table>

              <table className="pdf-table">
                <tr className="tr-1">
                  <th>Cancellation policy</th>
                </tr>
                <tr className="tr-2">
                  <th>{getQuotes.property_name}</th>
                </tr>
                <tr>
                  <th>
                  {getQuotes.cancellation_policy}% of the total amount is chargeable if cancelled after
                    confirming this booking.
                  </th>
                </tr>
              </table>
            </Col>
          </Row>
        </Col>
      </Row>
      )}
    
    </div>
  );
}

export default SummaryPdf;
