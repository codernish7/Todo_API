import { useState } from "react"

export default function Create(props){
    const[todo,setTodo]=useState({title:'',description:''})

    

    function handlechange(e){
        const property=e.target.name;
        setTodo({...todo,[property]:e.target.value})
    }

    function handlesubmit(){
        fetch('https://freeapi-app-production-5e31.up.railway.app/api/v1/todos',{
            method:'post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(todo)
        })
        setTodo({title:'',description:''})
        setTimeout(()=>{
            props.todo()
        },1000)
    }

    return(
        <div className="Form2">
            <h1>CREATE</h1>
            <label>Title</label>
            <input type='text' placeholder="title" name='title' onChange={handlechange} value={todo.title}></input>
            <br></br>
            <label>Description</label>
            <input type='text' placeholder="description" name='description' onChange={handlechange} value={todo.description}></input>
            <br></br>
            <button className='submit'onClick={handlesubmit}>submit</button>
        </div>
    )
}