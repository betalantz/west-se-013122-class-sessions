// DUCKS pattern

import { createSlice } from '@reduxjs/toolkit'
import { pets } from '../../data/pets'

const petsSlice = createSlice({
    name: "pets",
    initialState: pets,
    reducers: {

    }
})

export default petsSlice.reducer