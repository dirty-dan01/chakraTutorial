import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard, { taskLoader } from './pages/Dashboard'
import Create, { createAction } from './pages/Create'
import Profile from './pages/Profile'
import Vaccants from './pages/Vaccants'
import { Tab } from '@chakra-ui/react'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={taskLoader}/>
      <Route path="create" element={<Create />} action={createAction}/>
      <Route path="profile" element={<Profile />} />
      <Route path="vaccants" element={<Vaccants/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
