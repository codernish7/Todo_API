import { useEffect, useState } from "react"
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';

export default function List(props){
    
    const[searchItem,setSearchitem]=useState('')

    function handleSearch(e){
        setSearchitem(e.target.value)
        
    }

    function searching(){
        const searchitem= props.todo.filter((items)=>items.title.toLowerCase().includes(searchItem.toLowerCase())||items.description.toLowerCase().includes(searchItem.toLowerCase()))

        return searchitem
    }

    const searcharray=searching()
  
    return (
        <>

        <input  value={searchItem} onChange={handleSearch} placeholder="search by title or description"  style={{position:'relative',left:"85rem",top:"3rem"}}></input>
    
        <div className="tabledata">

            <table border="2px">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>{searcharray.map((items)=><tr key={items._id}>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>{<><input type='checkbox' checked={items.isComplete} onChange={()=>props.checker(items._id)}></input><label>completed</label></>}</td>
                                    <td> <button style={{position:'relative',left:'1rem'}} onClick={()=>props.delete(items._id)}>Delete</button>
                        
                                    <Link to={`/edit/${items._id}`}><button style={{position:'relative',left:'2rem'}} onClick={()=>props.editID(items._id)} >Edit</button></Link></td>
                                    </tr>)}
                                   
            </tbody>
            

        </table>
        </div>
        </>
    )
}