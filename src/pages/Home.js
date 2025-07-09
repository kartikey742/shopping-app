import React, { useEffect, useState } from 'react'
import { Product } from '../components/Product'
import { Spinner } from '../components/Spinner'


export const Home = () => {
    const[loading,setLoading]=useState(false)
    const[posts,setPosts]=useState([])
    async function fetchData() {
        setLoading(true)
    const response=await fetch("https://fakestoreapi.com/products")    
    const data=await response.json()
    setPosts(data)
    setLoading(false)
    }
    useEffect(()=>{fetchData()},[])
   
  return (
    <div id='cards'>
        {
            loading?<Spinner></Spinner>:posts.map((post)=><Product post={post}></Product>)
        }
    </div>
  )
}
