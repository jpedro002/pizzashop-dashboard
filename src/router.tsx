import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/AuthLayout'
import { DashboardLayout } from './pages/_layouts/DashboardLayout'
import { Auth } from './pages/auth/Auth'
import { Register } from './pages/auth/Register'
import { Dashboard } from './pages/app/dashboard/Dashboard'
import { Orders } from './pages/app/order/Orders'
import { NotFound } from './pages/app/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
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
    element: <NotFound />,
  },
])
