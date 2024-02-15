import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/AuthLayout'
import { DashboardLayout } from './pages/_layouts/DashboardLayout'
import { App } from './pages/App'
import { Auth } from './pages/auth/Auth'
import { Register } from './pages/auth/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/*',
    element: <div>404 Not Found</div>,
  },
])
