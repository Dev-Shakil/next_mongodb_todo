"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const EditTopicForm = ({id,title,description}) => {
  console.log(title, description)
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try{
     const res = await fetch(`${process.env.API_URL}/api/topics/${id}`,{
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTitle,newDescription})
      });
      if(res.ok) {
        
        router.push("/");
        router.refresh();
      }else{
        throw new Error("Failed to create a topic");
      }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3"> 
        <input
            onChange={(e)=> setNewTitle(e.target.value)}
            value={newTitle}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Title"

        />
        <input
            onChange={(e)=> setNewDescription(e.target.value)}
            value={newDescription}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Topic Description"
        />
        <button type="submit" className="bg-green-600 text-white font-bold py-3 px-6 w-fit">Update Topic</button>
    </form>
  )
}

export default EditTopicForm