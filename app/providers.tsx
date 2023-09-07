"use client"
// "use client";
import "./globals.css"
import { Inter } from "next/font/google"
import "/styles/globals.css"
import { useEffect } from "react"
import type { AppProps } from "next/app"
import { MantineProvider } from "@mantine/core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import axios from "axios"

const inter = Inter({ subsets: ["latin"] })
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  axios.defaults.withCredentials = false
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/csrf`
      )
      axios.defaults.headers.common["csrf-token"] = data.csrfToken
      console.log("data", data.csrfToken)
    }
    getCsrfToken()
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          fontFamily: "Verdana, sans-serif",
        }}
      >
        {children}
      </MantineProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
