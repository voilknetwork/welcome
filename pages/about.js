import React from 'react'
import { Aboutus, AffiliateSection, Crumb, Features } from '../components'
import { HomeLayout } from '../layouts'

export default function about() {
    return (
        <HomeLayout>
            <Crumb name="About Us" />
            <Aboutus />
            <AffiliateSection />
            <Features />
        </HomeLayout>
    )
}
