import { FC, ReactNode } from "react"
import Head from "next/head"
import "../globals.css"
import { Inter } from "next/font/google"
import "../../styles/globals.css"
import { useEffect } from "react"
import type { AppProps } from "next/app"
import { MantineProvider } from "@mantine/core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import axios from "axios"

type Props = {
  title: string
  children: ReactNode
}
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// })

export const Layout: FC<Props> = ({ children, title = "Nextjs" }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}
