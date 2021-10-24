import React from 'react'

export default function SectionIntro() {
    return (
        <section id="saas_two_banner" className="saas_two_banner_section relative-position">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="s2-banner_area relative-position">
                        <div className="s2-banner_content saas2-headline pera-content">
                            <span className="s2-tilte_tag">Sharing content made easy!</span>
                            <h1>The <span>Revenue Sharing</span> Social Network!</h1>
                            <p>Where you can earn VOILK cryptocurrency by creating and curating blog posts and earn commissions on your referrals' purchases</p>
                            <div className="banner_btn">
                                <a href="https://signup.voilk.com/register"><i className="fas fa-user"></i> Register!</a>
                                <a href="/login"><i className="fas fa-sign-in-alt"></i> Login</a>
                                <span>Create a post, get likes on it, earn VOILK cryptocurrency!</span>
                            </div>
                        </div>
                        <div className="banner_mockup">
                            <img src="assets/img/saas-c/banner/b-laptop.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="s2-banner_shape1 position-absolute" data-parallax='{"y" : 100}'><img src="assets/img/saas-c/banner/b-shape4.png" alt="" /></div>
        <div className="s2-banner_shape2 position-absolute"><img src="assets/img/saas-c/banner/b-shape3.png" alt="" /></div>
        <div className="s2-banner_shape3 position-absolute"><img src="assets/img/saas-c/banner/b-shape2.png" alt="" /></div>
    </section>
    )
}
