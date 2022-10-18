import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../../api/queryKeys'
import { api } from '../../api/api'

async function getFilm(id:any):Promise<any> {
    const { data } = await api.get(`/films/${id}`)
    return data
}

export function useFilm (id:any) {
    
    const { data } = useQuery([queryKeys.film],() => getFilm(id),{
        staleTime:0,
        cacheTime:30000,
        refetchOnMount:true,
        refetchOnReconnect:true,
        refetchOnWindowFocus:true,
        refetchInterval:60000,//auto re-fetch
    })
    return data
}