import React, { Component } from 'react'

class Post_form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <div>Add Post</div>
                <form action="">
                    <div>
                        <label>Title: </label><br />
                        <input name="title" type="text" />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" type="text" />
                    </div>
                    <br />
                    <button type="submit ">Submit</button>
                </form>
            </div>
        )
    }
}

export default Post_form