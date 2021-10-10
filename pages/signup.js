import React from 'react'
import { Crumb, Signup } from '../components'
import { HomeLayout } from '../layouts'

export default function signup() {
    return (
        <HomeLayout>
            <Crumb name="Signup"/>
            <Signup />
        </HomeLayout>
    )
}
