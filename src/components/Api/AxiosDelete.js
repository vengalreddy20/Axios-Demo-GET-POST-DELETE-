import React from 'react'
import axios from 'axios'

function AxiosDelete() {
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
        <div>
            <div key={post.id}>
                    <h1>{post.id}</h1>
                    <h1>{post.title}</h1>
                    <h6>{post.body}</h6>
                    <button >Delete POst</button>


                </div>
            
        </div>
    )
}

export default AxiosDelete
