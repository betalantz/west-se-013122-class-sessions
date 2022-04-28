import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 100
}

const budgetSlice = createSlice({
    name: 'budget',
    // ES6 shorthand where key/value are same name 
    initialState,
    reducers: {
        // Immer lib take state mutations and does state copying instead
        // toolkit creates and actionCreate to mate the reducer fn
        addTen(state) {
            state.value += 10
        },
        subtractAmount(state, action){
            state.value -= action.payload
        }
    }
})

export const { addTen, subtractAmount } = budgetSlice.actions
export default budgetSlice.reducer