import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Order from './pages/Order.jsx'
import SideBar from './Components/SideBar.jsx'
function App() {
  return (
    <div className='bg-gray-50 min-h-screen'>
        <>
        <div className='hidden md:block'>
        <NavBar/>
        </div>
         <hr></hr>
         <div className='block md:hidden'>
          <SideBar/>
         </div>
        </>
        <Routes >
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/order' element={<Order/>}/>
        </Routes>
    </div>
  )
}

export default App
