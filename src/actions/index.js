let currentPostId = 0

export const addBlogPost = post => ({
    type: 'ADD_POST',
    id: currentPostId++,
    post,
})

export const editBlogPost = (id, post) => ({
    type: 'EDIT_POST',
    id,
    post,
})

export const deleteBlogPost = id => ({
    type: 'DELETE_POST',
    id,
})

export const editHeader = (header) => ({
    type: 'EDIT_HEADER',
    header
})