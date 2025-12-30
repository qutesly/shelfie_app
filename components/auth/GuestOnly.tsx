import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import { useRouter } from 'expo-router'

export default function GuestOnly({children}: {children: React.ReactNode}) {
    const {user, authChecked} = useUser()
    const router = useRouter()

    useEffect(() => {
        if(user && authChecked !== null) {
            router.replace("/profile")
        }
    }, [user, authChecked]) 

    if(!authChecked || user) {
        return <Text>loading...</Text>
    }


  return children
}