import Post from "../components/Post";

const initialState = {
    image: '',
    description: '',
    posts: []
};


const header = (state = initialState, action) => {
    const { type } = action

    switch (type) {
        case 'EDIT_HEADER':
            return { ...state, ...action.header };

        case 'ADD_POST':
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { ...action.post, id: action.id }
                ]
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }

        case 'EDIT_POST':
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.id) { // the one we are editing
                        return action.post
                    }
                    return post; // return every other posts unmodified
                })
            }


        default:
            return state
    }
}

export default header