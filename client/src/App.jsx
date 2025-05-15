
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/HOme'
import { ApplyJob } from './pages/ApplyJob'
import { Applications } from './pages/Applications'

function App() {
  const router=createBrowserRouter([
    {path:'/', element:<Home/>},
    {path:'/apply-job/:id', element:<ApplyJob/>},
    {path:'/applications', element:<Applications/>},
  ]
)

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
