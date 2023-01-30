
import { add, format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { bookingAgent, detailsPropertyAgent, getQuote } from '../actions/agentAction'
import AgentNavbar from '../components/AgentNavbar'
import Criteria from '../components/Criteria'
import { GroupBox } from '../components/groupBox'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import SearchCriteria from '../components/SearchCriteria'
import { AGENT_BOOKING_RESET } from '../constants/agentConstant'





function SummaryScreen() {
    const dispatch= useDispatch()
    const agentPropertyDetails = useSelector((state) => state.agentPropertyDetails);
    const { loading, error, property } = agentPropertyDetails;
     
    const agentBooking= useSelector((state=>state.agentBooking))
    const {success}=agentBooking
    const [guestName, setGuestName] = useState('')
    const [adult,setAdult]=useState('')
    const location = useLocation()
    const [meals1, setMeals1] = useState([''])
    const [mealsId, setMealsId] = useState([''])
    const [trasnferId, setTransferId] = useState([''])
    const [roomId, setRoomId] = useState([''])
    const [splitted,setSplitted]=useState()
    const [splitFrom, setSplitFrom] = useState([])
    const [splitTo, setSplitTo] = useState([])

    
    const navigate= useNavigate()

    const [roomArray, setRoomArray] = useState([''])
    const {adultCount,childCount,childAge,splittedDays1,splittedDays2,selectedDate,selectedDate2,splitStay,roomid,mealsid,totalPrice,extraservice,tax,propId,rooms,startingDate,endingDate,nights,destination,holidayType,propertyName,room1,room2,room3,room4,room5,transfer1,transfer2,transfer3,transfer4,transfer5,cp,terms,nationality,transferid}  =location.state
    console.log(location.state,'tr')
    useEffect(() => {
        window.scrollTo(0, 0);
        const meals=mealsid.filter((e)=>e !== '')
        setMealsId(meals)
        const roomId=roomid.filter((e)=>e !== '')
        setRoomId(roomId)
        const transfer=transferid.filter((e)=>e !== '')
        setTransferId(transfer)
        roomArray.push(room1,room2,room3,room4,room5)
        const roomsArray=roomArray.filter((e)=>e !== '')
        setRoomArray(roomsArray)
        const result = add(selectedDate, {
            days: splittedDays1,  
          })
          const newDate=format(result, "MM-dd-yyyy")
          setSplitted(newDate)
          const splitFrom=[]
          const splitTo=[]
          splitFrom.push(startingDate,newDate)
          splitTo.push(newDate,endingDate)
          setSplitFrom(splitFrom)
          setSplitTo(splitTo)
     
        console.log(splitFrom,splitTo,'rl')
    }, []);
    useEffect(() => {
        dispatch(detailsPropertyAgent(propId,startingDate,endingDate,rooms));
        if(property && mealsid.length>=0){
            const meals1=property.meals.find((e)=>e._id === mealsid[0])
        }   

      }, [dispatch]);
    useEffect(()=>{
       
    },[rooms,property])
  
    const getQuotes=(booking=false) => { 
       
            var roomArrays=[]
          if(!splitStay){
            for(let i=0 ;i<rooms.length; i++){
                let roomObject={ 
                    room_name:'',
                    roomId:'',
                    adult:'',
                    child:'',
                    age:[],
                     transfer:{
                         type:'',
                         price:''
                     },
                     meal_plan:{
                         type:'',
                         price:''
                     },
                     price:''       
             }
                if(roomArray[i]){
                    roomObject.room_name=roomArray[i]
                }
                if(roomId[i]){
                    roomObject.roomId=roomId[i]
                    if(property){
                        const room=property.rooms.find((e)=>e._id === roomId[i]).price.first     
                        if(room){
                            roomObject.price=room
                        }
                    }
                    
                }
                if(rooms[i]){
                    roomObject.adult=Number(rooms[i].adult)  
                    roomObject.child=Number(rooms[i].child)
                    // console.log(rooms[i].adult,'2')
                }
                if(rooms[i] && rooms[i].child>0){
                    const arrOfNum = rooms[i].child_age.map(str => {
                        return Number(str);
                      });
                    const age=arrOfNum.filter((e)=>e>0)
                     age.map((e)=>{
                        roomObject.age.push(e)
                     })
                    
                    // console.log(age,'heys')
                }
                if(property && transferid[i]){
                    const transferObject=property.transfer.find((e)=>e._id === trasnferId[i])
                    roomObject.transfer.type=transferObject.type
                    const adultNumber=rooms[i].adult
                    const childNumber=rooms[i].child
                    const adultPrice=transferObject.price_a
                    const childPrice=transferObject.price_c
                    roomObject.transfer.price=Number(adultPrice) * Number(adultNumber) + Number(childPrice) * Number(childNumber)
                }
                if(property && mealsid[i] ){
                    const mealsObject=property.meals.find((e)=>e._id === mealsId[i])
                    roomObject.meal_plan.type=mealsObject.type
                    const adultNumber=rooms[i].adult
                    const childNumber=rooms[i].child
                    const adultPrice=mealsObject.price_a
                    const childPrice=mealsObject.price_c
                    roomObject.meal_plan.price=Number(adultPrice) * Number(adultNumber) + Number(childPrice) * Number(childNumber)
    
                }
               
         
                roomArrays.push(roomObject)
            
            }


        }else{
            for(let i=0 ;i<2; i++){
                let roomObject={ 
                    room_name:'',
                    roomId:'',
                    adult:'',
                    child:'',
                    from:'',
                    to:'',
                    age:[],
                     transfer:{
                         type:'',
                         price:''
                     },
                     meal_plan:{
                         type:'',
                         price:''
                     },
                     price:''       
             }
                if(roomArray[i]){
                    roomObject.room_name=roomArray[i]
                    roomObject.from=splitFrom[i]
                    roomObject.to=splitTo[i]
                }
                
                if(roomId[i]){
                    roomObject.roomId=roomId[i]
                    if(property){
                        const room=property.rooms.find((e)=>e._id === roomId[i]).price.first     
                        if(room){
                            roomObject.price=room
                        }
                    }
                    
                }
                if(rooms[0]){
                    roomObject.adult=Number(rooms[0].adult)  
                    roomObject.child=Number(rooms[0].child)
                    // console.log(rooms[i].adult,'2')
                }
                if(rooms[0] && rooms[0].child>0){
                    const arrOfNum = rooms[0].child_age.map(str => {
                        return Number(str);
                      });
                    const age=arrOfNum.filter((e)=>e>0)
                     age.map((e)=>{
                        roomObject.age.push(e)
                     })
                    
                    // console.log(age,'heys')
                }
                if(property && transferid[0]){
                    const transferObject=property.transfer.find((e)=>e._id === trasnferId[0])
                    roomObject.transfer.type=transferObject.type
                    const adultNumber=rooms[0].adult
                    const childNumber=rooms[0].child
                    const adultPrice=transferObject.price_a
                    const childPrice=transferObject.price_c
                    roomObject.transfer.price=Number(adultPrice) * Number(adultNumber) + Number(childPrice) * Number(childNumber)
                }
                if(property && mealsid[0] ){
                    const mealsObject=property.meals.find((e)=>e._id === mealsId[0])
                    roomObject.meal_plan.type=mealsObject.type
                    const adultNumber=rooms[0].adult
                    const childNumber=rooms[0].child
                    const adultPrice=mealsObject.price_a
                    const childPrice=mealsObject.price_c
                    roomObject.meal_plan.price=Number(adultPrice) * Number(adultNumber) + Number(childPrice) * Number(childNumber)
    
                }
               
         
                roomArrays.push(roomObject)
            
            }
            console.log(roomArrays,'roomArraysplit')
        }
             
                if(guestName.length >= 1  && !booking){
                console.log(roomArrays,'roomArrays') 
                 navigate(`/summarypdf`,{state:{guestName,propId,propertyName,startingDate,endingDate,roomArrays,tax,extraservice,cp,terms,totalPrice,nationality,splitStay,nights,splittedDays1,splittedDays2}})
                }
                if(guestName.length === 0){
                    Swal.fire({
                        icon: 'info',
                        title: 'please enter guest name',
                        text: "Thanks",
                        type: 'success',            
                      }); 
        }   
        if(booking && guestName.length >= 1 ){
            dispatch(bookingAgent(guestName,propId,propertyName,startingDate,endingDate,roomArrays,tax,extraservice,cp,terms,totalPrice,nationality,splitStay))

        }
     }

     useEffect(()=>{
        if(success){
            Swal.fire({
                icon: 'success',
                title: 'Booking Success',
                text: "Thanks",
                type: 'success',            
                // footer: '<a href="">Why do I have this issue?</a>'
              }); 
              dispatch({type:AGENT_BOOKING_RESET})
        }
     },[success])

   
    useEffect(()=>{
        let adults=0
        for(let i=0;i<rooms.length;i++){
           let count=rooms[i].adult
            adults=Number(adults)+Number(count)
        }
        setAdult(adults)
        // console.log(adults);
    },[rooms])
    //    const getQuotes=()=>{
    //     dispatch(getQuote(guestName,propId,propertyName,startingDate,endingDate,tax,extraservice,cp,terms,totalPrice,nationality))
    //    }
    
  return (
    <div>
        <AgentNavbar/>
        <div className="summary">
        <Container>
            <Row>
                <Col md={7} className='summary-left'>
                    <Row className='summary-left-1'>
                      <Row>
                        <h1>Summary</h1> 
                      </Row>
                       
                        <Row>
                            <Col><p>Hotel</p></Col>
                            <Col ><p style={{float:'right'}}>Check-in & Check-out </p></Col>    
                        </Row>
                        <Row>
                            <Col><h2>{propertyName} <br />Maldives</h2></Col>
                            <Col ><h2 style={{float:'right'}}>{format(selectedDate,'MMM dd yyyy')} - {format(selectedDate2,'MMM dd yyyy')}</h2></Col>    
                        </Row>
                        <Row className='summary-border'>
                            <Col>
                               <p>Destination</p>
                               <p>{destination}</p>
                            </Col>
                            <Col>
                               <p>Nationality</p>
                               <p>{nationality}</p>
                            </Col>
                            <Col>
                               <p>Holiday Type</p>
                               <p>{holidayType}</p>
                            </Col>
                            <Col>
                                <p>Total Pax:</p>
                               <p>heyy</p>
                            </Col>
                        </Row>
                    </Row>

                {loading && <LoadingBox></LoadingBox>}
                
                {!loading && !error && rooms.length >= 1 &&(
                    <GroupBox number='1'
                    room={room1}
                    plus={room2}
                    totalDays={nights}
                    first={splittedDays1}
                    second={splittedDays2}
                    split={splitStay}
                    selectedDate={selectedDate}
                    selectedDate2={selectedDate2}
                    splitted={splitted}
                    startingDate={startingDate}
                    endingDate={endingDate}
                    adult={rooms[0].adult}
                    children={rooms[0].child}
                    transfer={transfer1}
                    cp={cp}
                    terms={terms}/>
                )}
              
                  {!loading && !error && rooms.length >= 2 && (
                    <GroupBox number='2' room={room2}
                     startingDate={startingDate}
                     endingDate={endingDate}
                     adult={rooms[1].adult}
                     children={rooms[1].child}
                     transfer={transfer2}
                     cp={cp}
                     totalDays={nights}
                     terms={terms}/>
                  )}  
                   {!loading && !error && rooms.length >= 3 && (
                    <GroupBox number='3' room={room3}
                     startingDate={startingDate}
                     endingDate={endingDate}
                     adult={rooms[2].adult}
                     children={rooms[2].child}
                     transfer={transfer3}
                     cp={cp}
                     totalDays={nights}
                     terms={terms}/>
                  )}  
                   {!loading && !error && rooms.length >= 4 && (
                    <GroupBox number='4' room={room4}
                     startingDate={startingDate}
                     endingDate={endingDate}
                     adult={rooms[3].adult}
                     children={rooms[3].child}
                     transfer={transfer4}
                     cp={cp}
                     totalDays={nights}
                     terms={terms}/>
                  )}  
                   {!loading && !error && rooms.length >= 5 && (
                    <GroupBox number='5' room={room5}
                     startingDate={startingDate}
                     endingDate={endingDate}
                     adult={rooms[4].adult}
                     children={rooms[4].child}
                     transfer={transfer5}
                     cp={cp}
                     totalDays={nights}
                     terms={terms}/>
                  )}  
                   
                   
                  
                </Col>
                {/* <SearchCriteria/> */}
                <Col md={4}>
                   <Row className='summary-right-1'>
                        <Container>
                            <h1>USD {totalPrice}</h1>
                            <input type="text" placeholder='Primary Guest Name' onChange={(e)=>setGuestName(e.target.value)}/>
                            <button className='summary-right-book' onClick={()=>getQuotes(true)}>
                                Book now
                            </button>
                            <button className='summary-right-quote' onClick={()=>getQuotes()}>
                                Get Quote
                            </button>
                        </Container>
                   </Row>
                   
                   <Row className='summary-right-criteria'>
                    {!loading && !error && (
                                  <Criteria
                                  destination={destination}
                                  nationalities={nationality}
                                  startingDate={startingDate} 
                                  endingDate={endingDate}
                                   holidayType={holidayType}
                                   adultCount={adultCount}
                                   childCount={childCount}
                                   selectedDate={selectedDate}
                                   selectedDate2={selectedDate2}
                                   category={property.rooms}
                                   propId={propId}
                                   childAge={childAge}
                                   />
                    )}
          
                   </Row>
                 
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default SummaryScreen