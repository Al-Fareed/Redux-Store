import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useState } from 'react';
// import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'
const Shop = () => {
    const [text,setText]=useState();
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch)
    
  return (
    <div>
        <input type="text" 
            text={text} 
            value={text}
            onChange={(e) => {setText(parseInt(e.target.value))}}
            
            />
        <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(text);setText('')}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(text);setText('')}}>+</button>
    </div>
  )
}

export default Shop
