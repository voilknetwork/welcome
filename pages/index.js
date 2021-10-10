import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import {useRef, useEffect} from "react"
import { About, AffiliateSection, Awesome, Contact, Crumb, Faq, Features, Footer, Header, Pricing, SectionIntro, Services, Signin, Signup, Team } from '../components'
import { HomeLayout } from '../layouts'

export default function Home() {


    return (
        <>
            <HomeLayout>
                <SectionIntro />
                <Services />
                <About />
                <Features />
                <AffiliateSection />
                <Faq />
            </HomeLayout>
        </>
    )
}
