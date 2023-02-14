const reducer = (state = 0 , action) => { // state = 0 sets the initial value of amount
    if (action.type  === 'plus') {
        return state + action.payload
    }

    if (action.type  === 'minus') {
        return state - action.payload
    }

    else {
        return state
    }
}

export default reducer