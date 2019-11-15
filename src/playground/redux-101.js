import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
})

const setCount = ({ set }) => ({
    type: "SETCOUNT",
    set
});

const resetCount = () => ({
    type: "RESETCOUNT"
});

//Reducers
// 1. Reducers are pure functions (output only determined by input)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "SETCOUNT":
            return {
                count: action.set
            }
        case "RESETCOUNT":
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

//Increment
store.dispatch({
    type: "INCREMENT",
    incrementBy: 7
});

store.dispatch(incrementCount({ incrementBy: 5 }));

//Decrement
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());

store.dispatch(setCount({ set: 420 }));

//Reset
store.dispatch(resetCount());

