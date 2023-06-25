import React from 'react'
import {api} from "../api"
import { AxiosResponse } from 'axios'
import { DataContainer, MarvelData } from '../typescript/interfaces/apiInterfaces'

export default function useFetch() {
    const [error, setError] = React.useState<string>()
    const [loading, setLoading] = React.useState<boolean>(false)

    const request  = React.useCallback(async (url: string, _name ?: string, _offset: number = 0, specificSearch: boolean = false ) => { 
        let response: AxiosResponse<MarvelData>;
        let data: DataContainer | undefined

        try { 
            setError('')
            setLoading(true)


            const params = {
                offset: _offset,
                nameStartsWith: _name,
                limit: 100,
            }

            console.log('consultando como quem n quer nada kkkk se fode ae seu cuzao')
            
            if (!specificSearch) {
                response = await api.get(url, { params })
                console.log("generico")
            } else {
                response = await api.get(url)
                console.log("especifico")
            }
            data = response.data.data

            if (response.data.code < 200 || response.data.code >= 300) {
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