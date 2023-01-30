import React from "react";
import { Row } from "react-bootstrap";
export function Review({ name,num, price, nights,rooms,i,total ,splitroom,split}) {
  // console.log(price)
  return (
    <>
      {" "}
      <Row className="room-type">
        <h2>Group{num}</h2>
        <h3>
          {name} {split && '+'} {split && splitroom}
          <span>Sup</span>
        </h3>
      </Row>
      <Row>
        {price > 0 ? (
          <table>
            <thead>
              <tr>
                <td>Item</td>
                <td className="text-right">Price</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Accomodation <br />
                  for {nights} nights
                </td>
                <td className="text-right">123</td>
              </tr>
              <tr>
                <td>
                  Transfer <br />
                  for {total ? total : ''} pax
                </td>
                <td className="text-right"></td>
              </tr>
              <tr>
                <td>Others</td>
                <td className="text-right"></td>
              </tr>
              {/* <tr>
                <td>Fixed tax</td>
                <td className="text-right"></td>
              </tr> */}
            </tbody>
            <tfoot>
              {/* <tr>
                <td>Fixed tax</td>
                <td className="text-right">123</td>
              </tr> */}
              <tr>
                <td>Subtotal</td>
                <td className="text-right">123</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td className="text-right">123</td>
              </tr>
              <tr>
                <td>Nett Price</td>
                <td className="text-right">{price}</td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <p>Make a selection</p>
        )}
      </Row>
    </>
  );
}








{/* <Row className="room-type">
                         <h2>
                           Group4
                         </h2>
                         <h3>
                         {name4}
                          <span>Sup</span>
                         </h3>
                      </Row>
                      <Row>
                        {price4 > 0 ?(
                          <table>
                          <thead>
                            <tr>
                              <td>Item</td>
                              <td className="text-right">Price</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Accomodation <br />for {nights} nights</td>
                              <td className="text-right">123</td>
                            </tr>
                            <tr>
                              <td>Transfer <br />for {Number(rooms[3].adult)+Number(rooms[0].child)} pax</td>
                              <td className="text-right"></td>
                            </tr>
                            <tr>
                              <td>Others</td>
                              <td className="text-right"></td>
                            </tr>
                            <tr>
                              <td>Fixed tax</td>
                              <td className="text-right"></td>
                            </tr>
                          </tbody>
                          <tfoot>
                          <tr>
                              <td>Fixed tax</td>
                              <td className="text-right">123</td>
                            </tr>
                            <tr>
                              <td>Subtotal</td>
                              <td className="text-right">123</td>
                            </tr>
                            <tr>
                              <td>Discount</td>
                              <td className="text-right">123</td>
                            </tr>
                            <tr>
                              <td>Nett Price</td>
                              <td className="text-right">{price4 > 0 ? price4 : 'Make a selection'}</td>
                            </tr>
                          </tfoot>
                        </table>
                        ):(<p>Make a selection</p>)}
                        
                        </Row> */}