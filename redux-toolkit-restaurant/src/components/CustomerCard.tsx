import React from "react"
import { useDispatch } from "react-redux"
import {addItem, removeCustomer} from "../features/customerSlice"

interface CustomerCardTypes{
    name: string
    items: string[]
    index: number
}

export default function CustomerCard({name, items, index}: CustomerCardTypes){
  const dispatch = useDispatch()

  const [newCustomerInput, setnewCustomerInput] = React.useState("")

  const handleChange = (e: any) => {
    setnewCustomerInput(e.target.value)
  }

  const setTable = (index: number) => {
    dispatch(addItem({itemName: newCustomerInput, customerId: index}))
  }

  


    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
            <div className="customer-food">
                {items.map(item => <div className="customer-food-item">{item}</div>)}
                </div>
              <div className="customer-food-input-container">
                <input
                value={newCustomerInput} 
                onChange={handleChange}
                />
                <button onClick={() => setTable(index)}>
                  Add</button>
              </div>
              <button className="customer-exit"
              onClick={()=> dispatch(removeCustomer(index))}>x</button>
            </div>
          </div>
    )
}

