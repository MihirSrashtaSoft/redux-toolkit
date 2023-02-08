
//Redux Store
const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// const bindActionCreators = redux.bindActionCreators
// const applyMiddleware = redux.applyMiddleware

//logger middleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// Action = The only way your application interact with the store.
const CAKE_ORDRED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake(qty = 1) {
    return {
        type: 'CAKE_ORDERED',
        payload: qty
    }
}

function restockCake(qty = 1) {
    return {
        type: 'CAKE_RESTOCKED',
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: 'ICECREAM_ORDERED',
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: 'ICECREAM_RESTOCKED',
        payload: qty
    }
}

// this is one store, but below we are splitting into two for two actions.
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

// store for cakes
const initialCakeState = {
    numOfCakes: 10
}

//store for icecreams
const initialIceCreamState = {
    numOfIceCreams: 20
}

//reducers = specify how the app's state changes in response to actions sent to the store.–
// (previousState, action) => newState
// we will split the reducers for both parts - cakes and icecreams.
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'CAKE_ORDRERD':
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case 'CAKE_RESTOCKED':   
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes + action.payload
//             }
//         case 'ICECREAM_ORDERED':
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams - 1
//             }
//         case 'ICECREAM_RESTOCKED':   
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams + action.payload
//             }
//         default:
//             return state
//     }
// }

// Reducer for Cake
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case 'CAKE_ORDERED':
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case 'CAKE_RESTOCKED':
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

//Reducer for iceCream
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case 'ICECREAM_ORDERED':
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case 'ICECREAM_RESTOCKED':
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        // EXTRA REDUCERS
        case 'CAKE_ORDERED':
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

//combining reducers.
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//initialising store. which contains reducers as a parameter.
const store = createStore(rootReducer);

//getstate() gives the current state in the store
console.log('Initial state', store.getState());

//subscribe() allow app to subscribe the changes to the store.
const unsubscribe = store.subscribe(() => { console.log('Updated state', store.getState()) })

//dispatch method to update the state.
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))

//use helper function bindactioncreators instead seperately dispatching functions.
// const actions = bindActionCreators(
//     { orderCake, restockCake, orderIceCream, restockIceCream },
//     store.dispatch
// )
// actions.orderCake()
// actions.orderCake()
// actions.orderCake()
// actions.restockCake()
// actions.orderIceCream()
// actions.orderIceCream()
// actions.restockIceCream(2)

unsubscribe();
