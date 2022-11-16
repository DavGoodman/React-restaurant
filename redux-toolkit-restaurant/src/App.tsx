import React, { useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux"
import { Root } from "react-dom/client";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation, removeReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";
import { addCustomer,} from "./features/customerSlice";

function App() {

  const [reservationNameInput, setReservationNameInput] = useState("")
  const [newCustomerInput, setnewCustomerInput] = useState("")

  const reservations = useSelector((state: RootState) => state.reservations.value)
  const customers = useSelector((state: RootState) => state.customers.customers)


  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if(!reservationNameInput)return;

    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("")
  }

  const newCustomer = (name:string, index:number) => {
    dispatch(addCustomer({
      name: name,
      items: []
    }))
    
    dispatch(removeReservation(index)) 
  }

  // const deleteCustomer = (index) => {
  //   dispatch(removeCustomer(index))
  // }


  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard handleCustomer={newCustomer} name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input 
              value={reservationNameInput} 
              onChange={(e) => setReservationNameInput(e.target.value)}/>
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">

              {customers.map((customer, index) => {
                return <CustomerCard
                  name={customer.name}
                  items={customer.items}
                  index={index}/>
              })}

        </div>
      </div>
    </div>
  );
}
export default App;