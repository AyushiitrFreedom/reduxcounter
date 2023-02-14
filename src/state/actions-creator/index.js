

export const plusNumber = (amount) =>{
    return (dispatch)=>{
        dispatch(
            {
                type : 'plus',
                payload : amount
            }
        )
    }
}

export const minusNumber = (amount) =>{
    return (dispatch)=>{
        dispatch(
            {
                type : 'minus',
                payload : amount
            }
        )
    }
}

