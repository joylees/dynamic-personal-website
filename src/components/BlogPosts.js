import React, { useState } from 'react'
import { connect } from 'react-redux'
import AddPost from './AddPost'
import EditPost from './EditPost'
import Post from './Post'
import { BlogPostsHeader, AddButton } from '../styles'


const BlogPosts = ({ posts }) => {
    const [adding, setAdding] = useState(false)
    const [editing, setEditing] = useState(false);

    return (
        <div style={{ padding: '4rem' }}>
            <div>
                <BlogPostsHeader>Blog Posts</BlogPostsHeader>
                <AddButton onClick={() => setAdding(true)}>Add Post</AddButton>
                {
                    adding ? <AddPost setAdding={setAdding} /> : null
                }
                {
                    typeof editing === 'number' ? <EditPost key={editing} setEditing={setEditing} post={posts.find(p => p.id === editing)} /> : null
                }
            </div>
            <div>
                {
                    posts.map(post => <Post key={post.id} {...post} onClick={() => setEditing(post.id)} />)
                }
            </div>
        </div>
    )

}

const mapStateToProps = ({ posts }) => ({
    posts
})

export default connect(mapStateToProps)(BlogPosts)