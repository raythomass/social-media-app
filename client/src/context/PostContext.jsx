import { createContext, useReducer } from "react";

export const PostContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const postsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                posts: action.payload
            }
        case 'CREATE_POST':
            return {
                posts: [action.payload, ...state.posts]
            }
        case 'DELETE_POST': 
            return {
                posts: state.posts.filter((p) => p._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const PostContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(postsReducer, {
        posts: null
    })

    return (
        <PostContext.Provider value={{...state, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}