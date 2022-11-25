import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiWorkers = createApi({
    reducerPath:'workersApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    tagTypes:['Workers'],
    endpoints: build =>({
        getWorkers: build.query({
            query:(limit='')=>`/workers?${limit && `_limit=${limit}`}`,
        providesTags:['Workers']
        }) ,
         addWorker: build.mutation({
            query:(body)=>({
                url:'/workers',
                method:"POST",
                body
            }),
            invalidatesTags:['Workers']

        }),
        deleteWorker: build.mutation({
            query:(id)=>({
                url:`/workers/${id}`,
                method:"DELETE",
                
            }),
            invalidatesTags:['Workers']

        })
    })
})

export const {useGetWorkersQuery, useAddWorkerMutation, useDeleteWorkerMutation} = apiWorkers;