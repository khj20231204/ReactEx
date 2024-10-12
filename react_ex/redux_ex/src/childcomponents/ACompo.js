
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';


const ACompo = () => {

   let reduxVar = useSelector((state) => { return state.stock})
   console.log(reduxVar[0].name)
   
   return (
      <div>
         <Table striped bordered hover variant="dark">
            <thead>
            <tr>
               <th>#</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
               <td>1</td>
               <td>Mark</td>
               <td>Otto</td>
               <td>@mdo</td>
            </tr>
            <tr>
               <td>2</td>
               <td>Jacob</td>
               <td>Thornton</td>
               <td>@fat</td>
            </tr>
            <tr>
               <td>3</td>
               <td colSpan={2}>Larry the Bird</td>
               <td>@twitter</td>
            </tr>
            </tbody>
         </Table>
      </div>
   );
};

export default ACompo;