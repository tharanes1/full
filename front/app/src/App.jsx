
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Login';
import Accounts from './Accounts';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Hero/>
//   },
//   {
//     path:"/login",
//     element:<Login/>
//   },
//   {
//     path:"/accounts",
//     element:<Accounts/>
//   }
// ]);
function App() {

  return (
    <>
      {/* <RouterProvider router={router}>
        </RouterProvider>  */}
        <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/accounts' element={<Accounts/>} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
