import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const petsApi = createApi({
    reducerPath: 'petsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001'}),
    endpoints: (builder) => ({
        fetchPets: builder.query({
            query(){
                return `/pets`
            }
        })
    })
})

export const { useFetchPetsQuery} = petsApi