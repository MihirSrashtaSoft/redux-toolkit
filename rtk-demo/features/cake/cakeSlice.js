const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState, //in es6 we can write only initialState if key = value
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state = initialState, action) => {
            state.numOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions