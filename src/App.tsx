import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Toaster } from 'sonner'
import { ThemeProvider } from './contexts/ThemeProvider'

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="pizza-shop-dashboard:theme"
      >
        <Helmet titleTemplate="%s | pizzashop" />
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}
