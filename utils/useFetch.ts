import { useState, useEffect } from "react"

interface UseFetchResponse<T> {
  data: T | null
  error: string | null
  loading: boolean
}

const useFetch = <T,>(url: string, options: RequestInit = {}): UseFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_DEV_URL || ''
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl+url, options)
        const data = await response.json()
        setData(data)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        setLoading(false)
      }
    }

    fetchData()

  }, [])

  return { data, error, loading }
}

export default useFetch