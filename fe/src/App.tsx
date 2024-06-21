// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  FindCar from './pages/FindCar'
import Login from './pages/Login'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import AdminListCars from './pages/AdminListCars'
import AdminAddCar from './pages/AdminAddCar'
import AdminEditCar from './pages/AdminEditCar'
import AdminDashboard from './pages/AdminDashboard'
import Protected from './components/Protected'
function App() {
  
  return (
    <>
      <Router>      
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cars' element={
            <Protected>
              <FindCar/>
            </Protected>
            }
          />
          <Route path='/dashboard' element={
            <Protected>
              <AdminDashboard/>
            </Protected>
            }
          />
          <Route path='/listcar' element={
            <Protected>
              <AdminListCars/>
            </Protected>
            }
          />
          <Route path='/addcar' element={
            <Protected>
              <AdminAddCar/>
            </Protected>
            }
          />
          <Route path='/editcar/:id' element={
            <Protected>
              <AdminEditCar/>
            </Protected>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
