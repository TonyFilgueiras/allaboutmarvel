import React from 'react'
import {api} from "../api"
import { AxiosResponse } from 'axios'
import { DataContainer, MarvelData } from '../typescript/interfaces/apiInterfaces'

export default function useFetch() {
    const [error, setError] = React.useState<string>()
    const [loading, setLoading] = React.useState<boolean>(false)

    const request  = React.useCallback(async (url: string, _offset: number = 0, _name ?: string ) => { 
        let response: AxiosResponse<MarvelData>;
        let data: DataContainer | undefined
        try { 
            setError('')
            setLoading(true)
            response = await api.get(url, {
                params:{ 
                    offset: _offset, 
                    nameStartsWith: _name,
                }
            })
            data = response.data.data
            if (response.data.code < 200 || response.data.code >= 300) {
                console.log(response.data.status)
                console.log(response.data.code)
                setError(response.data.status)
                throw new Error(response.data.status)
            }
        } catch (err:unknown) {
            if (err instanceof Error) {
                setError(err.message)
            }
        } finally {
            setLoading(false)
            return (data)
        }
    }, [])

  return {
    loading, error, request
  }
}