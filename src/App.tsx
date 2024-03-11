import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Toaster } from 'sonner'
import { ThemeProvider } from './contexts/ThemeProvider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/reactQuery'

export const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="pizza-shop-dashboard:theme"
      >
        <Helmet titleTemplate="%s | pizzashop" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}
