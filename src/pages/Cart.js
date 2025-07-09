import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Cartitem } from '../components/Cartitem'

export const Cart = () => {
  const cart=useSelector((state)=>state.cart)
  const[amount,setAmount]=useState(0)
  useEffect(()=>{setAmount( cart.reduce((acc,curr)=>acc+curr.price,0))},[cart])
  return (
    <div>{
      cart.length>0?(
        <div id='cartpage'>

        <div id='carts' >{cart.map((item)=><Cartitem item={item}></Cartitem>)}</div>
        <div id='rhtpg'>

        <div>
          <div id='yrcrt'>Your Cart</div>
          <div id='smry'>SUMMARY</div>
        </div>
         <div style={{fontWeight:'bold'}}>Total Items: {cart.length}</div>
          <div style={{fontWeight:'bold'}}>Total Amount: Rs. {amount}</div>
          <button id='btn'>Check Out</button>
        </div>
        
        </div>
      )
      :
      (<div><h1>No Items</h1><Link to='/'><button>Shop Now</button></Link></div>)
    }
    </div>
  )
}
