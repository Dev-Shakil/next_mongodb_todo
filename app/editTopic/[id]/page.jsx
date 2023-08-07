import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
  try{
    const res = await fetch(`${process.env.API_URL}/api/topics/${id}`,{
      cache: "no-store",
    });

    if(!res.ok){
      throw new Error("Failed to fetch Single Topic");
    }
    return res.json();
  }catch(e){
    console.log(e)
  }
}

const EditTopic = async ({params}) => {
  const {id} = params;
  const {topic} = await getTopicById(id);

  const {title, description} = topic;
  
  return (
    <EditTopicForm id={id} title={title} description={description}  />
  )
}

export default EditTopic