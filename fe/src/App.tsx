// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  FindCar from './pages/FindCar'
import Login from './pages/Login'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import AdminDashboard from './pages/AdminDashboard'
function App() {
  
  return (
    <>
      <Router>      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/cars' element={<FindCar/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
