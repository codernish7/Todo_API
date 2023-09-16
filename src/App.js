import logo from './logo.svg';
import './App.css';
import List from './components/Apilist';
import Create from './components/Create';
import { useEffect,useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import axios from 'axios';
import TimeAgo from 'react-timeago';
import Edit from './components/Edit';
import Nav from './components/Navbar';
import Home from './components/Home';


function App() {

  // function axioscall(){
  //   axios.get('https://freeapi-app-production-5e31.up.railway.app/api/v1/todos/user?ID=12345')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });
  // }

  // function axiospost(){
  //   axios.post('/user', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  const[error,setError]=useState(null)
  const[list,setList]=useState([])
  const[id,setId]=useState(0)       //for edit/update
  useEffect(()=>{
      getTodo()
      // axioscall()
      // axiospost()
  },[])

  function getTodo(){
      fetch('https://freeapi-app-production-5e31.up.railway.app/api/v1/todos',{
      method:"get",
      headers:{"Content-Type": "application/json"}})
      .then((res)=>res.json())
      .then((res)=>setList(res.data))
      .catch((err)=>setError(err))
  }
  

  function handleDelete(ID){
    fetch(`https://freeapi-app-production-5e31.up.railway.app/api/v1/todos/${ID}`,{
      method:"delete",
      headers:{"Content-Type":"application/json"}
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.success){
        getTodo()
      }
      else{
        alert('waiting')
      }
    })
  }

  function handleEdit(updated){
    fetch(`https://freeapi-app-production-5e31.up.railway.app/api/v1/todos/${id}`,{
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(updated)
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.success){
        getTodo()
      }
    })
  }
 
  function handleCheck(Id){
    fetch(`https://freeapi-app-production-5e31.up.railway.app/api/v1/todos//toggle/status/${Id}`,{
      method:"PATCH",
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.message=="done"){
        getTodo()
      }
    })
  }
  
   
    
    
    
  
  if(!list){
    return(
      <p>loading</p>
    )
  }
  
  return (
    <Router>

    <Routes>
    
    <Route exact path="/" element={<><Nav/><Home/></>} ></Route>

    <Route exact path='/list' element={<div className='List'>
      <Link to='/' style={{fontSize: '20px',textDecoration: 'none', color: '#007bff', padding: '4px 10px', border: '2px solid #007bff', borderRadius: '6px', backgroundColor: '#fff',position:'relative',top:'3rem',left:'2rem'}}>Home</Link>
      <Link to='/create' style={{fontSize: '20px',textDecoration: 'none', color: '#007bff', padding: '4px 10px', border: '2px solid #007bff', borderRadius: '6px', backgroundColor: '#fff',position:'relative',top:'3rem',left:'2.5rem' }}>Create</Link>
     <List todo={list} delete={handleDelete} editID={setId} checker={handleCheck}  />
     </div>}></Route>
    

     <Route exact path='/create' element={ <div className='Form'>
      <Link to='/'style={{fontSize: '20px',textDecoration: 'none', color: '#007bff', padding: '4px 10px', border: '2px solid #007bff', borderRadius: '6px', backgroundColor: '#fff',position:'relative',top:'3rem',left:'2rem' }}>Home</Link>
      <Link to='/list' style={{fontSize: '20px',textDecoration: 'none', color: '#007bff', padding: '4px 10px', border: '2px solid #007bff', borderRadius: '6px', backgroundColor: '#fff',position:'relative',top:'3rem',left:'2.5rem' }}>List</Link>
     <Create todo={getTodo} />
    </div>}></Route>
   
    
    <Route exact path='/edit/:ID' element={<Edit  edited={handleEdit} />}/>
    
    {/* <TimeAgo date={new Date()} live={false}/> */}
    
    </Routes>
    </Router>
  );
}

export default App;
