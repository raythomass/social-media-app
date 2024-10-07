import { PostContext } from "../context/PostContext";
import { useContext } from "react";

export const usePostContext = () => {
    const context = useContext(PostContext)

    if(!context) {
        throw Error('useWPostContext must be used inside a PostContextProvider')
    }

    return context
}