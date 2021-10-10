import React from 'react'
import { Crumb, Signin } from '../components'
import { HomeLayout } from '../layouts'

export default function login() {
    return (
        <HomeLayout>
            <Crumb name="Login"/>
            <Signin />
        </HomeLayout>
    )
}
