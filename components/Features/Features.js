import React from 'react'

export default function Features() {
    return (
        <section id="saas_two_feature" className="saas_two_feature_section">
        <div className="container">
            
            <div className="s2-feature_content">
                <div className="row">
                    <div className="col-lg-6 col-md-12 wow fadeFromUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="s2-feature_left">
                            <div className="s2-feature_text saas2-headline pera-content">
                                <span className="feature_tag">Social Reward Network </span>
                                <h2>Earn VOILK by
                            <span> Sharing Content</span>
                                </h2>
                                <p>If you love to share content, our social platform is built just for you. 
                                    Earn VOILK by creating and curating content.</p>
                                <p>
                                    We provide you a cool basic editor, 
                                    which you can use to create and publish a post. 
                                    75% of the post reward goes to the content creator.
                                </p>

                                <div className="saas_btn">
                                    <a href="https://social.voilk.com/login.html"><i className="fas fa-clipboard-list"></i> Login to Social Network</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="s2-feature_right">
                            <div className="s2-feature_list s2-grean wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="s2-feature_icon text-center relative-position">
                                <i class="fas fa-edit"></i>
                                </div>
                                <div className="s2-feature_text_box saas2-headline pera-content">
                                    <h3>Create a Post</h3>
                                    <p>Create stunning, effective and engaging posts. 
                                        to get the likes from the community. That's how you earn the VOILK</p>
                                </div>
                            </div>

                            <div className="s2-feature_list s2-purple wow fadeFromUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="s2-feature_icon text-center relative-position">
                                <i class="fas fa-thumbs-up"></i>
                                </div>
                                <div className="s2-feature_text_box saas2-headline pera-content">
                                    <h3>Get Likes</h3>
                                    <p>When you create a post, a curator with his voting power likes your post and direct some rewards to it. 
                                        Curator also earns by curating</p>
                                </div>
                            </div>

                            <div className="s2-feature_list s2-pink wow fadeFromUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="s2-feature_icon text-center relative-position">
                                <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div className="s2-feature_text_box saas2-headline pera-content">
                                    <h3>Earn a Reward</h3>
                                    <p>Post receives likes for seven days. Post rewards are split by 75/25. 75% of it goes to you and 25% to everyone who liked it.</p>
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
