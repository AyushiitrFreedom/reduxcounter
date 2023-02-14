import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

function Change() {
  const dispatch = useDispatch();
  const {plusNumber,minusNumber} =  bindActionCreators(actionCreators,dispatch)
  return (
    <>
    <button type="button" className="btn btn-primary mx-5" onClick={()=>{plusNumber(100)}}>+</button>
    <button type="button" className="btn btn-primary" onClick={()=>{minusNumber(100)}}>-</button>

    </>
  )
}

export default Change