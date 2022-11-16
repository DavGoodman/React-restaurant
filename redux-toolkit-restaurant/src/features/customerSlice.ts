import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface ICustomer {
    name:string
    items:string[] 
}

interface customerState {
    customers: ICustomer[]
}

const initialState: customerState = {
    customers: [{
        name: "Charles",
        items: ["chicken", "pie"],
    },
]
}

const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<ICustomer>) => {
            console.log("customerFunc")
            state.customers.push(action.payload);
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            state.customers.splice(action.payload, 1)
        },
        addItem: (state, action: PayloadAction<{itemName: string, customerId: number}>) => {
            const { customerId, itemName } = action.payload
            state.customers[customerId].items.push(itemName)
        }
    },

})


export const { addCustomer, addItem, removeCustomer } = customerSlice.actions

export default customerSlice.reducer