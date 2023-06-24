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
        const cache : Record<string, any> = {};

        try { 
            setError('')
            setLoading(true)

            const params = {
                offset: _offset,
                nameStartsWith: _name,
            }

            const cacheKey = JSON.stringify({ url, params });
            console.log(cacheKey)
            console.log(cache[cacheKey])
            // Check if the response is already cached
            if (cache[cacheKey]) {
              console.log('Data retrieved from cache:', cache[cacheKey]);
              return cache[cacheKey];
            }

            console.log('consultando como quem n quer nada kkkk se fode ae seu cuzao')
            response = await api.get(url, { params })
            data = response.data.data

            cache[cacheKey] = response.data;
            console.log('Data fetched and cached:', response.data);

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