import React, { Component } from 'react'

class Posts extends Component {

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(rest => rest.json())
            .then(data => console.log(data));
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}

export default Posts;