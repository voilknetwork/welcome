import React from 'react'
import { Footer, Header } from '../../components'
import Head from 'next/head'
import Script from 'next/script'
import {useRef, useEffect} from "react"

export default function HomeLayout({ children }) {
  const myRef = useRef(null)

  useEffect(() => {
      myRef.current.remove();
  }, [])  
    return (
        <>
                    <Head>
                <title>Voilk.com - The best Revenue Sharing platform</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="assets/img/fv.png" type="image/x-icon" />
                <link rel="icon" href="assets/img/fv.png" type="image/x-icon" />
                <meta name="description" content="Voilk is a revenue sharing social network." />
                <meta property="og:type" content="website" data-reactid="7" />
    <meta property="og:site_name" content="voilk.com" data-reactid="8" />
    <meta property="og:title" content="Voilk - Revenue sharing social network" data-reactid="9" />
    <meta property="og:description"
        content="Revenue sharing Social Network." data-reactid="10" />
    <meta property="og:image" content="https://graphql.voilk.com/image/0ec65a8f0a0e9ec2482a0cc18d52501f.png"
        data-reactid="11" />
    <meta property="og:url" content="https://voilk.com" />
    <meta property="fb:app_id" content="588295505354973" data-reactid="12" />
    <meta name="twitter:card" content="summary" data-reactid="13" />
    <meta name="twitter:site" content="@voilknetwork" data-reactid="14" />
    <meta name="twitter:title" content="#voilk" data-reactid="15" />
    <meta name="twitter:image" content="https://graphql.voilk.com/image/0ec65a8f0a0e9ec2482a0cc18d52501f.png"
        data-reactid="16" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/animate.css" />
                <link rel="stylesheet" href="/assets/css/fontawesome-all.css" />
                <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                
            </Head>
            <>
                <div id="preloader" ref={myRef} className="saas-classic-preloader"></div>
                <div className="up">
                    <a href="#" id="scrollup" className="saas-classic-scrollup text-center">
                        <i className="fas fa-angle-up"></i>
                    </a>
                </div>
                <Header />
                {children}
                <Footer />
                <div className="s2-copyright text-center">2021 © All rights reserved</div>
                <Script strategy="beforeInteractive" src="/assets/js/jquery.js" />
                <Script strategy="beforeInteractive" src="/assets/js/popper.min.js" />
                <Script strategy="beforeInteractive" src="/assets/js/bootstrap.min.js" />
                <Script strategy="beforeInteractive" src="/assets/js/owl.js" />
                <Script strategy="beforeInteractive" src="/assets/js/aos.js" />
                <Script strategy="beforeInteractive" src="/assets/js/slick.js" />
                <Script strategy="beforeInteractive" src="/assets/js/wow.min.js" />
                <Script strategy="beforeInteractive" src="/assets/js/pagenav.js" />
                <Script strategy="beforeInteractive" src="/assets/js/jquery.barfiller.js" />
                <Script strategy="beforeInteractive" src="/assets/js/parallax-scroll.js" />
                <Script strategy="beforeInteractive" src="/assets/js/jquery.mCustomScrollbar.concat.min.js" />
            </>
      </>
    )
}
