import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import "@workspace/ui/styles/globals.css"
import { AppLayout } from "@/components/AppLayout"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/lib/query-client'

function RootComponent() {
  const location = useLocation()
  const isLoginPage = location.pathname.includes('/login')
  
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        {isLoginPage ? (
          <Outlet />
        ) : (
          <AppLayout>
            <Outlet />
          </AppLayout>
        )}
        <TanStackRouterDevtools />
        <ReactQueryDevtools initialIsOpen={false} />
      </NextThemesProvider>
    </QueryClientProvider>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
