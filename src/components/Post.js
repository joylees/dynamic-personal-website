/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { EditPostButton } from '../styles/index'

const Post = ({ onClick, title, description, image }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
      <EditPostButton onClick={onClick}>Edit Post</EditPostButton>
    </div>
  )
}

export default Post
