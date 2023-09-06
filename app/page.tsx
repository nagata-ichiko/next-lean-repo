"use client"
import Image from "next/image"
import styles from "./page.module.css"
import type { NextPage } from "next"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import * as Yup from "yup"
import { IconDatabase } from "@tabler/icons"
import { ShieldCheckIcon } from "@heroicons/react/solid"
import { ExclamationCircleIcon } from "@heroicons/react/outline"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  Anchor,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from "@mantine/core"
import { useForm, yupResolver } from "@mantine/form"
import { Layout } from "./components/Layout"
import { AuthForm } from "./types"
import "tailwindcss/tailwind.css"

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("No email provided"),
  password: Yup.string()
    .required("No password provided")
    .min(5, "Password should be min 5 chars"),
})

// // axios.defaults.withCredentials = true
// // const getCsrfToken = async () => {
// // const { data } = await axios.get(
// // `${process.env.NEXT_PUBLIC_API_URL}/auth/csrf`
// // )
// // axios.defaults.headers.common['csrf-token'] = data.csrfToken
// // }

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// })

export default function Home() {
  const router = useRouter()
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState("")
  const form = useForm<AuthForm>({
    validate: yupResolver(schema),
    initialValues: {
      email: "",
      password: "",
    },
  })
  const handleSubmit = async () => {
    // getCsrfToken()
    try {
      if (isRegister) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
          email: form.values.email,
          password: form.values.password,
        })
      }
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        email: form.values.email,
        password: form.values.password,
      })
      form.reset()
      router.push("/dashboard")
    } catch (e: any) {
      setError(e.response.data.message)
    }
  }
  return (
    <Layout title="Auth">
      <ShieldCheckIcon className="h-16 w-16 text-blue-500" />
      {error && (
        <Alert
          my="md"
          variant="filled"
          icon={<ExclamationCircleIcon />}
          title="Authorization Error"
          color="red"
          radius="md"
        >
          {error}
        </Alert>
      )}
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          mt="md"
          id="email"
          label="Email*"
          placeholder="example@gmail.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          mt="md"
          id="password"
          placeholder="password"
          label="Password*"
          description="Must be min 5 char"
          {...form.getInputProps("password")}
        />
        <Group mt="xl" position="apart">
          <Anchor
            component="button"
            type="button"
            size="xs"
            className="text-gray-300"
            onClick={() => {
              setIsRegister(!isRegister)
              setError("")
            }}
          >
            {isRegister
              ? "Have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button
            leftIcon={<IconDatabase size={14} />}
            color="cyan"
            type="submit"
          >
            {isRegister ? "Register" : "Login"}
          </Button>
        </Group>
      </form>
    </Layout>
  )
}
