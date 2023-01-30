import React, { useEffect ,useMemo} from "react";
import { useRef } from "react";
import { useState } from "react";
import { Accordion, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { Review } from "../components/Review";
import { detailsPropertyAgent } from "../actions/agentAction";
import { checkProperty, detailsProperty } from "../actions/generalAction";
import AgentNavbar from "../components/AgentNavbar";
import Criteria from "../components/Criteria";
import Dialog from "../components/Dialog";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import ShowMore from "../components/ShowMore";
import Tables from "../components/Tables";
import { format } from "date-fns";
import Swal from "sweetalert2";


function AgentPropertyDetails() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  const [deals, setDeals] = useState(true);
  const [about, setAbout] = useState(false);
  const [photos, setPhotos] = useState(false);
  const [showmore, setShowmore] = useState(false);
  const [map, setMap] = useState(false);
  const [deatails, setDeatails] = useState(false);
  const [category1,setCategory1]=useState('')
  const [category2,setCategory2]=useState('')
  const [splitStay,setSplitStay]=useState(false)

  const navigate = useNavigate();
  const params = useParams();
  const {propertyId} = params;
  const dispatch = useDispatch();
  const agentPropertyDetails = useSelector((state) => state.agentPropertyDetails);
  const { loading:loadingProp, error:errorProp, property } = agentPropertyDetails;
  const location = useLocation()
  const {split,rooms,childCount,adultCount,startingDate,endingDate,nights,destination,holidayType,nationality,selectedDate,selectedDate2,childAge}  =location.state
// console.log(childAge,'rooms')





  // console.log(split,'state');
  const [room, setRoom] = useState('')
  const [group1, setGroup1] = useState(true)
  const [group2, setGroup2] = useState(false)
  const [group3, setGroup3] = useState(false)
  const [group4, setGroup4] = useState(false)
  const [group5, setGroup5] = useState(false)
  const [adult, setAdult] = useState(rooms[0].adult)
  const [child, setChild] = useState(rooms[0].child)
  const [filterRoom, setFilterRoom] = useState([])
  const [mealsList, setMealsList] = useState([])
  const [transferList, setTransferList] = useState([])
  const [splittedDays1, setSplittedDays1] = useState('')
  const [splittedDays2, setSplittedDays2] = useState('')


  const [all,setAll]=useState('')
  const [price1, setPrice1] = useState(0)
  const [price2, setPrice2] = useState(0)
  const [price3, setPrice3] = useState(0)
  const [price4, setPrice4] = useState(0)
  const [price5, setPrice5] = useState(0)
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [name3, setName3] = useState('')
  const [name4, setName4] = useState('')
  const [name5, setName5] = useState('')
  const [roomId1, setRoomId1] = useState('')
  const [roomId2, setRoomId2] = useState('')
  const [roomId3, setRoomId3] = useState('')
  const [roomId4, setRoomId4] = useState('')
  const [roomId5, setRoomId5] = useState('')
  const [transfer1, setTransfer1] = useState('')
  const [transfer2, setTransfer2] = useState('')
  const [transfer3, setTransfer3] = useState('')
  const [transfer4, setTransfer4] = useState('')
  const [transfer5, setTransfer5] = useState('')
  const [transferid1, setTransferid1] = useState('')
  const [transferid2, setTransferid2] = useState('')
  const [transfeidr3, setTransferid3] = useState('')
  const [transferid4, setTransferid4] = useState('')
  const [transferid5, setTransferid5] = useState('')
  const [meals1, setMeals1] = useState([''])
  const [meals2, setMeal2] = useState('')
  const [meals3, setMeal3] = useState('')
  const [meals4, setMeal4] = useState('')
  const [meals5, setMeal5] = useState('')
  const [extraServices, setExtraServices] = useState([])
  const [terms, setTerms] = useState('')
  const [cp, setCp] = useState('')
  const [propertyName,setPropertyName]=useState('')
  const [toppings,setToppings]=useState([])
  const [showTask, setShowTask] = useState(false)
  const [totalPrice, setTotalPrice] = useState('')
  const [priceSplit1,setPriceSplit1]=useState()
  const [priceSplit2,setPriceSplit2]=useState()
  const [checkedState, setCheckedState] = useState(
   
    new Array(12).fill(false)
);
//  console.log(toppings.length,'tp')

const openShowMore=(roomName)=>{
  setShowTask(true)
  setRoom(roomName)
  // console.log(transferList.type,'tl');
}


  const cancel=()=>{
    setShowTask(false)
  }
  const confirm=()=>{
    setShowTask(false)
  }
  const photopage = () => {
    setDeals(false);
    setPhotos(true);
    setDeatails(false);
    setAbout(false);
    setMap(false);
  };
  const dealpage = () => {
    setDeals(true);
    setPhotos(false);
    setDeatails(false);
    setAbout(false);
    setMap(false);
  };
  const roomDetails = () => {
    setDeatails(true);
    setDeals(false);
    setPhotos(false);
    setAbout(false);
    setMap(false);
  };
  const aboutpage = () => {
    setDeatails(false);
    setDeals(false);
    setPhotos(false);
    setAbout(true);
    setMap(false);
  };

  const mappage = () => {
    setDeatails(false);
    setDeals(false);
    setPhotos(false);
    setAbout(false);
    setMap(true);
  };

  useEffect(() => {
    dispatch(detailsPropertyAgent(propertyId,startingDate,endingDate,rooms));
  }, [dispatch,rooms]);

  useMemo(() =>{ 
    if(split){
      const {category1,category2}= location.state
      setCategory1(category1)
      setCategory2(category2)
      // console.log(category1,category2,'heyy')
      if(property){
          console.log(category1,'cate')
          const filterdProperty1= property.rooms.filter((e)=>e.name === category1)
          const filterdProperty2=property.rooms.filter((e)=>e.name === category2)
          // const capacity=filterdProperty1.filter((e)=>e.adult>=adult && e.child >=child)
          const splitPrice1=filterdProperty1[0].price.first
          const splitPrice2=filterdProperty2[0].price.first
          const splitRoomId1=filterdProperty1[0]._id
          const splitRoomId2=filterdProperty2[0]._id
          const splitedDay1=rooms[0].splitDay1
          const splitedDay2=nights - splitedDay1
          let adults=rooms[0].adult      
          let childs=rooms[0].child       
          console.log(splitedDay1,splitedDay2,nights,'spp')

          setPriceSplit1(splitPrice1)
          setPriceSplit2(splitPrice2)    
          setRoomId1(splitRoomId1)
          setRoomId2(splitRoomId2)
          setAdult(adults)
          setChild(childs)
          setSplittedDays1(splitedDay1)
          setSplittedDays2(splitedDay2)

          // console.log(splitRoomId1,'splitRooms')
        }
      
    }
    }, [location.state,property])

  useEffect(()=>{
    if(property){
      const filterdProperty=property.rooms.filter((e)=>e.adult>=adult && e.child >=child)
      setFilterRoom(filterdProperty)
      const allMeals= property.meals
      setMealsList(allMeals)
      const onetransfer=property.transfer[0]
      setTransferList(onetransfer)
      setCp(property.cancellation_policy)
      setTerms(property.t_and_c)
      setPropertyName(property.name)
      const extraServicesInitial=property.extra_charges
      setToppings(extraServicesInitial)
    }
   
  },[property,location.state])
  useEffect(()=>{
    let roomprice = Number(price1)+Number(price2)+Number(price3)+Number(price4)+Number(price5)+Number(totalPrice)
    setAll(roomprice)
  },[price1,price2,price3,price4,price5,totalPrice])

  
      const num1=()=>{
      setGroup1(true)
      setGroup5(false)
      setGroup3(false)
      setGroup2(false)
      setGroup4(false)
      let adults=rooms[0].adult
      setAdult(adults)
      let childs=rooms[0].child
      setChild(childs)
      let filterdProp=  property.rooms.filter((e)=>e.adult>=adults && e.child >=childs)
       setFilterRoom(filterdProp)
    }
    
      const num2=()=>{
      setGroup1(false)
      setGroup5(false)
      setGroup3(false)
      setGroup4(false)
      setGroup2(true)
      let adults=rooms[1].adult
      setAdult(adults)
      let childs=rooms[1].child
      setChild(childs)
      let filterdProp=  property.rooms.filter((e)=>e.adult>=adults && e.child >=childs)
      setFilterRoom(filterdProp)
    }
    
      const num3=()=>{
      setGroup3(true)
      setGroup1(false)
      setGroup5(false)
      setGroup2(false)
      setGroup4(false)
      let adults=rooms[2].adult
      setAdult(adults)
      let childs=rooms[2].child
      setChild(childs)
      let filterdProp=  property.rooms.filter((e)=>e.adult>=adults && e.child >=childs)
      setFilterRoom(filterdProp)
    }
    
      const num4=()=>{
      setGroup1(false)
      setGroup5(false)
      setGroup3(false)
      setGroup2(false)
      setGroup4(true)
      let adults=rooms[3].adult
      setAdult(adults)
      let childs=rooms[3].child
      setChild(childs)
      let filterdProp=  property.rooms.filter((e)=>e.adult>=adults && e.child >=childs)
      setFilterRoom(filterdProp)
    }

      const num5=()=>{
      setGroup1(false)
      setGroup4(false)
      setGroup3(false)
      setGroup2(false)
      setGroup5(true)
      let adults=rooms[4].adult
      setAdult(adults)
      let childs=rooms[4].child
      setChild(childs)
      let filterdProp=  property.rooms.filter((e)=>e.adult>=adults && e.child >=childs)
      setFilterRoom(filterdProp)
    }
   
  const mealsChange=(e)=>{
    const mealsObject=e.target.value
    const meals=property.meals.filter((e)=>e._id === mealsObject)
    setMealsList(meals)
    if(mealsObject == 'all'){
      if(property){
        const filterdProperty=property.rooms.filter((e)=>e.adult>=adult && e.child >=child)
        setFilterRoom(filterdProperty)
        const allMeals= property.meals
        setMealsList(allMeals)
      }
    }
  }

  const transferChange=(e)=>{
    const transferObject=e.target.value
    const transfer=property.transfer.find((e)=>e._id === transferObject)
    setTransferList(transfer)
  }

  

const proceed=()=>{
  let priceArray=[]
  priceArray.push(price1,price2,price3,price4,price5)
  // console.log(priceArray,'arr')
  const filterdPrice = priceArray.filter((e)=>e !== 0)
  // console.log(filterdPrice,'arrs')
    if(filterdPrice.length !== rooms.length && !split){
      Swal.fire({
        icon: 'warning',
        title: 'please seect all pice',
        text: "Thanks",
        type: 'success',  
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!', 
        confirmButtonAriaLabel: 'Thumbs up, great!',          
      }); 
    }else{
      
      navigate(`/summary`,{state:{adultCount,childCount,childAge,nights,splittedDays1,splittedDays2,selectedDate,selectedDate2,splitStay,totalPrice:all,extraservice:extraServices,tax:property.tax,propId:propertyId,room1:name1,room2:name2,room3:name3,room4:name4,room5:name5,rooms:rooms,transfer1:transfer1,transfer2:transfer2,transfer3:transfer3,transfer4:transfer4,transfer5:transfer5,cp:cp,terms:terms,startingDate:startingDate,endingDate:endingDate,propertyName:propertyName,nationality:nationality,holidayType:holidayType,destination:destination,mealsid:[meals1,meals2,meals3,meals4,meals5],transferid:[transferid1,transferid2,transfeidr3,transferid4,transferid5],roomid:[roomId1,roomId2,roomId3,roomId4,roomId5]}})
    } 
}

const handleOnChange = (position,id) => {
  const updatedCheckedState = checkedState.map((item, index) =>
    index == position ? !item : item,    
  );
  setCheckedState(updatedCheckedState);
  const obj = []
  const totalPrices = updatedCheckedState.reduce(
    (sum, currentState, index) => {
      if (currentState === true) {
          return sum + toppings[index].price;
          obj.push({ desc: toppings[index].desc, price: toppings[index].price })
      }
      return sum;
    },
    0
  );
  
    setTotalPrice(totalPrices)
    const object = updatedCheckedState.reduce(
      (objs, currentState, index) => {
        if (currentState === true) {
          
          return obj.push({ desc: toppings[index].desc, price: toppings[index].price })
        }
        return obj;
      },
      0
    );
    setExtraServices(object) 
}
 
  return (
    <div>
      <AgentNavbar image={'/assets/image/log3.png'}/>
      {loadingProp ? (<LoadingBox></LoadingBox>):
      errorProp ? (<MessageBox>{errorProp}</MessageBox>):(   
      <div className="agentpropdetailsreen">
        <Container>            
          <Row>
            <Col className="agentpropdetails" md={8}>
              <Row
                className="agentpropdetails-header"
                style={{
                  backgroundImage: `url("/assets/image/backbanner.png")`,
                }}
              >
                <Row className="agentpropdetails-content">
                  <Col md={1} style={{marginLeft:'155px'}}>
                    Check in <br />{property.checkin}
                  </Col>
                  <Col md={1} >Check out <br />{property.checkout}</Col>
                  <Col md={1} >#Restaurent <br />{property.restaurants}</Col>
                  <Col md={1} >#Bars <br />{property.bars}</Col>
                  <Col md={{ span: 2, offset: 3 }} style={{alignSelf:'center'}}>
                   <Rating 
                    rating={property.starring}
                    ></Rating>
                  </Col>
                </Row>

                <div className="agentprop-logo">
                  <img src="/assets/image/agentlogo.png" alt="" />
                </div>
              </Row>
              <div className="agentpropdetails-nav">
                <ul>
                  <li onClick={dealpage} className={`${deals ? "act" : ""}`}>
                    deals
                  </li>
                </ul>
                <ul>
                  <li className={`${about ? "act" : ""}`} onClick={aboutpage}>
                    About{" "}
                  </li>
                  <li
                    className={`${deatails ? "act" : ""}`}
                    onClick={roomDetails}
                  >
                    Room Details{" "}
                  </li>
                  <li className={`${photos ? "act" : ""}`} onClick={photopage}>
                    Photos
                  </li>
                  <li className={`${map ? "act" : ""}`} onClick={mappage}>
                    Map{" "}
                  </li>
                  {/* <li>About </li> */}
                </ul>
              </div>

              <div className="agentprop-tabcontent">
                {deals && (
                  <>
                    <div className="agentpropdetails-nav2">
                      <ul>
                        {rooms.length >= 1 &&  <li className={`${group1 ? "act" : ""}`}   onClick={num1} >Group1 </li>}
                        {rooms.length >= 2 && !split && <li className={`${group2 ? "act" : ""}`}   onClick={num2} >Group2 </li>}
                        {rooms.length >= 3 && !split && <li className={`${group3 ? "act" : ""}`}   onClick={num3} >Group3 </li>}
                        {rooms.length >= 4 && !split && <li className={`${group4 ? "act" : ""}`}   onClick={num4} >Group4 </li>}
                        {rooms.length >= 5 && !split && <li className={`${group5 ? "act" : ""}`}   onClick={num5} >Group5 </li>}
                      </ul>
                    </div>
                    <Row className="agentprop-tableinside">
                      <h1>
                        {" "}
                        Packages for {adult} adults && {child} childrens from {format(selectedDate,'dd MMM yyyy')} to {format(selectedDate2,'dd MMM yyyy')}
                        
                      </h1>
                      {/* {group1 && ( */}
                      {!split && (
                         <Table striped bordered hover >
                         <thead>
                           <tr>
                             <th>Room type</th>
                             <th>Starting from 1</th>
                           </tr>
                         </thead>
                         <tbody>
                           {property.rooms.map((room)=>(
                               <tr key={room._id}>
                               <td className={`${room.adult >= adult && room.child >= child ? '': 'yesss' }`}>{room.name}</td>
                               <td className={`${room.adult >= adult && room.child >= child ? '': 'yesss' }`}>{room.price.first}</td>
                             </tr> 
                           ))}                                   
                         </tbody>
                       </Table>

                      )}
                       
                      {/* )} */}

                      
                      {/* <Tables rooms={property.rooms}/> */}

                  <Row className="agentpropdetails-filter">
                    <Col md={5}>
                      <h1>Transfer</h1>
                      <Form.Select aria-label="Default select example"  onChange={transferChange}>
                       {/* <option>All</option> */}
                       {property.transfer && property.transfer.length === 0 && (
                        <option  >No items</option>
                       )}
                       {property.transfer.length> 0 && property.transfer.map((itm)=>(
                          <option key={itm._id} value={itm._id}>{itm.type}</option>
                       ))}
                       
                       {/* <option value="3">Three</option> */}
                        </Form.Select>
                    </Col>
                    <Col md={3}>
                    <h1>Meals</h1>
                      <Form.Select aria-label="Default select example" onChange={mealsChange}>
                        {property.meals.length === 0 && (
                            <option value='all'>No itmes</option>
                        )}
                           {property.meals && property.meals.length > 0 && (
                                 <option value='all'>All</option>
                        )}
                    
                       {property.meals && property.meals.map((itm)=>(
                          <option key={itm._id} value={itm._id}>{itm.type}</option>
                       ))}
                        </Form.Select>
                    </Col>
                  </Row>

         

                      {filterRoom.length === 0 &&  (
                        <MessageBox>No rooms</MessageBox>
                      )}
                       {split && (
                        <>
                        <MessageBox>splitSTays</MessageBox>
                        <Accordion  alwaysOpen defaultActiveKey={['0']}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <Col md={9}>
                               <h1>{category1}+{category2}</h1>
                            </Col>
                            <Col  md={2}>
                               <p>split stay</p>
                            </Col>
                            </Accordion.Header>
                             {mealsList && mealsList.map((itm)=>(                         

                            <Accordion.Body key={itm._id}>
                               <Col ><p>{itm.type}</p></Col>
                            <Col>
                               <Row>Arrival</Row>
                               <Row><p>{transferList && transferList.type}</p></Row>
                            </Col>
                            <Col>
                               <Row>Departure</Row>
                               <Row><p>{transferList && transferList.type }</p></Row>
                               <Row style={{cursor:'pointer'}} onClick={()=>openShowMore(room.name)}>show more</Row>
                            </Col>
                          
                            {group1 && (
                             <Col md={2} style={{ textAlignLast: "right" }}>
                              
                             <h1 >{splittedDays1 * (Number(priceSplit1) + Number(adult) * Number(itm.price_a) + Number(child) * Number(itm.price_c) + Number(adult) * Number(transferList.price_a) + Number(child) * Number(transferList.price_c )) +splittedDays2 * (Number(priceSplit2) + Number(adult) * Number(itm.price_a) + Number(child) * Number(itm.price_c) + Number(adult) * Number(transferList.price_a) + Number(child) * Number(transferList.price_c))} </h1>
                             <input value={splittedDays1 * (Number(priceSplit1) + Number(adult) * Number(itm.price_a) + Number(child) * Number(itm.price_c) + Number(adult) * Number(transferList.price_a) + Number(child) * Number(transferList.price_c )) +splittedDays2 * (Number(priceSplit2) + Number(adult) * Number(itm.price_a) + Number(child) * Number(itm.price_c) + Number(adult) * Number(transferList.price_a) + Number(child) * Number(transferList.price_c))}
                             type="radio"  name="test" onChange={(e)=>{setPrice1(e.target.value);setName1(category1);setName2(category2);setTransfer1(transferList.type);setMeals1(itm._id);setTransferid1(transferList._id);setSplitStay(true)}} />
                           </Col>
                           )}
                
                          </Accordion.Body>
                          ))}
                        </Accordion.Item>
                      </Accordion>
                      </>
                      )}
                      
                      {!split && filterRoom.map((room)=>(       
                      <Accordion key={room._id}  alwaysOpen defaultActiveKey={['0']}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>{room.name}</Accordion.Header>
                             {mealsList && mealsList.map((itm)=>(                         

                            <Accordion.Body key={itm._id}>
                               <Col ><p>{itm.type}</p></Col>
                            <Col>
                               <Row>Arrival</Row>
                               <Row><p>{transferList && transferList.type}</p></Row>
                            </Col>
                            <Col>
                               <Row>Departure</Row>
                               <Row><p>{transferList && transferList.type }</p></Row>
                               <Row style={{cursor:'pointer'}} onClick={()=>openShowMore(room.name)}>show more</Row>
                            </Col>
                            
                            {group1 && (
                             <Col md={2} style={{ textAlignLast: "right" }}>
                              {/* <h3>{room.price.first}</h3> */}
                             <h1>{nights * (Number(room.price.first) + Number(adult) * Number(itm.price_a) + Number(child) * Number(itm.price_c) + Number(adult) * Number(transferList.price_a) + Number(child) * Number(transferList.price_c))}</h1>
                             <input value={nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))} 
                             type="radio"  name="test" onChange={(e)=>{setPrice1(e.target.value);setName1(room.name);setTransfer1(transferList.type);setMeals1(itm._id);setTransferid1(transferList._id);setRoomId1(room._id);setSplitStay(false)}} />
                           </Col>
                           )}
                           {group2 && (
                             <Col md={2} style={{ textAlignLast: "right" }}>
                             <h1>{nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))}</h1>
                             <input value={nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))} 
                             type="radio"  name="test" onChange={(e)=>{setPrice2(e.target.value);setName2(room.name);setTransfer2(transferList.type);setMeal2(itm._id);setTransferid2(transferList._id);setRoomId2(room._id);setSplitStay(false)}} />
                           </Col>
                           )}

                          {group3 && (
                             <Col md={2} style={{ textAlignLast: "right" }}>
                             <h1>{nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))}</h1>
                             <input value={nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))} 
                             type="radio"  name="test3" onChange={(e)=>{setPrice3(e.target.value);setName3(room.name);setTransfer3(transferList.type);setMeal3(itm._id);setTransferid3(transferList._id);setRoomId3(room._id);setSplitStay(false)}} />
                           </Col>
                           )}

                            {group4 && (
                             <Col md={2} style={{ textAlignLast: "right" }}>
                             <h1>{nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))}</h1>
                             <input value={nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))} 
                             type="radio"  name="test4" onChange={(e)=>{setPrice4(e.target.value);setName4(room.name);setTransfer4(transferList.type);setMeal4(itm._id);setTransferid4(transferList._id);setRoomId4(room._id);setSplitStay(false)}}/>
                           </Col>
                           )}

                          {group5 && (
                             <Col md={2} style={{ textAlignLast: "right" }}>
                             <h1>{nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))}</h1>
                             <input value={nights * (Number(room.price.first) + Number(itm.price_a) * Number(adult)+ Number(child) * Number(itm.price_c) + Number(adult)*  Number(transferList.price_a) + Number(child) * Number(transferList.price_c))} 
                             type="radio"  name="test5" onChange={(e)=>{setPrice5(e.target.value);setName5(room.name);setTransfer5(transferList.type);setMeal5(itm._id);setTransferid5(transferList._id);setRoomId5(room._id);setSplitStay(false)}}/>
                           </Col>
                           )}
                          </Accordion.Body>
                          ))}
                        </Accordion.Item>
                      </Accordion>
                       ))}
                    </Row>
                  </>
                )}

                {about && (
                  <div className="agent-about">
                    <h2>{property.name}</h2>
                    <h1> {property.description}</h1>
                  </div>
                )}

                {map && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.181771524664!2d75.0807957!3d12.504107899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4846bda0b9525%3A0x1a6965b115fbfb96!2sLBS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1657770216020!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    style={{ width: "100%", height: "450px" }}
                  ></iframe>
                )}

                {photos && (
                  <>
                    <Slider {...settings} className="agent-prop-pic">
                      {
                        property.images.length !== 0 &&
                        property.images.map((img) => (
                          <div key={img._id}>
                            <img src={img.location} alt="" />
                          </div>
                        ))}
                    </Slider>
                  </>
                )}

                {deatails && (
                  <div> 
                    {property.rooms.length === 0 && (
                      <MessageBox>No rooms</MessageBox>
                    )}
                    {property.rooms.map((room) => (
                        <Row key={room._id} className="agent-room-det">
                          <Col md={4} className="ag-img">
                            {room.images.length > 0 && (
                              <img src={room.images[0].location} alt="" />
                            )}
                            {/*  */}
                          </Col>
                          <Col className="ag-img">
                            <h2> {room.description}</h2>
                          </Col>
                        </Row>
                      ))}
                  </div>
                )}
              </div>
            </Col>

            <Col style={{ marginTop: "18px" }} className='scrollbar'>     
                 <div className="review">
                   <Row className="pl">
                      <h1>selected item details</h1>
                   </Row>
                   <div className="cart-review">
                    {rooms.length >= 1 && (
                      <>
                     <Review split={split} rooms={rooms} splitroom={name2} num={1} name={name1} price={price1} nights={nights} total={Number(rooms[0].adult)+Number(rooms[0].child)}/>
                      </>
                      )}
                   </div>

                   <div className="cart-review">
                   {rooms.length >= 2  && !split &&(
                      <>
                         <Review rooms={rooms} num={2}  name={name2} price={price2} nights={nights}  i={1} total={Number(rooms[1].adult)+Number(rooms[1].child)}/>
                      </>
                      )}
                   </div>

                   <div className="cart-review">
                   {rooms.length >= 3 && !split &&(
                      <>
                       <Review rooms={room} num={3}  name={name3} price={price3} nights={nights}  i={2} total={Number(rooms[2].adult)+Number(rooms[2].child)}/>
                      </>
                      )}                 
                   </div>

                    <div className="cart-review">
                    {rooms.length >= 4 && !split &&(
                      <>
                        <Review rooms={room} num={4}  name={name4} price={price4} nights={nights}   i={3} total={Number(rooms[3].adult)+Number(rooms[3].child)}/>
                      </>
                      )}
                   </div>
                    

                   <div className="cart-review">
                    {rooms.length >= 5 && !split &&(
                      <>
                       <Review rooms={room} num={5}  name={name5} price={price5} nights={nights}  i={4} total={Number(rooms[4].adult)+Number(rooms[4].child)}/>
                      </>
                      )}
                   </div>
                  
                  <div style={{margin:'6px'}}>
                   <Row className="agent-extra-services">
                      <Row className="additional-service">
                          <h1>Available extra services</h1>
                      </Row>
                      <table>
                        <thead>
                          <tr>
                            <td colSpan={2}>Servics</td>
                            <td>Price</td>
                          </tr>
                        </thead>
                        {toppings.map((extra,index)=>(
                        <tbody key={extra._id}>
                          <tr>
                            <td><input type="checkbox" 
                                 value={extra._id} 
                                 onChange={() => handleOnChange(index,extra._id)}
                                 checked={checkedState[index]}
                                 /></td>
                            <td>{extra.desc}</td>
                            <td>{extra.price}</td>
                          </tr>
                        </tbody>
                        ))}
                      </table>
                   </Row>
                   </div>

                   <div className="grand-total">
                    <h2>Grand Total</h2>
                    <p>USD {all}</p>
                   </div>
                   <div className="proceed-btn">
                       <button onClick={proceed} >Proceed</button>
                   </div>
                </div>
             
              <Criteria
                 selectedDate={selectedDate}
                 selectedDate2={selectedDate2}
                 Nights={nights}
                 destination={destination}
                 nationalities={nationality}
                 startingDate={startingDate} 
                 endingDate={endingDate}
                 holidayType={holidayType}
                 adultCount={adultCount}
                 childCount={childCount} 
                 category={property.rooms}
                 propId={propertyId}
                 childAge={childAge}
                 />

      {property.rooms.length > 0 && showTask && (
          <ShowMore show={showTask}
          cancel={cancel}
          confirm={confirm}
          roomName={room}
          startingDate={startingDate}
          endingDate={endingDate}
          adult={adult}
          child={child}
          transfer={transferList.type}
          description='are you sure you want to delete'/>
          )}
             
              
            </Col>
          </Row>
        </Container>
      </div>
      )}
    </div>
  );
}

export default AgentPropertyDetails;
