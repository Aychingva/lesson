import React, { useEffect } from 'react'
import { singleblog } from '../../../services/blogsall'

function Singleblog() {

    useEffect(()=>{
        (async()=>{
            try{
                const data=await singleblog(id)
            } catch(error){
                console.log("error",error)
            }
        }) ()
    },[id])
  return (
    <div>singleblog</div>
  )
}

export default Singleblog