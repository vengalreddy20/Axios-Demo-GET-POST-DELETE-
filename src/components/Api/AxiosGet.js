import axios from 'axios'
import React,{useEffect,useState} from 'react'

const AxiosGet=(props)=> {
    return(
        <div>
            <h1>{props.id}</h1>
            <h1>{props.title}</h1>
            <h6>{props.body}</h6>
            <button onClick={props.postDeleted(props.id)}>Delete Post</button>

        </div>
    )
    // const [posts,setPosts]=useState([])
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then((response)=>{
    //         setPosts(response.data)
    //         console.log(response)
    //     })
    //     .catch(err=>console.log("error"))

    // },[])
    // return (
    //     <div style={{display:"flex",flexWrap:"wrap"}}>
    //         {posts.map(post=><div >
    //             {post.id}
    //             <li key={post.id}>{post.title}</li>
    //             <li>{post.body}</li>
    //             <button>delete post</button>
    //         </div>)}
            
    //     </div>
    // )
}

export default AxiosGet
