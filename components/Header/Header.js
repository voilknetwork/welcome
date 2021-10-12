import React from 'react'
import Link from "next/link"
export default function Header() {
    return (
        <header id="header_main" className="saas_two_main_header">
                    <div className="container">
                        <div className="s_main_menu">
                            <div className="row">
                                <div className="col-md-2">
                                    <div className="brand_logo">
                                        <a href="/"><img src="assets/img/saas-c/logo/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="main_menu_list clearfix float-right">
                                        <nav className="s2-main-navigation  clearfix ul-li">
                                            <ul id="main-nav" className="navbar-nav text-capitalize clearfix">
                                                <li><i className="fa fa-home"></i><a className="nav-link" href="/"> Home</a></li>
                                                <li><i className="fa fa-newspaper"></i><a className="nav-link" href="/about"> About</a></li>
                                                <li><i className="fa fa-phone"></i><a className="nav-link" href="/contact"> Contact</a></li>
                                                <li><i className="fa fa-sign-in-alt"></i><a className="nav-link" href="/login"> Login</a> </li>
                                            </ul>
                                        </nav>
                                        <div className="saas_sign_up_btn text-center">
                                            <a href="https://signup.voilk.com/register"> Join!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="s2-mobile_menu relative-position">
                            <div className="s2-mobile_menu_button s2-open_mobile_menu">
                                <i className="fas fa-bars"></i>
                            </div>
                            <div className="s2-mobile_menu_wrap">
                                <div className="mobile_menu_overlay s2-open_mobile_menu"></div>
                                <div className="s2-mobile_menu_content">
                                    <div className="s2-mobile_menu_close s2-open_mobile_menu">
                                        <i className="far fa-times-circle"></i>
                                    </div>
                                    <div className="m-brand-logo text-center">
                                        <a href="/"><img src="assets/img/saas-c/logo/logo.png" alt="" /></a>
                                    </div>
                                    <nav className="s2-mobile-main-navigation  clearfix ul-li">
                                        <ul id="m-main-nav" className="navbar-nav text-capitalize clearfix">
                                            <li><a className="nav-link" href="/"> Home</a></li>
                                            <li><a className="nav-link" href="/about"> About</a></li>
                                            <li><a className="nav-link" href="/contact"> Contact</a></li>
                                            <li><a className="nav-link" href="/login"> Login</a> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
    )
}
