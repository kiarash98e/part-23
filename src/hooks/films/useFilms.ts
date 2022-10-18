import { useQuery, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '../../api/queryKeys'
import { api } from '../../api/api'


async function getFilms():Promise<any> {
    const { data } = await api.get("/films/")
    return data
}

export function useFilms () {
    const { data = [] } = useQuery([queryKeys.films],getFilms,{
        keepPreviousData:true,
    })
    return data 
}

export function useCachFilms () {
    const queryClient = useQueryClient()
    queryClient.prefetchQuery([queryKeys.films],getFilms)
}