// DUCKS pattern

import { createSlice } from '@reduxjs/toolkit'
import { pets } from '../../data/pets'

const petsSlice = createSlice({
    name: "pets",
    initialState: pets,
    reducers: {
        adoptPet(state, action){
            return state.map(pet => pet.id == action.payload ? {...pet, isAdopted: true} : pet)
        }
    }
})

export const { adoptPet } = petsSlice.actions
export default petsSlice.reducer