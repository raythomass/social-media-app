import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Toaster position='top-right' toastOptions={{duration: 2000}}/>
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/login'
              element={<Login/>}
            />
            <Route
              path='/signup'
              element={<Signup/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
