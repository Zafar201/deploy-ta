import React from 'react'
import { Col, Row } from 'react-bootstrap'

function ShowMore({show,title,roomName,cancel,confirm,startingDate,endingDate,adult,child,transfer}) {

    if(!show){
        return <>
        </>
    }
    // console.log(datas.f_name)
  return (
    <div>
        <div className="overlay">
          {/* <img src='../assets/image/2.jpeg'/> */}
         <div className="dialog">
           <div className="dialog__content">
             {/* <h2 className="dialog__title">User Information</h2> */}
             {/* <p className="dialog__description">
               Name: <span> </span>
             </p> */}
             <Row onClick={cancel} className='close-show'>
             <h1>X</h1>
             </Row>
             
             <Row style={{marginTop:'27px'}}>
                <Col>
                   <h3>Accomodation</h3>
                   <p>{roomName} for {adult} adults from {startingDate} to {endingDate}, for 3 nights</p>
                </Col>
                <Col>
                   <h3>Cancellation Policy</h3>
                   <p>- 100% of the total amount is chargeable if cancelled after confirming this booking.</p>
                </Col>
             </Row>
             <Row style={{paddingBottom:'12px'}}>
                <Col>
                   <h3>Arrival Transfer</h3>
                   <p>{transfer} on {startingDate} for {adult} adults. 1 x speedboat</p>
                </Col>
                <Col>
                   <h3>Departure Transfer</h3>
                   <p>{transfer} on {endingDate} for {adult} adults. 1 x speedboat</p>
                </Col>
             </Row>
             {/* <p className="dialog__description">
             Mobile: <span>   </span> 
             </p>
             <p className="dialog__description">
              Email: <span>   </span> 
             </p>
             <p className="dialog__description">
               Address:<span> </span>
             </p> */}
            </div>
              {/* <hr />
                <div className="dialog__footer">
                   <button className="dialog__cancel" onClick={cancel}>close</button>
                   <button className="dialog__confirm" onClick={confirm}>ok</button>
                </div> */}
            </div> 
          </div>
    </div>
  )
}

export default ShowMore