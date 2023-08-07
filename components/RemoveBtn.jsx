"use client"
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import {useRouter} from "next/navigation"

const RemoveBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async () => {
   const confirmed = confirm("Are you sure you want to remove");
    if(confirmed){
     const res =  await fetch(`${process.env.API_URL}/api/topics?id=${id}`
      ,{method: 'DELETE'});
      if(res.ok){
        router.refresh()
      }
      
    }
  }
  return (
    <button className="text-red-400" onClick={removeTopic}>
        <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveBtn