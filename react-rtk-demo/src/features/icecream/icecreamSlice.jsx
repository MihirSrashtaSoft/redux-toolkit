import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from '../cake/cakeSlice';


const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState, //in es6 we can write only initialState if key = value
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state = initialState, action) => {
            state.numOfIcecreams += action.payload
        },
    },
    // EXTRA REDUCERS
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(
            cakeOrdered,
            (state) => {
                state.numOfIcecreams--
            }
        )
    }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions