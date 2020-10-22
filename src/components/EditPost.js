import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editBlogPost, deleteBlogPost } from '../actions'

const EditPost = ({ post, setEditing, editBlogPost, deleteBlogPost }) => {
    const [image, setImage] = useState(post.image)
    const [description, setDescription] = useState(post.description)
    const [title, setTitle] = useState(post.title)

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                setEditing(false)
                let editedPost = { ...post, title, image, description };
                editBlogPost(post.id, editedPost)
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
                        setEditing(false)
                    }}>
                    Cancel
                </button>
                <button
                    onClick={(e) => {
                        deleteBlogPost(post.id);
                        setEditing(false)
                    }}>
                    Delete
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    editBlogPost: (id, post) => dispatch(editBlogPost(id, post)), // props.editBlogPost
    deleteBlogPost: id => dispatch(deleteBlogPost(id)) // props.deleteBlogPost
})

export default connect(null, mapDispatchToProps)(EditPost)