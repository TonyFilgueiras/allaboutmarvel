import React from 'react'

export default function useFetch() {
    const [data, setData] = React.useState<any>()
    const [error, setError] = React.useState<string>()
    const [loading, setLoading] = React.useState<boolean>(false)


    const request  = React.useCallback(async (url: URL, options: RequestInit | undefined) => {
        let response;
        let json
        try { 
            setError('')
            setLoading(true)
            response = await fetch(url, options)
            json = await response.json()
            if (response.ok === false) throw new Error (json.message)
        } catch (err:unknown) {
            json = null
            if (err instanceof Error) {
                setError(err.message)
            }
        } finally {
            setData(json)
            setLoading(false)
            return {response, json}
        }
    }, [])

  return {
    data, loading, error, request
  }
}