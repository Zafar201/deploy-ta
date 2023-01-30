import { format } from "date-fns";
import React from "react";
import { Col, Row } from "react-bootstrap";



export function GroupBox({totalDays,number,room,startingDate,endingDate,adult,children,transfer,cp,terms,plus,split,selectedDate,selectedDate2,splitted,first,second}) {
  console.log(totalDays,'sppp')
  return (
    <Row className="summary-left-3">
      <h1>Group {number} </h1>
      <Row>
        <Col md={8}>
            <h3>{room} {split && '+'} {split &&  plus } {split && (<span className="splitstaytag">splitstay</span>)}</h3>
           {!split && ( <p>{room} for {adult} adults  from {startingDate} to {endingDate}, for {totalDays} nights</p>)}
            {split && ( <p>{room} for {adult} adults  from {format(selectedDate,'MMM-dd-yyyy')} to {splitted}, for {first} nights</p>)}
           
          {split && (<p>{plus } for {adult} adults  from {splitted} to {format(selectedDate2,'MMM-dd-yyyy')} for {second} nights</p>)}  
        </Col>
        <Col>
        
        </Col>
      </Row>
      <Row>
        <h2>Transfer</h2>
        <Row>
          <h3>Arrival</h3>
          <p>{transfer} on {startingDate} for  {adult} adult</p>
        </Row>
        <Row>
          <h3>Departure</h3>
          <p>{transfer} on {endingDate} for  {adult} adult</p>
        </Row>
      </Row>
      <Row>
        <h2>Cancellation Policy</h2>
        <p>{cp}</p>
      </Row>
      <Row>
        <h2>Terms & Conditions</h2>
        <p>{terms}</p>
      </Row>
    </Row>
  );
}
