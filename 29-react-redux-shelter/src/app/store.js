import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from '../features/budget/budgetSlice'
import petsReducer from '../features/pets/petsSlice'

export const store = configureStore({
    reducer: {
        budget: budgetReducer,
        pets: petsReducer
    }
})