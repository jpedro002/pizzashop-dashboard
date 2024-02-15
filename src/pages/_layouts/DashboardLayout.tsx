import { Header } from '@/components/Header'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
