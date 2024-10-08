import { useAuthContext } from "./useAuthContext"
import { usePostContext } from "./usePostContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: postDispatch } = usePostContext()

    const logout = async () => {
        localStorage.getItem('user')

        dispatch({type: 'LOGOUT'})
        postDispatch({type: 'SET_POSTS', payload: null})
    }

    return {logout}
}