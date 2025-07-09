import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/cartSlice'

export const Product = ({post}) => {
  const cart=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const adds=()=>{dispatch(add(post))
    toast.success("Added")
  }
  const removes=()=>{dispatch(remove(post))

    toast.success("Removed")
  }
  return (
    <div className='card'>
        <p id='title'>{post.title.substring(0,20)}</p>
        <img src={post.image} id='img'></img>
        <p id='desc'>{post.description.substring(0,80)}...</p>
        <div id='bottom'>

        <p id='price'>Rs. {post.price}</p>
        {
          cart.some((p)=>p.id==post.id)?<button onClick={removes} className='button'>Remove Item</button>:<button onClick={adds} className='button'>Add Item</button>
        }
        </div>
    </div>
  )
}
