const redux = require('redux');

//using immer 
const produce = require('immer').produce

const initialState = {
    name: 'Mihir',
    address: {
        street: '52 street',
        city: 'Mehsana',
        state: 'GJ'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STREET_UPDATED':
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            // }
            return produce( state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
})

store.dispatch(updateStreet('54 street'))
unsubscribe()