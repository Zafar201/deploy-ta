import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { checkPropertyAgents } from "../actions/agentAction";
import { checkProperty } from "../actions/generalAction";
import AgentNavbar from "../components/AgentNavbar";
import Criteria from "../components/Criteria";
import Criteria2 from "../components/Criteria2";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { mealsArray, ratings, transferArray } from "../utils";

function AgentSearchListScreen() {
  const agentProperties = useSelector((state) => state.agentProperties);
  const { loading, error, prop } = agentProperties;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ratingBox,setRatingBox]=useState(true)
  const [sortBox,setSortBox]=useState(false)
  const [filterActive,setFilterActive] = useState(false)
  const [childAge, setChildAge] = useState([])
  const params = useParams();
  const {
    rating = 0,
    name = "all",
    type = "all",
    transfer = "all",
    meal = "all",
    price='all',
  } = params;


  const location = useLocation();
  const {
    startingDate,
    endingDate,
    destination,
    rooms,
    childCount,
    adultCount,
    nights,
    nationality,
    selectedDate,
    selectedDate2,
    holidayType,
  } = location.state;
  console.log(rooms,'rooms')
  


  useMemo(() => {
    // const child_age={}
    const child_ages=[]
    console.log(rooms,'rooms')
    for(let i=0;i<rooms.length;i++){
      for (let j=0;j<rooms[i].child;j++){
        const age=rooms[i].child_age[j]
        child_ages.push(age)       
      }     
      console.log(child_ages,'heyy')
      setChildAge(child_ages)
      
    }
  }, [rooms])
 
 

  useEffect(() => {
    dispatch(
      checkPropertyAgents(destination, rating, name, type, meal, transfer,price)
    );
  }, [dispatch, params]);




  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "...." : str;
  };

  const getFilterUrl = (filter) => {
    setFilterActive(true)
    const filterRating = filter.rating || rating;
    const filterName = filter.name || name;
    const sortType = filter.type || type;
    const sortMeal = filter.meal || meal;
    const sortTransfer = filter.transfer || transfer;
    const priceFilter = filter.price || price

    return `/search/rating/${filterRating}/name/${filterName}/type/${sortType}/meal/${sortMeal}/transfer/${sortTransfer}/price/${priceFilter}`;
  };

  return (
    <div>
      <AgentNavbar image={filterActive ? '/assets/image/log3.png' : '../assets/image/log3.png'}/>

      <div className="agent-searchlist">
        <Container>
          <Row>
            <Col md={3}>
              <Row>
                <Criteria2
                  selectedDate={selectedDate}
                  selectedDate2={selectedDate2}
                  Nights={nights}
                  destination={destination}
                  startingDate={startingDate}
                  endingDate={endingDate}
                  holidayType={holidayType}
                  adultCount={adultCount}
                  childCount={childCount}
                  nationalities={nationality}
                  childAge={childAge}
                />
              </Row>

              <Row className="rating-show" style={{marginTop:'53px'}}>
                <h1 >Rating</h1>
                {ratingBox ? ( <img onClick={()=>setRatingBox(!ratingBox )} className="close" src="/assets/image/close.png" alt="" />):(
                  ( <img onClick={()=>setRatingBox(!ratingBox )} className="drop" src="/assets/image/down.png" alt="" />)
                )}    
              </Row>

            {ratingBox && (
                <Row className="rating-box" >
                {ratings.map((r) => (
                  <ul key={r.rating} style={{ listStyleType: "none" }}>
                    <li
                      className={`${r.rating}` === `${rating}` ? "active" : ""}
                      key={r.name}
                      onClick={() =>
                        navigate(getFilterUrl({ rating: r.rating }), {
                          state: {
                            rooms: rooms,
                            adultCount: adultCount,
                            childCount: childCount,
                            startingDate: startingDate,
                            endingDate: endingDate,
                            nights: nights,
                            destination: destination,
                            holidayType: holidayType,
                            nationality: nationality,
                            selectedDate: selectedDate,
                            selectedDate2: selectedDate2,
                          },
                        })
                      }
                    >
                      <Rating caption={r.name} rating={r.rating}></Rating>
                    </li>
                  </ul>
                ))}
              </Row>
            )}
            

            <Row className="rating-show sorting-show" style={{marginTop:'15px'}}>
                <h1 >Sort</h1>
                {sortBox ? ( <img onClick={()=>setSortBox(!sortBox )} className="close" src="/assets/image/close.png" alt="" />):(
                  ( <img onClick={()=>setSortBox(!sortBox )} className="drop" src="/assets/image/down.png" alt="" />)
                )}    
              </Row>

            {sortBox && (
                <Row className="sort-box">
                  <h1>Sort by Price</h1>
                  <p onClick={()=>navigate(getFilterUrl({ name: 'low' }),{state:{rooms:rooms,adultCount:adultCount,childCount:childCount,startingDate:startingDate,endingDate:endingDate,nights:nights,destination:destination,holidayType:holidayType,nationality:nationality,selectedDate:selectedDate,selectedDate2:selectedDate2}})}>low to high</p>
                  <p onClick={()=>navigate(getFilterUrl({ name: 'high' }),{state:{rooms:rooms,adultCount:adultCount,childCount:childCount,startingDate:startingDate,endingDate:endingDate,nights:nights,destination:destination,holidayType:holidayType,nationality:nationality,selectedDate:selectedDate,selectedDate2:selectedDate2}})}>high to low  </p>
                  <h1>Sort by Name</h1>
                  <p onClick={()=>navigate(getFilterUrl({ name: 'low' }),{state:{rooms:rooms,adultCount:adultCount,childCount:childCount,startingDate:startingDate,endingDate:endingDate,nights:nights,destination:destination,holidayType:holidayType,nationality:nationality,selectedDate:selectedDate,selectedDate2:selectedDate2}})}>A-Z</p>
                  <p onClick={()=>navigate(getFilterUrl({ name: 'high' }),{state:{rooms:rooms,adultCount:adultCount,childCount:childCount,startingDate:startingDate,endingDate:endingDate,nights:nights,destination:destination,holidayType:holidayType,nationality:nationality,selectedDate:selectedDate,selectedDate2:selectedDate2}})}>Z-A</p>
                </Row>
            )}
            
            </Col>


            <Col md={9} className="searchlist-right">         
              <div className="filter-select">
                <Col>
                <label htmlFor="">Propert type</label>
                  <select
                    //  value={order}
                    onChange={(e) =>
                      navigate(getFilterUrl({ type: e.target.value }), {
                        state: {
                          rooms: rooms,
                          adultCount: adultCount,
                          childCount: childCount,
                          startingDate: startingDate,
                          endingDate: endingDate,
                          nights: nights,
                          destination: destination,
                          holidayType: holidayType,
                          nationality: nationality,
                          selectedDate: selectedDate,
                          selectedDate2: selectedDate2,
                        },
                      })
                    }
                  >
                    <option value="all">All</option>
                    <option value="Standard">Standard</option>
                    <option value="Family">Family</option>
                    <option value="Honeymoon">Honeymoon</option>
                    {/* <option value="Surfing">Surfing</option>
                    <option value="Diving">Diving</option> */}
                  </select>
                </Col>
                <Col>
                  <label htmlFor="">Meals</label>
                  <select
                    value={meal}
                    onChange={(e) =>
                      navigate(getFilterUrl({ meal: e.target.value }), {
                        state: {
                          rooms: rooms,
                          adultCount: adultCount,
                          childCount: childCount,
                          startingDate: startingDate,
                          endingDate: endingDate,
                          nights: nights,
                          destination: destination,
                          holidayType: holidayType,
                          nationality: nationality,
                          selectedDate: selectedDate,
                          selectedDate2: selectedDate2,
                        },
                      })
                    }
                  >
                    {mealsArray.map((itm) => (
                      <option key={itm.name} value={itm.name}>{itm.name}</option>
                    ))}
                  </select>
                </Col>
                <Col>
                  <label htmlFor="">Transfer</label>
                  <select
                    value={transfer}
                    onChange={(e) =>
                      navigate(getFilterUrl({ transfer: e.target.value }), {
                        state: {
                          rooms: rooms,
                          adultCount: adultCount,
                          childCount: childCount,
                          startingDate: startingDate,
                          endingDate: endingDate,
                          nights: nights,
                          destination: destination,
                          holidayType: holidayType,
                          nationality: nationality,
                          selectedDate: selectedDate,
                          selectedDate2: selectedDate2,
                        },
                      })
                    }
                  >
                    {transferArray.map((itm) => (
                      <option key={itm.id} value={itm.name}>{itm.name}</option>
                    ))}
                  </select>
                </Col>
              </div>

           

              {!loading && !error && prop.length === 0 && (
                <MessageBox>No properties</MessageBox>
              )}

              <div style={{ marginTop: "80px" }}>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox>{error}</MessageBox>}
                {!loading &&
                  !error &&
                  prop.map((itm) => (
                    <div key={itm._id} className="home-card card-2">
                      <Container>
                        <Row className="home-3">
                          <Col
                            style={{ padding: "0px" }}
                            md={3}
                            className="home-3-img"
                          >
                            <img
                              src={
                                itm.images.length !== 0 &&
                                itm.images[0].location
                              }
                              alt=""
                            />
                          </Col>
                          <Col className="details">
                            <Row>
                              <h1>{itm.name}</h1>
                            </Row>
                            <Row className="prop-img">
                              <Col md={1}>
                                <img src="/assets/image/location.png" alt="" />
                              </Col>
                              <Col className="location">
                                <h1 style={{ marginLeft: "0px" }}>
                                  {itm.location}
                                </h1>
                              </Col>
                            </Row>
                            <Row>
                              <p> {truncate(itm.description, 100)} </p>
                            </Row>

                            <Row className="prop-btm">
                              <Col>
                                <Rating rating={itm.starring} />
                                <h1>{itm.minimumPrice}</h1>
                              </Col>
                              <Col>
                                <button
                             
                                  onClick={() =>
                                    navigate(
                                      `/agentpropertydetails/propertyId/${itm._id}`,
                                      {
                                        state: {
                                          split:false,
                                          rooms: rooms,
                                          adultCount: adultCount,
                                          childCount: childCount,
                                          startingDate: startingDate,
                                          endingDate: endingDate,
                                          nights: nights,
                                          destination: destination,
                                          holidayType: holidayType,
                                          nationality: nationality,
                                          selectedDate: selectedDate,
                                          selectedDate2: selectedDate2,
                                          childAge:childAge,
                                          
                                        },
                                      }
                                    )
                                  }
                                >
                                  Select room
                                </button>
                              </Col>
                            </Row>
                            {/* <Row className='prop-btm'>
                      </Row> */}
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AgentSearchListScreen;
