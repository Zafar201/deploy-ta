import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addproperty, addProperty } from "../actions/generalAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function AddProperty() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [holidaytype, setHolidaytype] = useState("");
  const [rating, setRating] = useState("");
  const [restaurent, setRestaurent] = useState("");
  const [bars, setBars] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [tax, setTax] = useState("");
  const [discount, setDiscount] = useState("");
  const [cp, setCp] = useState("");
  const [terms, setTerms] = useState("");
  const [map, setMap] = useState("");
  const [description, setDescription] = useState("");


  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);

  const [meal1, setMeal1] = useState("");
  const [meal2, setMeal2] = useState("");
  const [meal3, setMeal3] = useState("");
  const [meal4, setMeal4] = useState("");
  const [meal5, setMeal5] = useState("");
  const [meal6, setMeal6] = useState("");
  const [meal7, setMeal7] = useState("");
  const [meal8, setMeal8] = useState("");
  const [child1, setChild1] = useState("");
  const [child2, setChild2] = useState("");
  const [child3, setChild3] = useState("");
  const [child4, setChild4] = useState("");
  const [child5, setChild5] = useState("");
  const [child6, setChild6] = useState("");
  const [child7, setChild7] = useState("");
  const [child8, setChild8] = useState("");

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [isClicked7, setIsClicked7] = useState(false);
  const [isClicked8, setIsClicked8] = useState(false);
  const [isClicked9, setIsClicked9] = useState(false);
  const [isClicked10, setIsClicked10] = useState(false);
  const [isClicked11, setIsClicked11] = useState(false);
  const [isClicked12, setIsClicked12] = useState(false);
  const [isClicked13, setIsClicked13] = useState(false);
  const [isClicked14, setIsClicked14] = useState(false);
  const [isClicked15, setIsClicked15] = useState(false);
  const [isClicked16, setIsClicked16] = useState(false);
  const [isClicked17, setIsClicked17] = useState(false);
  const [isClicked18, setIsClicked18] = useState(false);
  const [isClicked19, setIsClicked19] = useState(false);
  const [isClicked20, setIsClicked20] = useState(false);
  const [isClicked21, setIsClicked21] = useState(false);

  const [adualt1, setAdualt1] = useState('');
  const [adualt2, setAdualt2] = useState('');
  const [adualt3, setAdualt3] = useState('');
  const [adualt4, setAdualt4] = useState('');
  const [adualt5, setAdualt5] = useState('');
  const [adualt6, setAdualt6] = useState('');
  const [adualt7, setAdualt7] = useState('');
  const [adualt8, setAdualt8] = useState('');
  const [adualt9, setAdualt9] = useState('');
  const [adualt10, setAdualt10] = useState('');
  const [adualt11, setAdualt11] = useState('');
  const [adualt12, setAdualt12] = useState('');
  const [adualt13, setAdualt13] = useState('');
  const [adualt14, setAdualt14] = useState('');
  const [adualt15, setAdualt15] = useState('');
  const [adualt16, setAdualt16] = useState('');
  const [adualt17, setAdualt17] = useState('');
  const [adualt18, setAdualt18] = useState('');
  const [adualt19, setAdualt19] = useState('');
  const [adualt20, setAdualt20] = useState('');
  const [adualt21, setAdualt21] = useState('');

  const [transfer1, setTransfer1] = useState('');
  const [transfer2, setTransfer2] = useState('');
  const [transfer3, setTransfer3] = useState('');
  const [transfer4, setTransfer4] = useState('');
  const [transfer5, setTransfer5] = useState('');
  const [transfer6, setTransfer6] = useState('');
  const [transfer7, setTransfer7] = useState('');
  const [transfer8, setTransfer8] = useState('');
  const [transfer9, setTransfer9] = useState('');
  const [transfer10, setTransfer10] = useState('');
  const [transfer11, setTransfer11] = useState('');
  const [transfer12, setTransfer12] = useState('');
  const [transfer13, setTransfer13] = useState('');
  const [transfer14, setTransfer14] = useState('');
  const [transfer15, setTransfer15] = useState('');
  const [transfer16, setTransfer16] = useState('');
  const [transfer17, setTransfer17] = useState('');
  const [transfer18, setTransfer18] = useState('');
  const [transfer19, setTransfer19] = useState('');
  const [transfer20, setTransfer20] = useState('');
  const [transfer21, setTransfer21] = useState('');
  const [multiInput, setMultiInput] = useState([
    { desc: '', price: '' },
  ]);
  


  const dispatch = useDispatch();

  const propertyCreate = useSelector((state) => state.propertyCreate);
  const { loading, error, success } = propertyCreate;

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const inputList = [...multiInput];
    inputList[index][name] = value;
    setMultiInput(inputList); 
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setMultiInput([
      ...multiInput,
      { desc: '', price: '' },
     
    ]);
    var sample=[]
    if(multiInput){
        sample.push(multiInput)
    }
    console.log(sample,'sm');
  };

  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    const inputList = [...multiInput];
    inputList.splice(index, 1);
    setMultiInput(inputList);
  };


  
  const submitHandler = (e) => {
    e.preventDefault();
    const meals = [];

    if (meal1 && child1) {
      meals.push({
        type: "American Breakfast",
        price_a: meal1,
        price_c: child1,
      });
    }
    if (meal2 && child2) {
      meals.push({
        type: "Anything anytime anywhere Experience",
        price_a: meal2,
        price_c: child2,
      });
    }
    if (meal3 && child3) {
      meals.push({
        type: "Half Board dine around",
        price_a: meal3,
        price_c: child3,
      });
    }
    if (meal4 && child4) {
      meals.push({ type: "Full board plus", price_a: meal4, price_c: child4 });
    }
    if (meal5 && child5) {
      meals.push({
        type: "The Milaudhoo Gourmet plan",
        price_a: meal5,
        price_c: child5,
      });
    }
    if (meal6 && child6) {
      meals.push({
        type: "Bed and breakfast",
        price_a: meal6,
        price_c: child6,
      });
    }
    if (meal7 && child7) {
      meals.push({ type: "All inclusive", price_a: meal7, price_c: child7 });
    }
    if (meal8 && child8) {
      meals.push({ type: "Full board", price_a: meal8, price_c: child8 });
    }

    const transfer=[] 
    if(adualt1 && transfer1){
      transfer.push({ type: " Domestic flight+ speedboat transfers", price_a: adualt1, price_c: transfer1 })
    }
    if(adualt2 && transfer2){
      transfer.push({ type: "Seaplane", price_a: adualt2, price_c: transfer2 })
    }
    if(adualt3 && transfer3){
      transfer.push({ type: "Private chartered Manta Seaplane", price_a: adualt3, price_c: transfer3 })
    }
    if(adualt4 && transfer4){
      transfer.push({ type: "Private chartered Soneva Seaplane", price_a: adualt4, price_c: transfer4 })
    }
    if(adualt5 && transfer5){
      transfer.push({ type: "Speed boat transfer", price_a: adualt5, price_c: transfer5})
    }
    if(adualt6 && transfer6){
      transfer.push({ type: "Luxury speed boat transfer", price_a: adualt6, price_c: transfer6 })
    }
    if(adualt7 && transfer7){
      transfer.push({ type: "The Nautilus seaplane", price_a: adualt7, price_c: transfer7 })
    }
    if(adualt8 && transfer8){
      transfer.push({ type: " The Manta Seaplane charter", price_a: adualt8, price_c: transfer8 })
    }
    if(adualt9 && transfer9){
      transfer.push({ type: "Private seaplane charter", price_a: adualt9, price_c: transfer9 })
    }
    if(adualt10 && transfer10){
      transfer.push({ type: "The Manta seaplane", price_a: adualt10, price_c: transfer10 })
    }
    if(adualt11 && transfer11){
      transfer.push({ type: "Private Regular seaplane", price_a: adualt11, price_c: transfer11 })
    }
    if(adualt12 && transfer12){
      transfer.push({ type: "Private joali luxury seaplane", price_a: adualt12, price_c: transfer12 })
    }
    if(adualt13 && transfer13){
      transfer.push({ type: " Regular seaplane", price_a: adualt13, price_c: transfer13 })
    }
    if(adualt14 && transfer14){
      transfer.push({ type: "Private Regular seaplane", price_a: adualt14, price_c: transfer14 })
    }
    if(adualt15 && transfer15){
      transfer.push({ type: "Private Joali luxury seaplane", price_a: adualt15, price_c: transfer15 })
    }
    if(adualt16 && transfer16){
      transfer.push({ type: " Private seaplane charter (vip Seaplane)", price_a: adualt16, price_c:transfer16 })
    }
    if(adualt17 && transfer17){
      transfer.push({ type: "Private chartered TMA seaplane", price_a: adualt17, price_c: transfer17 })
    }
    if(adualt18 && transfer18){
      transfer.push({ type: " Private chartered Soneva Seaplane", price_a: adualt18, price_c: transfer18 })
    }
    if(adualt19 && transfer19){
      transfer.push({ type: "Private speed boat", price_a: adualt19, price_c: transfer19 })
    }
    if(adualt20 && transfer20){
      transfer.push({ type: "Shared luxury boat", price_a: adualt20, price_c: transfer20 })
    }
    if(adualt21 && transfer21){
      transfer.push({ type: "Private luxury Yacht", price_a: adualt21, price_c: transfer21 })
    }


    dispatch(
      addproperty(
        name,
        location,
        address,
        map,
        description,
        rating,
        restaurent,
        bars,
        holidaytype,
        checkin,
        checkout,
        tax,
        discount,
        // sample,
        multiInput,
        cp,
        terms,
        transfer,
        meals
      )
    );
    navigate("/dashboard");
    // console.log(name,location,address,map,description,rating,restaurent,bars,holidaytype,checkin,checkout,tax,discount,cp,terms);
  };

  
 
  return (
    <div>
      <div className="admin-nav">
        <Container>
          <Row>
            <Col className="admin-logo">
              <Link to="/">
                <img src="../assets/image/log2.png" alt="" />
              </Link>
            </Col>
            <Col>
              <img
                style={{ float: "right" }}
                src="../assets/image/profile.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="addproperty">
        <Container>
          <Row>
            <h1>Add Property</h1>
          </Row>
          {/* {loading && <LoadingBox></LoadingBox>} */}
          {error && <MessageBox variant="danger">{error}</MessageBox>}

          <form onSubmit={submitHandler}>
            <Row>
              <Col>
                <h2>Name of property</h2>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col>
                <h2>Address</h2>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>

              <Col>
                <h2>Map</h2>
                <input
                  type="text"
                  id="map"
                  placeholder="Enter map"
                  required
                  onChange={(e) => setMap(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <h2>location</h2>
                <select
                  name="location"
                  id="location"
                  required
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="not selected">Please Select</option>
                  <option value="kerala">kerala</option>
                  <option value="maldives">maldives</option>
                  <option value="jammu">jammu</option>
                </select>
              </Col>

              <Col md={4}>
                <h2>Holiday type</h2>
                <select
                  name="holiday"
                  id="holiday"
                  required
                  onChange={(e) => setHolidaytype(e.target.value)}
                >
                  <option value="not selected">Please Select</option>
                  <option value="Standard">Standard</option>
                  <option value="Family">Family</option>
                  <option value="Honeymoon">Honeymoon</option>
                  <option value="Surfing">Surfing</option>
                  <option value="Diving">Diving</option>
                </select>
              </Col>

              <Col md={4}>
                <h2>Rating</h2>
                <select
                  name="rating"
                  id="rating"
                  required
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="not selected">Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <h2>Count of restaurents</h2>
                <input
                  type="number"
                  id="restaurents"
                  placeholder="Enter count"
                  required
                  onChange={(e) => setRestaurent(e.target.value)}
                />
              </Col>

              <Col md={4}>
                <h2>Count of bars</h2>
                <input
                  type="number"
                  id="bars"
                  placeholder="Enter count"
                  required
                  onChange={(e) => setBars(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <h2>Checking time</h2>
                <input
                  type="time"
                  id="Checking"
                  placeholder="HH:MM"
                  required
                  onChange={(e) => setCheckin(e.target.value)}
                />
              </Col>
              <Col md={4}>
                <h2>Checkout time</h2>
                <input
                  type="time"
                  id="Checkout"
                  placeholder="Enter time"
                  required
                  onChange={(e) => setCheckout(e.target.value)}
                />
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <h2>Tax</h2>
                <input
                  type="number"
                  id="Checking"
                  placeholder="Enter percentage"
                  required
                  onChange={(e) => setTax(e.target.value)}
                />
              </Col>
              <Col md={4}>
                <h2>Discount</h2>
                <input
                  type="number"
                  id="Checkout"
                  placeholder="Enter percentage"
                  required
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </Col>
              <Col md={4}>
                <h2>Cancellation policy</h2>
                <input
                  type="number"
                  id="cancellation"
                  placeholder="Enter percentage"
                  required
                  onChange={(e) => setCp(e.target.value)}
                />
              </Col>
            </Row>

            <div className="addprop-extracharges">
            <h2>Extra charges</h2>
            <Row>
              <Col md={3}>
                <h2>Description</h2>
              </Col>
              <Col md={3}>
                 <h2>Price</h2>
              </Col>
            </Row>
            {multiInput.map((x, i) => (
              <Row>   
                <Col md={3}>
                 
                  <input
                    type="text"
                    id="extra"
                    name='desc'
                    placeholder="Enter"
                    onChange={(e) => handleInputChange(e,i)}
                    // onChange={(e) => setExtra1(e.target.value)}
                  />
                </Col>
                <Col md={3}>
                  
                  <input
                    type="number"
                    id="extra1"
                    name='price'
                    placeholder="Enter "
                    onChange={(e) => handleInputChange(e,i)}
                    // onChange={(e) => setPrice1(e.target.value)}
                  />
                </Col>

                <Col>
                {i > 0 && (
                  <>
                  {/* <h2></h2> */}
                  <Button
                    className="remove-button"
                    variant='outlined'
                    color='secondary'
                    onClick={(e) => handleRemoveClick(e, i)}
                  >
                    Delete
                  </Button>
                  </>
                )}</Col>

              
              </Row>

            ))}
              <Col md={3}>
                  <Button onClick={handleAddClick}>Add</Button>
                </Col>
          
            </div>

         

            <div style={{ display: "flex",justifyContent:'space-between' }}>
                
                 {/* transfer */}

              <Row style={{ flexDirection: "column", width: "44%" }}>
                <h5>Transfer plan</h5>


                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Domestic flight+ speedboat transfers</h2>
                  <input
                    type="checkbox"
                    checked={isClicked1}
                    onChange={()=>setIsClicked1(!isClicked1)}
                    name="Domestic flight+ speedboat transfers"
                    id="1"
                  />
                </Col>
                {isClicked1 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt1(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer1(e.target.value)}
                      name=""
                      id=""
                    />
                  </Col>
                )}



                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Seaplane</h2>
                  <input
                    type="checkbox"
                    checked={isClicked2}
                    onChange={()=>setIsClicked2(!isClicked2)}
                    name=""
                    id="2"
                  />
                </Col>
                {isClicked2 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt2(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer2(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2>
                    {" "}
                    Private chartered Manta Seaplane
                  </h2>
                  <input
                    type="checkbox"
                    checked={isClicked3}
                    onChange={()=>setIsClicked3(!isClicked3)}
                    name=""
                    id="3"
                  />
                </Col>
                {isClicked3 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt3(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer3(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private chartered Soneva Seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked4}
                    onChange={()=>setIsClicked4(!isClicked4)}
                    name=""
                    id="4"
                  />
                </Col>
                {isClicked4 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt4(e.target.value)}
                    />
                    <input
                     type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer4(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Speed boat transfer </h2>
                  <input
                    type="checkbox"
                    checked={isClicked5}
                    onChange={()=>setIsClicked5(!isClicked5)}
                    name=""
                    id="5"
                  />
                </Col>
                {isClicked5 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt5(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer5(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Luxury speed boat transfer </h2>
                  <input
                    type="checkbox"
                    checked={isClicked6}
                    onChange={()=>setIsClicked6(!isClicked6)}
                    name=""
                    id="6"
                  />
                </Col>
                {isClicked6 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt6(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer6(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> The Nautilus seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked7}
                    onChange={()=>setIsClicked7(!isClicked7)}
                    name=""
                    id="7"
                  />
                </Col>
                {isClicked7 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt7(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer7(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> The Manta Seaplane charter </h2>
                  <input
                    type="checkbox"
                    checked={isClicked8}
                    onChange={()=>setIsClicked8(!isClicked8)}
                    name=""
                    id="8"
                  />
                </Col>
                {isClicked8 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt8(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer8(e.target.value)}
                    />
                  </Col>
                )}


              <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private seaplane charter </h2>
                  <input
                    type="checkbox"
                    checked={isClicked9}
                    onChange={()=>setIsClicked9(!isClicked9)}
                    name=""
                    id="9"
                  />
                </Col>
                {isClicked9 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt9(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer9(e.target.value)}
                    />
                  </Col>
                )}


                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> The Manta seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked10}
                    onChange={()=>setIsClicked10(!isClicked10)}
                    name=""
                    id="10"
                  />
                </Col>
                {isClicked10 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt10(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer10(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private Regular seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked11}
                    onChange={()=>setIsClicked11(!isClicked11)}
                    name=""
                    id="11"
                  />
                </Col>
                {isClicked11 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt11(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer11(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private joali luxury seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked12}
                    onChange={()=>setIsClicked12(!isClicked12)}
                    name=""
                    id="12"
                  />
                </Col>
                {isClicked12 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt12(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer12(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Regular seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked13}
                    onChange={()=>setIsClicked13(!isClicked13)}
                    name=""
                    id="13"
                  />
                </Col>
                {isClicked13 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt13(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer13(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private Regular seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked14}
                    onChange={()=>setIsClicked14(!isClicked14)}
                    name=""
                    id="14"
                  />
                </Col>
                {isClicked14 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt14(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer14(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private Joali luxury seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked15}
                    onChange={()=>setIsClicked15(!isClicked15)}
                    name=""
                    id=""
                  />
                </Col>
                {isClicked15 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt15(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer15(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private seaplane charter (vip Seaplane) </h2>
                  <input
                    type="checkbox"
                    checked={isClicked16}
                    onChange={()=>setIsClicked16(!isClicked16)}
                    name=""
                    id=""
                  />
                </Col>
                {isClicked16 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt16(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer16(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private chartered TMA seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked17}
                    onChange={()=>setIsClicked17(!isClicked17)}
                    name=""
                    id=""
                  />
                </Col>
                {isClicked17 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt17(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer17(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private chartered Soneva Seaplane </h2>
                  <input
                    type="checkbox"
                    checked={isClicked18}
                    onChange={()=>setIsClicked18(!isClicked18)}
                    name=""
                    id=""
                  />
                </Col>
                {isClicked18 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt18(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer18(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private speed boat </h2>
                  <input
                    type="checkbox"
                    checked={isClicked19}
                    onChange={()=>setIsClicked19(!isClicked19)}
                    name=""
                    id=""
                  />
                </Col>
                {isClicked19 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt19(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer19(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Shared luxury boat </h2>
                  <input
                    type="checkbox"
                    checked={isClicked20}
                    onChange={()=>setIsClicked20(!isClicked20)}
                    name=""
                    id=""
                  />
                </Col>
                {isClicked20 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt20(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer20(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Private luxury Yacht </h2>
                  <input
                    type="checkbox"
                    checked={isClicked21}
                    onChange={()=>setIsClicked21(!isClicked21)}
                    name=""
                    id=""
                  />
                </Col>
                {isClicked21 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setAdualt21(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setTransfer21(e.target.value)}
                    />
                  </Col>
                )}
              </Row>

                     {/* Meals */}
              <Row style={{ flexDirection: "column", width: "43%",height:'fit-content' }}>
                <h5>Meal plan</h5>
                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> American Breakfast</h2>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={()=>setIsChecked(!isChecked)}
                    name=""
                    id=""
                  />
                </Col>
                {isChecked && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setMeal1(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setChild1(e.target.value)}
                      name=""
                      id=""
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Anything anytime anywhere Experience</h2>
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={()=>setIsChecked2(!isChecked2)}
                    name=""
                    id=""
                  />
                </Col>
                {isChecked2 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setMeal2(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setChild2(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Half Board dine around</h2>
                  <input
                    type="checkbox"
                    checked={isChecked3}
                    onChange={()=>setIsChecked3(!isChecked3)}
                    name=""
                    id=""
                  />
                </Col>
                {isChecked3 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setMeal3(e.target.value)}
                    />
                    <input
                     type="number"
                      placeholder="Child price"
                      onChange={(e) => setChild3(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Full board plus </h2>
                  <input
                    type="checkbox"
                    checked={isChecked4}
                    onChange={()=>setIsChecked4(!isChecked4)}
                    name=""
                    id=""
                  />
                </Col>
                {isChecked4 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setMeal4(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Child price"
                      onChange={(e) => setChild4(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> The Milaudhoo Gourmet plan</h2>
                  <input
                    type="checkbox"
                    checked={isChecked5}
                    onChange={()=>setIsChecked5(!isChecked5)}
                    name=""
                    id=""
                  />
                </Col>
                {isChecked5 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setMeal5(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setChild5(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Bed and breakfast </h2>
                  <input
                    type="checkbox"
                    checked={isChecked6}
                    onChange={()=>setIsChecked6(!isChecked6)}
                    name=""
                    id=""
                  />
                </Col>
                {isChecked6 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setMeal6(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Child price"
                      onChange={(e) => setChild6(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> All inclusive</h2>
                  <input
                    type="checkbox"
                    checked={isChecked7}
                    onChange={()=>setIsChecked7(!isChecked7)}
                    name=""
                    id=""
                  />
                </Col>
                {isChecked7 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setMeal7(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setChild7(e.target.value)}
                    />
                  </Col>
                )}

                <Col style={{ display: "flex" }} className="addprop-checkbox">
                  <h2> Full board</h2>
                  <input
                    type="checkbox"
                    checked={isChecked8}
                    onChange={()=>setIsChecked8(!isChecked8)}
                    name=""
                    id=""
                  />
                </Col>
                {isChecked8 && (
                  <Col className="addprop-checkbox-input">
                    <input
                      type="number"
                      placeholder="Adualt price"
                      onChange={(e) => setMeal8(e.target.value)}
                    />
                    <input
                       type="number"
                      placeholder="Child price"
                      onChange={(e) => setChild8(e.target.value)}
                    />
                  </Col>
                )}
              </Row>


            </div>

            <Row style={{ paddingTop: "30px" }}>
              <h2>
                Description <span>(100-140 words)</span>
              </h2>
              <textarea
                name="description"
                id="description"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
                cols="25"
                rows="10"
              ></textarea>
            </Row>

            <Row style={{ paddingTop: "30px" }}>
              <h2>Terms & Conditions</h2>
              <textarea
                name="terms"
                id="terms"
                placeholder="Enter terms"
                onChange={(e) => setTerms(e.target.value)}
                cols="25"
                rows="10"
              ></textarea>
            </Row>

            <Row className="addproperty-4">
              <button>Submit</button>
            </Row>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default AddProperty;
