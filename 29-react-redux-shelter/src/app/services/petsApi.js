import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const petsApi = createApi({
    reducerPath: 'petsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Pet'],
    endpoints: (builder) => ({
        fetchPets: builder.query({
            query(type){ // 'type' is query parameter received from useFetchPetsQuery(type) call on <PetBrowser />
                return `/pets?type_like=${type}`
            },
            // If any mutation is executed that invalidate`s any of these tags, this query will re-run to be always up-to-date.
            // map adds ids to individual items to add granularity
            providesTags: (result, error, arg) => 
                result
                  ? [...result.map(({id}) => ({type: 'Pet', id})), 'Pet'] // destructures id from arg (in this case, each pet object)
                  : ['Pet']
        }),
        updatePet: builder.mutation({
            query: ({id, ...patch}) => ({
                url: `/pets/${id}`,
                method: "PATCH",
                body: patch
            }),
            // invalidatesTags: ['Pet'], // Invalidates all queries with the same tag
            invalidatesTags: (result, error, arg) => [{type: 'Pet', id: arg.id}]
            // invalidate by id
            // Invalidates all queries that subscribe to this Pet `id` only.
        })
    })
})

export const { useFetchPetsQuery, useUpdatePetMutation } = petsApi