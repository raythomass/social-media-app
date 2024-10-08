import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './hooks/useAuthContext'

function App() {

  const { user } = useAuthContext()

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Toaster position='top-right' toastOptions={{duration: 2000}}/>
          <Routes>
            <Route
              path='/'
              element={ user ? <Home/> : <Navigate to={'/login'}/>}
            />
            <Route
              path='/login'
              element={ !user ? <Login/> : <Navigate to={'/'}/>}
            />
            <Route
              path='/signup'
              element={ !user ? <Signup/> : <Navigate to={'/'}/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
