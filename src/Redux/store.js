import { configureStore, getDefaultMiddleWare } from "@reduxjs/toolkit";
import { apiWorkers } from "./api/apiWorkers";


const store = configureStore({
    reducer:{
        [apiWorkers.reducerPath]:apiWorkers.reducer
    },
    middleware: getDefaultMiddleWare=> getDefaultMiddleWare().concat(apiWorkers.middleware)
})

export default store;