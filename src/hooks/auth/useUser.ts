import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { getJWTHeader, api2 } from '../../api/api'
import { queryKeys } from '../../api/queryKeys'
import { clearStoredUser, getStoredUser, setStoredUser } from '../../api/storage'

const getUser = async(user:any) => {
    const { data } = await api2.get(`/${user.id}`,{
        headers:getJWTHeader(user)
    })
    if (!user) {
        return
    }
    return data
}

export const useUser = () => {
    const [user,setUser] = useState(getStoredUser())
    
    const queryClient = useQueryClient()

    useQuery([queryKeys.user,user.id],() => getUser(user),{
        enabled:!!user?.id,
        onSuccess(data) {
            setUser(data)
        },
    })

    const updateUser = (newUser:any) => {
        setUser(newUser)

        setStoredUser(newUser)
        queryClient.setQueryData([queryKeys.user],newUser)
    }

    const clearUser = () => {
        setUser(null)
        clearStoredUser()
        queryClient.setQueryData([queryKeys.user],null)
        queryClient.removeQueries([queryKeys.user])
    }

    return { user, updateUser, clearUser }
}