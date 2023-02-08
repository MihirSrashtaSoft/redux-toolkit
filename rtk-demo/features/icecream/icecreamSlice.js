const createSlice = require('@reduxjs/toolkit').createSlice
const { cakeActions } = require('../cake/cakeSlice')

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
            cakeActions.ordered,
            (state) => {
                state.numOfIcecreams--
            }
        )
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions