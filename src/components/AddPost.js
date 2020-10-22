/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBlogPost } from '../actions'

const AddPost = props => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const { setAdding, addBlogPost } = props

  return (
    <form onSubmit={e => {
      e.preventDefault()
      setAdding(false)
      const post = { title, image, description }
      addBlogPost(post)
    }}
    >
      <div>
        <h2>Title</h2>
        <input
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <h2>Image</h2>
        <input
          placeholder="Image"
          onChange={e => setImage(e.target.value)}
          value={image}
        />
      </div>
      <div>
        <h2>Description</h2>
        <input
          placeholder="Description"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <p />
      <button type="submit">
        Save
      </button>
      <button
        onClick={() => {
          setAdding(false)
        }}
      >
        Cancel
      </button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  addBlogPost: post => dispatch(addBlogPost(post)),
})

export default connect(null, mapDispatchToProps)(AddPost)
