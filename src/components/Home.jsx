import {useTypewriter,cursor} from 'react-simple-typewriter';
export default function Home(){
    const [text] = useTypewriter({
        words: ['CRUD','CRUD with API Integration'],
        loop:{},
        typeSpeed:180,
        deleteSpeed:80
      })
    return (
        <div className="header">
        <h2>Welcome To <span style={{fontWeight:'bold',fontSize:'55px', color:'#007bff',margin:'20px'}}>{text}</span></h2>
        </div>

       
    )
}