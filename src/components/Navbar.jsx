import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';

export default function Nav(){
   return(
    <>
        <Link to='/create' style={{fontSize: '20px',textDecoration: 'none', color: '#007bff', padding: '4px 10px', border: '2px solid #007bff', borderRadius: '6px', backgroundColor: '#fff',position:'relative',top:'3rem',left:'2rem' }}>Create</Link>
        <Link to='/list' style={{fontSize: '20px',textDecoration: 'none', color: '#007bff', padding: '4px 10px', border: '2px solid #007bff', borderRadius: '6px', backgroundColor: '#fff',position:'relative',top:'3rem',left:'2.5rem' }}>List</Link>
    </>
    ) 
}