import axios from 'axios'
import React,{useEffect,useState} from 'react'

const AxiosGet=()=> {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data)
                console.log(response)
            })
            .catch(err => console.log(err))

    }, [])
    const onPostDeleteHandler = (id) => {
        console.log(id)
        if (window.confirm('are you sure want to delete')) {
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => {
                    console.log(response)
                    const del = posts.filter(employee => id !== employee.id)
                    setPosts(del)

                })
                .catch(err => console.log(err))
           }
        }
        return (

            <div>
                {posts.map(post => <div key={post.id}>
                    <h1>{post.id}</h1>
                    <h1>{post.title}</h1>
                    <h6>{post.body}</h6>
                    <button onClick={() => (onPostDeleteHandler(post.id))}>Delete POst</button>


                </div>
                )}


            </div>

        )
}
export default AxiosGet

