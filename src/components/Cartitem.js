import React from 'react'
import toast from 'react-hot-toast'
import { MdDelete } from "react-icons/md";

import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/cartSlice'
export const Cartitem = ({item}) => {
  const dispatch=useDispatch()
  function removeCart(){
   dispatch(remove(item))

      toast.success("Removed")
    }
  
  return (
    <div id='cartbox'>
        
      <div><img src={item.image} id='img'></img></div>
      <div id='right'>
      <p id='title'>{item.title}</p>
      <p id='desc'>{item.description.substring(0,120)}... </p>

      <div id='bots' >
      <p id='price'>Rs. {item.price}</p>
      <MdDelete onClick={removeCart} id='icon'></MdDelete>
      </div>
      </div>
    </div>
  ) 
}
