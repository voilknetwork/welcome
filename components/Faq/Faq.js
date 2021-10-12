import React from 'react'

export default function Faq() {
    return (
<section id="s2-faq" className="s2-faq_section relative-position">
                    <div className="container">
                        <div className="saas_two_section_title saas2-headline text-center">
                            <span className="title_tag">
                                Frequently asked questions
                    </span>
                            <h2>
                                We have some FAQ
                    </h2>
                        </div>

                        <div className="s2_faq_content">
                            <div className="accordion" id="accordionExample">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="s2_faq">
                                            <div className="s2_faq-header" id="headingOne">
                                                <button className="" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">
                                                    01. How can I create an account?
                                        </button>
                                            </div>
                                            <div id="collapseOne" className="collapse" data-parent="#accordionExample">
                                                <div className="s2_faq-body">
                                                    Creating an account is as simple as typing a username and pressing generate account button. Click <a href="/signup">Here</a> which will take you to the account creation page.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="s2_faq">
                                            <div className="s2_faq-header" id="headingTwo">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapseTwo">
                                                    02. How can I activate a VOILK Package?
                                        </button>
                                            </div>
                                            <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                                <div className="s2_faq-body">
                                                    You can visit packages option from your affiliates panel and follow the on screen instructions.
                                        </div>
                                            </div>
                                        </div>
                                        <div className="s2_faq">
                                            <div className="s2_faq-header" id="headingThree">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapseThree">
                                                    03. How can I deposit/cashout Funds?
                                        </button>
                                            </div>
                                            <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                                <div className="s2_faq-body">
                                                    We accept several payment options like Skrill, Netteller, Bitcoin, USDT and many others. find deposit option and follow the instructions.
                                        </div>
                                            </div>
                                        </div>
                                        <div className="s2_faq">
                                            <div className="s2_faq-header" id="headingFour">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapseFour">
                                                    04. How much I get paid when I invite a customer?
                                        </button>
                                            </div>
                                            <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                                <div className="s2_faq-body">
                                                    You can get paid upto 50% commision on each purchase that your customer makes. depends on Membership Level
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="s2_faq">
                                            <div className="s2_faq-header" id="heading5">
                                                <button className="" data-toggle="collapse" data-target="#collapse5" aria-controls="collapse5">
                                                    05. When can I cashout my commission?
                                     </button>
                                            </div>
                                            <div id="collapse5" className="collapse" data-parent="#accordionExample">
                                                <div className="s2_faq-body">
                                                    You can Cashout your commission when it is at least 50$ in value, anytime that you want from your affiliate dashboard. 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="s2_faq">
                                            <div className="s2_faq-header" id="heading6">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapse6">
                                                    06. What can I do with the VOILK that I purchased?
                                    </button>
                                            </div>
                                            <div id="collapse6" className="collapse" data-parent="#accordionExample">
                                                <div className="s2_faq-body">
                                                    VOILK can be exchanged against the dollars via the internal exchange market, or you can convert them into Power on the social network and increase your Likes' value, which lets you earn more VOILK.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="s2_faq">
                                            <div className="s2_faq-header" id="heading7">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapse7">
                                                    07. Share Power can be converted back into voilk?
                                    </button>
                                            </div>
                                            <div id="collapse7" className="collapse" data-parent="#accordionExample">
                                                <div className="s2_faq-body">
                                                    Yes, Share Power can be converted back into VOILK but that takes 90 days to convert back. We strongly discourage powering down, instead you should use your power to help appreciate other people's content.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="s2_faq">
                                            <div className="s2_faq-header" id="heading8">
                                                <button className="collapsed" data-toggle="collapse" data-target="#collapse8">
                                                    08. Have more questions?
                                                </button>
                                            </div>
                                            <div id="collapse8" className="collapse" data-parent="#accordionExample">
                                                <div className="s2_faq-body">
                                                   You can always contact us at support@voilk.com
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}
