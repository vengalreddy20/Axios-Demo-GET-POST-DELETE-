import axios from 'axios'
import React, { Component } from 'react'

export class AxiosPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:"",
             title:""
        }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
    
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response=>{console.log(response)})
        .catch(err=>{console.log(err)})
    }
    
    render() {
        return (
            <div>
                <div>
                    <label>UserId</label>
                    <input type="text" name="userId" value={this.userId} onChange={this.changeHandler} />
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={this.title}  onChange={this.changeHandler} />
                </div>
                <button onClick={this.onSubmit}>submit</button>
                
            </div>
        )
    }
}

export default AxiosPost
