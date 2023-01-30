import { format } from 'date-fns';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import SearchCriteria from './SearchCriteria';
import SearchCriteria2 from './SearchCriteria2';

function Criteria({propId,destination,startingDate,endingDate,holidayType,adultCount,childCount,Nights,selectedDate,selectedDate2,category,nationalities,childAge}) {
      console.log(nationalities,'category')
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      // console.log(destination,startingDate,endingDate,holidayType,'hs');
  return (
    <div>

   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className='model'>
          <SearchCriteria2 handleClose={handleClose} show={show} 
          to={selectedDate2}
          from={selectedDate}
          Nights={Nights} 
          endingDate2={endingDate}
          startingDate2={startingDate} 
          category={category}
          nationalities={nationalities}
          destinations={destination}
          holidaytype={holidayType}
          propId={propId}/>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
        <Row className='criteria'>
          <div  className="searchlist-left">
                    <Row className="searchlist-box">
                  
                          <h2>You are searching for</h2>
                     
                        <div>
                          <h1>Hotels in</h1>
                          <p>{destination}</p>
                        </div>
                        <div>
                          {adultCount && (
                            <>
                            <h1>to Accommodate</h1>
                            <p >{adultCount} x adults</p>
                             {childCount > 0 && (<p className={`${childAge.length > 0 ? '' : ''}`}>{childCount} x children ({childAge.length > 0 && childAge.map((a)=>(
                               <span>{a}yr</span>
                             ))} )</p>)}
                            </>
                          )}
                         
                        </div>
                        <div>
                          <h1>of Nationality</h1>
                          <p>Maldives</p>
                        </div>
                        <div>
                          <h1>for 7 nights stay</h1>
                          <p>Check-in: {format(selectedDate, "MMM-dd-yyyy")}</p>
                          <p>Check-in: {format(selectedDate2, "MMM-dd-yyyy")}</p>
                        </div>  
                        <div>
                          <h1>holiday type</h1>
                          <p>{holidayType}</p>
                        </div>
                        <button onClick={handleShow} >Update Criteria</button>
                    </Row>
                </div>
                </Row>
    </div>
  )
}

export default Criteria