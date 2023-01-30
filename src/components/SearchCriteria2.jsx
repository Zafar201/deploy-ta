import { format ,add} from "date-fns";
import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { checkPropertyAgents } from "../actions/agentAction";
import { countryList } from "../utils";
function SearchCriteria2({handleClose,show,Nights,startingDate2,endingDate2,from,to,category,propId,holidaytype,destinations,nationalities}) {
  // console.log(category,'propId')
  
  const [nights, setNights] = useState('')
  const [splitDays, setSplitDays] = useState('')
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      // console.log(splitDays,'splitdats')
      
      
      const [destination, setDestination] = useState(destinations)
      const [nationality, setNationality] = useState(nationalities)
      const [diff, setDiff] = useState('')
      const [holidayType, setHolidayType] = useState(holidaytype)
      const [adualt1,setAdualt1]= useState('0')
      const [adualt2,setAdualt2]= useState('')
      const [adualt3,setAdualt3]= useState('')
      const [adualt4,setAdualt4]= useState('')
      const [adualt5,setAdualt5]= useState('')
      const [adualt6,setAdualt6]= useState('')
      const [selectedDate, setSelectedDate] = useState(from);
      const [selectedDate2, setSelectedDate2] = useState(to);
      const [groups, setGroups] = useState(false)
      const [room1, setRoom1] = useState(true)
      const [room2, setRoom2] = useState(false)
      const [room3, setRoom3] = useState(false)
      const [room4, setRoom4] = useState(false)
      const [room5, setRoom5] = useState(false)
      const [group1, setGroup1] = useState(true)
      const [group2, setGroup2] = useState(false)
      const [group3, setGroup3] = useState(false)

      const [age,  setAge]=useState(0)
      const [age1, setAge1] = useState(0)
      const [age2, setAge2] = useState(0)
      const [age3, setAge3] = useState(0)
      const [age4, setAge4] = useState(0)
      const [age5, setAge5] = useState(0)
      const [night1, setNight1] = useState('')
      const [night2, setNight2] = useState('')

      const [age7, setAge7] = useState('0')
      const [age8, setAge8] = useState('0')
      const [age9, setAge9] = useState('0')
      const [age10, setAge10] = useState('0')
      const [age11, setAge11] = useState('0')
      const [age12, setAge12] = useState('0')

      const [age13, setAge13] = useState('0')
      const [age14, setAge14] = useState('0')
      const [age15, setAge15] = useState('0')
      const [age16, setAge16] = useState('0')
      const [age17, setAge17] = useState('0')
      const [age18, setAge18] = useState('0')    

      const [age19, setAge19] = useState('0')
      const [age20, setAge20] = useState('0')
      const [age21, setAge21] = useState('0')
      const [age22, setAge22] = useState('0')
      const [age23, setAge23] = useState('0')
      const [age24, setAge24] = useState('0')

      const [age25, setAge25] = useState('0')
      const [age26, setAge26] = useState('0')
      const [age27, setAge27] = useState('0')
      const [age28, setAge28] = useState('0')
      const [age29, setAge29] = useState('0')
      const [age30, setAge30] = useState('0')

      const [splitAge, setSplitAge] = useState([])
      const [category1, setCategory1] = useState(category[0].name)
      const [category2, setCategory2] = useState(category[0].name)

    
      const [group4, setGroup4] = useState(false)
      const [group5, setGroup5] = useState(false)
      const [group6, setGroup6] = useState(false)

      const [child1, setChild1] = useState(0)
      const [child2, setChild2] = useState(0)
      const [child3, setChild3] = useState(0)
      const [child4, setChild4] = useState(0)
      const [child5, setChild5] = useState(0)
     

      

      
    
      const navigate = useNavigate();
     const addRoom=()=>{
      // console.log('clicked');
      if(!room2){
        setRoom2(true)
        setGroup2(true)
        setGroup1(false)
        setGroup3(false)
        setGroup4(false)
      }
      if(room2){
        setRoom3(true)
        setGroup3(true)
        setGroup1(false)
        setGroup2(false)
        setGroup4(false)
      }
      if(room3){
        setRoom4(true)
        setGroup4(true)
        setGroup1(false)
        setGroup2(false)
        setGroup3(false)
      }
      if(room4){
        setRoom5(true)
        setGroup5(true)
        setGroup4(false)
        setGroup1(false)
        setGroup2(false)
        setGroup3(false)
      }
     }
    
    
     const groups1=()=>{
      setGroup2(false)
      setGroup1(true)
      setGroup3(false)
      setGroup4(false)
      setGroup5(false)
      setGroup6(false)
     }
     const groups6=()=>{
      setGroup2(false)
      setGroup1(false)
      setGroup3(false)
      setGroup4(false)
      setGroup5(false)
      setGroup6(true)
     }
    
     const groups2=()=>{
      setGroup6(false)
      setGroup2(true)
      setGroup1(false)
      setGroup3(false)
      setGroup4(false)
      setGroup5(false)
     }
     
     const groups3=()=>{
      setGroup6(false)
      setGroup3(true)
      setGroup1(false)
      setGroup2(false)
      setGroup4(false)
      setGroup5(false)
     }
     
     const groups4=()=>{
      setGroup6(false)
      setGroup4(true)
      setGroup5(false)
      setGroup1(false)
      setGroup3(false)
      setGroup3(false)
      setGroup2(false)
     }
     const groups5=()=>{
      setGroup6(false)
      setGroup5(true)
      setGroup4(false)
      setGroup1(false)
      setGroup3(false)
      setGroup3(false)
      setGroup2(false)
     }
    
    
     const close2=()=>{
      if(!room5 && !room4 && !room3){
      setRoom1(true)
      setGroup1(true)
      setRoom2(false)
      setGroup2(false)
      }else if(room5){
        setRoom5(false)
        setGroup5(false)
        setAdualt5('')
        setRoom2(true)
        setGroup2(true)
        // setGroup2(false)
      }else if(room4){
        setRoom4(false)
        setGroup4(false)
        setAdualt4('')
        setRoom3(true)
        setGroup3(true)
        setGroup2(false)
      }else if(room3){
        setRoom3(false)
        setGroup3(false)
        setAdualt3('')
        setRoom2(true)
        setGroup2(true)
        
      }
     }

    const close3=()=>{
      if(!room5 && !room4 ){
      setRoom2(true)
      setGroup2(true)
      setRoom3(false)
      setGroup3(false)
      setAdualt3('')
    
      }else if(room5){
        setRoom5(false)
        setGroup5(false)
        setAdualt5('')
        setRoom3(true)
        setGroup3(true)
        
      }else if(room4){
        setGroup4(false)
        setRoom4(false)
        setAdualt4('')
        setRoom3(true)
        setGroup3(true)
      }
     }
     const close4=()=>{
      if(room5){
        setRoom5(false)
        setGroup5(false)
        setAdualt5('')
        setRoom4(true)
        setGroup1(true)
        setGroup1(false)
        setGroup2(false)
      }
      else if(room4){
        setRoom3(true)
        setGroup3(true)
        setRoom4(false)
        setGroup4(false)
        setAdualt4('')
      }
     
     }
     const close5=()=>{
      setGroup5(false)
      setRoom5(false)
      setAdualt5('')
      setGroup4(true)
      setRoom4(true)
     }

     const date= ()=>{   
      if(show){
        handleClose()
      }  
        if(destination.length === 0){
          Swal.fire({
            icon: 'info',
            title: 'please choose destination',
            text: "Thanks",
            type: 'success',            
            // footer: '<a href="">Why do I have this issue?</a>'
          }); 
        }else if(holidayType.length === 0){
          Swal.fire({
            icon: 'info',
            title: 'please choose holdiayType',
            text: "Thanks",
            type: 'success',            
            // footer: '<a href="">Why do I have this issue?</a>'
          }); 
        }else if(nights === 0 ){
          Swal.fire({
            icon: 'info',
            title: 'please choose dates',
            text: "Thanks",
            type: 'success',            
            // footer: '<a href="">Why do I have this issue?</a>'
          }); 
      }else if(adualt1 <= 0 && child1 <= 0){
        Swal.fire({
          icon: 'info',
          title: 'please choose members',
          text: "Thanks",
          type: 'success',            
          // footer: '<a href="">Why do I have this issue?</a>'
        }); 
      }else if(nationality.length === 0){
       Swal.fire({
        icon: 'info',
        title: 'please choose nationality',
        text: "Thanks",
        type: 'success',            
        // footer: '<a href="">Why do I have this issue?</a>'
      }); 
     }else if(splitDays < nights){
       const startingDate = format(selectedDate, "MM-dd-yyyy")
       const endingDate = format(selectedDate2, "MM-dd-yyyy") 
       var rooms=[]
       if(adualt1 && child1){
        rooms.push({adult:adualt1,child:child1,splitDay1:splitDays,child_age:[age,age1,age2,age3,age4,age5]})
       }
       if(category1 === ''){
        console.log('heyyyyyss')
        setCategory1(category[0].name)
        console.log(category[0].name)
      }
      if(category2 === ''){
        setCategory2(category[0].name)
        console.log('heyyyyyss2')

      }
       const adualtCount= Number(adualt1) 
       const childCount= Number(child1) 
        
       console.log(adualtCount,'splitDays')
      navigate(`/agentpropertydetails/propertyId/${propId}`,{state:{category1:category1,category2:category2,split:true,startingDate:startingDate,endingDate:endingDate,destination:destination,holidayType:holidayType,selectedDate:selectedDate,selectedDate2:selectedDate2,rooms:rooms,adultCount:adualtCount,childCount:childCount,nights:nights,nationality:nationality}});
    } else{ 
      var rooms=[]
      const startingDate = format(selectedDate, "MM-dd-yyyy")
      const endingDate = format(selectedDate2, "MM-dd-yyyy") 
      if(adualt1 && child1){
        rooms.push({adult:adualt1,child:child1,child_age:[age,age1,age2,age3,age4,age5]})
      }
      if(adualt2 && child2){
        rooms.push({adult:adualt2,child:child2,child_age:[age7,age8,age9,age10,age11,age12]})
      }
      if(adualt3 && child3){
        rooms.push({adult:adualt3,child:child3,child_age:[age13,age14,age15,age16,age17,age18]})
      }
      if(adualt4 && child4){
        rooms.push({adult:adualt4,child:child4,child_age:[age19,age20,age21,age22,age23,age24]})
      }
      if(adualt5 && child5){
        rooms.push({adult:adualt5,child:child5,child_age:[age25,age26,age27,age28,age29,age30]})
      }  
      const adualtCount= Number(adualt1) + Number(adualt6) + Number(adualt3) + Number(adualt4) + Number(adualt5)
      const childCount= Number(child1) + Number(child2) + Number(child3) + Number(child4) + Number(child5)
    
      navigate(`/search`,{state:{startingDate:startingDate,endingDate:endingDate,destination:destination,holidayType:holidayType,selectedDate:selectedDate,selectedDate2:selectedDate2,rooms:rooms,adultCount:adualtCount,childCount:childCount,nights:nights,nationality:nationality}});
    }    
    }

 



  useEffect(()=>{
    if (selectedDate.getTime() && selectedDate2.getTime()) {
      let timeDifference = selectedDate.getTime() - selectedDate2.getTime();
     
      let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
      let round= Math.round(dayDifference)
      // if(round !== 0){
        setNights(round)
        setSplitDays(round)
      // }else{
      //   setNights(1)
      // }
      // console.log(round,'dif')
   }
   const startingDate = format(selectedDate, "MMM dd ")
        // console.log(startingDate,'hs')
  },[selectedDate,selectedDate2])
 
    
    const list = []
    const childCountFun = (e,set) => {
      if(e.target.value > 6) {
        e.target.value = 6
        set(6)
      }else {
        set(e.target.value)
      }
    }
    const splitages=(value)=>{
      // let value=e.target.value
      console.log('heyy')
      setSplitAge([value])
      console.log(splitAge)
    }

    
    
    const travelType=(arg)=>{
      if(arg === 'solo'){
        setAdualt1(1)
        setChild1(0)
        console.log('solo')
      }else{
        setAdualt1(2)
        setChild1(0)
      }
      setRoom1(true)
      setGroup1(true)
      setRoom5(false)
      setGroup5(false)
      setRoom4(false)
      setGroup4(false)
      setRoom3(false)
      setGroup3(false)
      setRoom2(false)
      setGroup2(false)

    }
    

    
  return (
         <div className="agent-search-right">           
              <Row >
                <h1>SEARCH HOTELS</h1>
                <h2>Get the best deals available in the Indian Ocean.</h2>
              </Row>
              <Row style={{width:'100%'}}>
                <select
                  name="location"
                  id="location"
                  required
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value={destination}>
                    {destination}
                  </option>
                  <option value="kerala">Kerala</option>
                  <option value="maldives">Maldives</option>
                  <option value="jammu">Jammu</option>
                </select>
              </Row>
              <Row className="agent-search-date" style={{width:'100%'}}>
                <Col>
                <img src="../assets/image/cl2.png" alt="" />
                <DatePicker 
                       selected={selectedDate} 
                       required
                       value={selectedDate}
                       dateFormat="MM/dd/yyyy"  
                       onChange={date=> setSelectedDate(date)}
                       minDate={new Date()}/>
              </Col>
              <Col className="nights" md={1} style={{marginLeft:'3px',marginRight:'3px'}}>
                <h1>{nights}</h1>
                <p>night</p>
              </Col>
              <Col >
              <img src="../assets/image/cl2.png" alt="" />
               <DatePicker 
                    dateFormat="MM/dd/yyyy" 
                    value={selectedDate2}
                    required 
                    selected={selectedDate2}  
                    onChange={date=> setSelectedDate2(date)}              
                    minDate={new Date()}/>
                    </Col>      
              </Row>
              <Row className="agent-search-destination" style={{width:'98%'}}>
                <Col>
                
                <select
                  name="location"
                  id="location"
                  required
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                >
                  <option value={nationalities}>{nationalities}</option>
                  {countryList.map((itm)=>(
                    <option value={itm}>{itm}</option>
                  ))}
                   
                </select>
                </Col>


                <Col>
                <select
                  style={{ marginLeft: "14px" }}
                  name="location"
                  id="location"
                  required
                  onChange={(e) => setHolidayType(e.target.value)}
                >
                  <option value={holidaytype}>{holidaytype}</option>
                  <option value="standard">Standard</option>
                  <option value="family">Family</option>
                  <option value="honeymoon">Honeymoon</option>
                  {/* <option value="surfing">Surfing</option> */}
                  {/* <option value="diving">Diving</option> */}
                </select>
                </Col>
              </Row>
              <Row className="agent-search-button" style={{width:'99%'}}>
               <Col style={{position:'relative'}} className={`${groups ? '': 'mb' }`}> 
                {groups ? ( <img onClick={()=>setGroups(!groups)} className="close" src="/assets/image/close.png" alt="" />):(
                  ( <img onClick={()=>setGroups(!groups)} className="" src="/assets/image/down.png" alt="" />)
                )}    
                <h1>select rooms</h1>
                <input
                  name="location"
                  id="location"
                  required
                  readOnly
                  onClick={()=>setGroups(!groups)}
                >
                 
                </input></Col>    
             
                <Col className={`${groups ? '': 'mb' }`}>
                <button
                  // onClick={() => navigate(`/agentsearchlist/count/${count}`)}
                  onClick={date}
                  style={{ marginLeft: "14px" }}
                >
                  Search
                </button>
                </Col>
               
              </Row>
              

              {groups && (
              <Row className="agent-search-group">
                <div className="d-flexs">
                <Col className="agent-search-group-1" onClick={()=>travelType('solo')}>
                    <span>Solo travaller</span>
                    <span style={{ float: "right" }}>1adualt 1room</span>
                  </Col>
                  <Col onClick={()=>travelType('couple')}
                    className="agent-search-group-1"
                    style={{ marginLeft: "16px" }}
                  >
                    <span>Solo travaller</span>
                    <span style={{ float: "right" }}>2adualt 1room</span>
                  </Col>
                </div>
                <div className="agent-search-room">
                <Col md={3} className='agent-search-room1'>
                  <ul>
                   {room1 &&( <li className={`${group1 ? "act" : ""}`} onClick={groups1}><input type="checkbox"  value='true' defaultChecked='true' /> Room 1</li>)}
                   {splitDays < nights &&( <li className={`${group6 ? "act" : ""}`} onClick={groups6}><input type="checkbox" checked='true' value='true' defaultChecked='true' /> Rooom 2 </li>)}
                   {splitDays >= nights && room2 &&  (<li className={`${group2 ? "act" : ""}`} onClick={groups2}><input type="checkbox" defaultChecked='true' />Room 2</li>)} 
                   {splitDays >= nights && room3 && (<li className={`${group3 ? "act" : ""}`} onClick={groups3}><input type="checkbox" defaultChecked='true' />Room 3</li>)}   
                   {splitDays >= nights && room4 && (<li className={`${group4 ? "act" : ""}`} onClick={groups4}><input type="checkbox" defaultChecked='true' />Room 4</li>)} 
                   {splitDays >= nights && room5 && (<li className={`${group5 ? "act" : ""}`} onClick={groups5}><input type="checkbox" defaultChecked='true' />Room 5</li>)} 
                   {splitDays >= nights && !room5 &&  ( <li style={{background:'#0091ff',cursor:'pointer'}} onClick={addRoom}>+Add room</li>)}
                   {/* splitdays:{splitDays}nights:{nights} */}
                  </ul>
                </Col>

              {group1 && (<Col md={9} className='agent-search-room2'>
                <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>Nights</h3>
                      <select className="reset-css"  name="location"  value={splitDays}   id="location"  required  onChange={(e)=>setSplitDays(e.target.value)} >  
                      {/* <option value={splitDays}>{splitDays}</option>      */}
                       {(()=>{
                        let posts = [];
                        for(let i=nights;i>=1 ;i--){
                          // if(i != splitDays){
                            posts.push(<option defaultValue={splitDays} value={i}>{i}</option>)

                          }
                        // }
                        return posts
                       })()}
                      
                    </select>         
                    </Col>
                  
                    {splitDays < nights ? (
                        <Col >
                        <h3>Room Category</h3>
                        <select className="reset-css"  name="location" value={category1}   id="location"  required  onChange={(e) => setCategory1(e.target.value)} >
                        <option value="">select room</option>
                        {category ? category.length > 0 ? category.map((itm)=>(
                           <option key={itm} value={itm.name}>
                           {itm.name} </option>
                        )):(
                          <option value="kerala">No rooms</option>
                        ):(
                          <option value="kerala">No rooms</option>
                        )}
        
                        </select>   
                        </Col>
                     ):(
                      <Col>
                      </Col>
                     )}   
                </Row>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="number" min='0' value={adualt1} onChange={(e)=>setAdualt1(e.target.value)} name="" id="" />
                    </Col>
                    <Col>
                    <h3>  children1</h3>
                    <input type="number" min='0' value={child1} onChange={(e)=>childCountFun(e,setChild1)} name="" id="" />
                    </Col>       
                  
                   </Row>


                {child1 && (
                   <Row className="agent-child-age">
                    <h2>Child age</h2>       
                    {child1 >= '1' && (
                      <Col md={2}>   
                      <input  onChange={(e)=>setAge(e.target.value)} value={age}  type="number" max='5' maxLength='1' name="" id="" />
                    </Col>   
                    )}   
                    
                  {child1 >= '2' && (
                    <Col md={2}>
                    <input  onChange={(e)=>setAge1(e.target.value)} value={age1}   type="number"  name="" id="" />
                   </Col>
                 )}   
                  {child1 >= '3' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge2(e.target.value)} value={age2}   name="" id="" />
                    </Col>
                     )} 

                     {child1 >= '4' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge3(e.target.value)} value={age3}   name="" id="" />
                    </Col>
                     )} 
                   {child1 >= '5' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge4(e.target.value)} value={age4}    name="" id="" />
                    </Col>
                    )} 
                     {child1 >= '6' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge5(e.target.value)} value={age5}   name="" id="" />
                    </Col>
                       )}  
                   </Row>
                    )}
                </Col>      
              )}

              {group6 && (<Col md={9} className='agent-search-room2'>
                <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>Nights</h3>
                      <select onChange={(e)=>setNight2} className="reset-css"  name="location"     id="location"  required >       
                      <option value={nights - splitDays}>{nights - splitDays}</option>
                      
                    </select>         
                    </Col>
                  
                    {splitDays < nights ? (
                        <Col >
                        <h3>Room Category</h3>
                        <select className="reset-css"  name="location" value={category2}   id="location"  required  onChange={(e) => setCategory2(e.target.value)} >
                        <option value="">select one</option>
                        {category ? category.length > 0 ? category.map((itm)=>(
                           <option value={itm.name}>
                           {itm.name} </option>
                        )):(
                          <option value="kerala">No rooms</option>
                        ):(
                          <option value="kerala">No rooms</option>
                        )}
                       
                        </select>   
                        </Col>
                     ):(
                      <Col>
                      </Col>
                     )}   
                </Row>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="number" min='0' value={adualt1}  name="" id="" readOnly />
                    </Col>
                    <Col>
                    <h3>  children6</h3>
                    <input type="number" min='0' value={child1}  name="" id="" readOnly/>
                    </Col>       
                  
                   </Row>


                {child1 && (
                   <Row className="agent-child-age">
                    <h2>Child age</h2>       
                    {child1 >= '1' && (
                      <Col md={2}>   
                      <input readOnly  onChange={(e)=>setAge(e.target.value)} value={age}  type="number" max='5' maxLength='1' name="" id="" />
                    </Col>   
                    )}   
                    
                  {child1 >= '2' && (
                    <Col md={2}>
                    <input readOnly onChange={(e)=>setAge1(e.target.value)} value={age1}   type="number"  name="" id="" />
                   </Col>
                 )}   
                  {child1 >= '3' && (
                    <Col md={2}>
                      <input readOnly type="number" onChange={(e)=>setAge2(e.target.value)} value={age2}   name="" id="" />
                    </Col>
                     )} 

                     {child1 >= '4' && (
                    <Col md={2}>
                      <input readOnly type="number" onChange={(e)=>setAge3(e.target.value)} value={age3}   name="" id="" />
                    </Col>
                     )} 
                   {child1 >= '5' && (
                    <Col md={2}>
                      <input readOnly type="number" onChange={(e)=>setAge4(e.target.value)} value={age4}    name="" id="" />
                    </Col>
                    )} 
                     {child1 >= '6' && (
                    <Col md={2}>
                      <input readOnly type="number" onChange={(e)=>setAge5(e.target.value)} value={age5}   name="" id="" />
                    </Col>
                       )}  
                   </Row>
                    )}
                </Col>      
              )}


            {group2 && (<Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="number" min='0' value={adualt2} onChange={(e)=>setAdualt2(e.target.value)} name="" id="" />
                    </Col>
                    <Col>
                    <h3>  children2</h3>
                    <input onChange={(e)=>childCountFun(e,setChild2)} value={child2} min='0' type="number" name="" id="" />
                    </Col>      
                    <Col md={1} onClick={close2} value={child2} style={{cursor:'pointer'}}>
                      X
                    </Col> 
                   </Row>

                   {child2 && (
                   <Row className="agent-child-age">
                    <h2>Child age</h2>       
                    {child2 >= '1' && (
                      <Col md={2}>   
                      <input onChange={(e)=>setAge7(e.target.value)} value={age7} type="number" max='5' maxLength='1' name="" id="" />
                    </Col>   
                    )} 
                  {child2 >= '2' && (
                    <Col md={2}>
                    <input onChange={(e)=>setAge8(e.target.value)}  value={age8} type="number"  name="" id="" />
                   </Col>
                 )}   
                  {child2 >= '3' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge9(e.target.value)} value={age9}  name="" id="" />
                    </Col>
                     )} 

                     {child2 >= '4' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge10(e.target.value)} value={age10}   name="" id="" />
                    </Col>
                     )} 
                   {child2 >= '5' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge11(e.target.value)} value={age11}   name="" id="" />
                    </Col>
                    )} 
                     {child2 >= '6' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge12(e.target.value)} value={age12}   name="" id="" />
                    </Col>
                       )} 
                   </Row>
                    )}
                </Col>
              )}

              {group3 && (
              <Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="number" min='0' value={adualt3} onChange={(e)=>setAdualt3(e.target.value)} name="" id="" />
                    </Col>
                    <Col>
                    <h3>  children3</h3>
                    <input type="number" min='0' value={child3} onChange={(e)=>childCountFun(e,setChild3)} name="" id="" />
                    </Col>    
                    <Col md={1} onClick={close3} style={{cursor:'pointer'}}>
                      X
                    </Col>  

                   </Row>
                   
                   {child3 && (
                   <Row className="agent-child-age">
                    <h2>Child age</h2>       
                    {child3 >= '1' && (
                      <Col md={2}>   
                      <input onChange={(e)=>setAge13(e.target.value)} value={age13} type="number" max='5' maxLength='1' name="" id="" />
                    </Col>   
                    )} 
                  {child3 >= '2' && (
                    <Col md={2}>
                    <input onChange={(e)=>setAge14(e.target.value)} value={age14}  type="number"  name="" id="" />
                   </Col>
                 )}   
                  {child3 >= '3' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge15(e.target.value)} value={age15}  name="" id="" />
                    </Col>
                     )} 

                     {child3 >= '4' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge16(e.target.value)} value={age16}   name="" id="" />
                    </Col>
                     )} 
                   {child3 >= '5' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge17(e.target.value)} value={age17}  name="" id="" />
                    </Col>
                    )} 
                     {child3 >= '6' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge18(e.target.value)} value={age18}  name="" id="" />
                    </Col>
                       )} 
                   </Row>
                    )}

                </Col>
              )}

              {group4 && (<Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="number" min='0' name="" value={adualt4} onChange={(e)=>setAdualt4(e.target.value)} id="" />
                    </Col>
                    <Col>
                    <h3>  children4</h3>
                    <input onChange={(e)=>childCountFun(e,setChild4)} min='0' value={child4} type="number"  name="" id="" />
                    </Col>    
                    <Col md={1} onClick={close4}  style={{cursor:'pointer'}}>
                      X
                    </Col>   
                   </Row>

                   {child4 && (
                   <Row className="agent-child-age">
                    <h2>Child age</h2>       
                    {child4 >= '1' && (
                      <Col md={2}>   
                      <input onChange={(e)=>setAge19(e.target.value)} type="number" value={age19} max='5' maxLength='1' name="" id="" />
                    </Col>   
                    )} 
                  {child4 >= '2' && (
                    <Col md={2}>
                    <input onChange={(e)=>setAge20(e.target.value)}  type="number" value={age20} name="" id="" />
                   </Col>
                 )}   
                  {child4 >= '3' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge21(e.target.value)} value={age21}  name="" id="" />
                    </Col>
                     )} 

                     {child4 >= '4' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge22(e.target.value)} value={age22}  name="" id="" />
                    </Col>
                     )} 
                   {child4 >= '5' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge23(e.target.value)} value={age23}  name="" id="" />
                    </Col>
                    )} 
                     {child4 >= '6' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge24(e.target.value)} value={age24}   name="" id="" />
                    </Col>
                       )} 
                   </Row>
                    )}

                </Col>
              )}
                

                {group5 && (<Col md={9} className='agent-search-room2'>
                   <Row style={{paddingLeft:'12px'}}>
                    <Col>
                      <h3>  adulats</h3>
                      <input type="number" name="" value={adualt5} onChange={(e)=>setAdualt5(e.target.value)} id="" />
                    </Col>
                    <Col>
                    <h3>  children5</h3>
                    <input type="number" value={child5} min='0' onChange={(e)=>childCountFun(e,setChild5)} name="" id="" />
                    </Col>    
                    <Col md={1} onClick={close5} style={{cursor:'pointer'}}>
                      X
                    </Col>   
                   </Row>

                   {child5 && (
                   <Row className="agent-child-age">
                    <h2>Child age</h2>       
                    {child5 >= '1' && (
                      <Col md={2}>   
                      <input onChange={(e)=>setAge25(e.target.value)} type="number" value={age25} max='5' maxLength='1' name="" id="" />
                    </Col>   
                    )} 
                  {child5 >= '2' && (
                    <Col md={2}>
                    <input onChange={(e)=>setAge26(e.target.value)}  type="number" value={age26}  name="" id="" />
                   </Col>
                 )}   
                  {child5 >= '3' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge27(e.target.value)} value={age27}  name="" id="" />
                    </Col>
                     )} 

                     {child5 >= '4' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge28(e.target.value)} value={age28}  name="" id="" />
                    </Col>
                     )} 
                   {child4 >= '5' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge29(e.target.value)} value={age29}   name="" id="" />
                    </Col>
                    )} 
                     {child5 >= '6' && (
                    <Col md={2}>
                      <input type="number" onChange={(e)=>setAge30(e.target.value)} value={age30}   name="" id="" />
                    </Col>
                       )} 
                   </Row>
                    )}

                </Col>
              )}

              </div>
              </Row>
              )}
      </div>
   
  )
}

export default SearchCriteria2