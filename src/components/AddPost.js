import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBlogPost } from '../actions'

const AddPost = (props) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const { setAdding, addBlogPost } = props

    return (
        <form onSubmit={e => {
            e.preventDefault()
            setAdding(false)
            let post = { title, image, description };
            addBlogPost(post)
        }}>
            <input
                placeholder='Title'
                onChange={e => setTitle(e.target.value)}
                value={title}
            />
            <input
                placeholder='Image'
                onChange={e => setImage(e.target.value)}
                value={image}
            />
            <input
                placeholder='Description'
                onChange={e => setDescription(e.target.value)}
                value={description}
            />
            <button type="submit">
                Save
            </button>
            <button
                onClick={() => {
                    setAdding(false)
                }}>
                Cancel
            </button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    addBlogPost: post => dispatch(addBlogPost(post))
})

export default connect(null, mapDispatchToProps)(AddPost)