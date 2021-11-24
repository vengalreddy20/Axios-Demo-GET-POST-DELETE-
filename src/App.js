import axios from 'axios';
import './App.css';
import AxiosGet from './components/Api/AxiosGet';
import AxiosPost from './components/Api/AxiosPost';
import React,{useState,useEffect} from 'react';

function App() {
  const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setPosts(response.data)
            console.log(response)
        })
        .catch(err=>console.log("error"))

    },[])
    const onPostDeleteHandler=(id)=>{
      console.log(id)
      if(window.confirm('are you sure want to delete')){
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{
          console.log(response)
          const del = posts.filter(employee => id !== employee.id)
            setPosts(del)
           
        })
        .catch(err=>console.log(err))
      }

    }
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
            {posts.map(post=><div>
              <div>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <h6>{post.body}</h6>
            <button onClick={()=>onPostDeleteHandler(post.id)}>Delete Post</button>

        </div>
            </div>)}
            {/* <AxiosGet /> */}
            {/* <AxiosPost /> */}
            
        </div>
  
     
  
  );
}

export default App;
