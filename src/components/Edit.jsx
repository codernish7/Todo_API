
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Edit(props){
    const[todo,setTodo]=useState({title:'',description:''})
    
    const navigate=useNavigate()

    const params=useParams()
    const{ID}=params
    
    useEffect(()=>{
        fetch(`https://freeapi-app-production-5e31.up.railway.app/api/v1/todos/${ID}`,{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((res)=>setTodo({title:res.data.title,description:res.data.description}))
    },[])
    
    function handlechange(e){
        const property=e.target.name;
        setTodo({...todo,[property]:e.target.value})
    }
    console.log(todo)
   
    function handlesubmit(){
        props.edited(todo)
        setTodo({title:'',description:''})
        navigate('/list')
    }

    return (
        <div className="form-container">
          <h2>Edit a Task</h2>
          <form>
            <div className="input-container">
              <label htmlFor="title">Title</label>
              <input type="text"  name='title' placeholder="title" onChange={handlechange} value={todo.title}/>
            </div>
            <div className="input-container">
              <label htmlFor="description">Description</label>
              <textarea placeholder="description" name='description' onChange={handlechange} value={todo.description}></textarea>
            </div>
            <button onClick={handlesubmit}>Submit</button>
          </form>
        </div>
      );
      
}