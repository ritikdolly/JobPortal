import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/HOme'
import { ApplyJob } from './pages/ApplyJob'
import { Applications } from './pages/Applications'
import { RecruiterLogin } from './components/RecruiterLogin'
import { AppContext } from './context/AppContext';

function App() {
  const {showRecruiterLogin}= useContext(AppContext);
  
  const router=createBrowserRouter( [
    {path:'/', element:<Home/>},
    {path:'/apply-job/:id', element:<ApplyJob/>},
    {path:'/applications', element:<Applications/>},
  ]
)

  return (
    <>
    {showRecruiterLogin && <RecruiterLogin/>}    
    <RouterProvider router={router} />
    </>
  )
}

export default App
