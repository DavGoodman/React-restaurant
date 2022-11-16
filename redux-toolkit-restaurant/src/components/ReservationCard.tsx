import React from "react"
import { useDispatch } from "react-redux"
import { removeReservation } from "../features/reservationSlice"

interface ReservationCardTypes {
    name: string
    index: number
    handleCustomer: Function
}

export default function ReservationCard({name, index, handleCustomer}: ReservationCardTypes){

    const dispatch = useDispatch()

    const remove = (e:any) => {
        dispatch(removeReservation(index))
        
    }

    return (
    <div className="reservation-card-container">{name}
    <div>
        <button className="reservation-btn" onClick={()=> {
            dispatch(removeReservation(index))
        }}>X
        </button>
        <button className="reservation-btn"
        onClick={()=>handleCustomer(name, index)}>
            Add
        </button>
        
    </div> 
    
    </div>)
}