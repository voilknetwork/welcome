import React from 'react'
import { Contact, Crumb } from '../components'
import { HomeLayout } from '../layouts'

export default function contact() {
    return (
        <HomeLayout>
            <Crumb name="Contact"/>
            <Contact />
        </HomeLayout>
    )
}
