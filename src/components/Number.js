import React from 'react'
import { useSelector } from 'react-redux'

function Number() {
  const amount = useSelector(state => state.amount) // this state.amount refers to state/action-creator/index.js vala amount
  return (
    <div>
        <h1>{amount}</h1>
    </div>
  )
}

export default Number