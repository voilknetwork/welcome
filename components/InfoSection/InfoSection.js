import React from 'react'

export default function InfoSection() {
    return (
        <section id="ei-appdownload" class="ei-appdownload-section position-relative" data-background="assets/img/app-landing/background/appbg1.png">
            <div class="container">
                <div class="ei-appdownload-content">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="ei-app-mockup-img  wow fadeFromRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <img src="assets/img/app-landing/mockup/amu1.png" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ei-app-down-text wow fadeFromLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div class="eight-section-title appeight-headline pera-content text-left">
                                    <span class="eg-title-tag">
                                        App Download<i class="square-shape"><i></i><i></i><i></i><i></i></i>
                                    </span>
                                    <h2>This app is available for
                                        <span>your smart phone.</span>
                                    </h2>
                                    <p>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                                </div>
                                <div class="app-down-btn">
                                    <a href="#"><img src="assets/img/app-landing/shape/btn1.png" alt="" /></a>
                                    <a href="#"><img src="assets/img/app-landing/shape/btn2.png" alt="" /></a>
                                </div>
                                <div class="ei-download-btn pera-content">
                                    <div class="download-icon float-left"><i class="flaticon-idea"></i></div>
                                    <p>Are you interested for this app?</p>
                                    <a href="#">Learn More </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ei-appdownloaad-shape app-shape1" data-parallax='{"y" : -100}'><img src="assets/img/app-landing/background/apps1.png" alt="" /></div>
            <div class="ei-appdownloaad-shape app-shape2" data-parallax='{"x" : -120}'><img src="assets/img/app-landing/background/apps2.png" alt="" /></div>
            <div class="ei-appdownloaad-shape app-shape3" data-parallax='{"y" : -100}'><img src="assets/img/app-landing/background/apps3.png" alt="" /></div>
        </section>
    )
}
