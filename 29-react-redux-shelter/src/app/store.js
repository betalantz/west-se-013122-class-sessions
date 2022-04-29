import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from '../features/budget/budgetSlice'
// import petsReducer from '../features/pets/petsSlice'
import { petsApi } from '../app/services/petsApi'

export const store = configureStore({
    reducer: {
        budget: budgetReducer,
        //  pets: petsReducer,
        [petsApi.reducerPath]: petsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(petsApi.middleware)
    }
})