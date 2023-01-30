import React from "react";
import { Table } from "react-bootstrap";

function Tables({rooms}) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Room type</th>
            <th>Starting from</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.name}</td>
              <td>{room.price.first}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
