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
                                <h2>Earn Shares by
                            <span> Sharing Content</span>
                                </h2>
                                <p>If you love to share content, our social platform is built just for you. 
                                    Earn shares by creating and curating content.</p>
                                <p>
                                    We provide you a cool basic editor, 
                                    which you can use to create and publish a post. 
                                    We also have an image hosting service so that you can add photos to your posts
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
                                        to get the likes from the community. That's how you earn the Shares</p>
                                </div>
                            </div>

                            <div className="s2-feature_list s2-purple wow fadeFromUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="s2-feature_icon text-center relative-position">
                                <i class="fas fa-comment"></i>
                                </div>
                                <div className="s2-feature_text_box saas2-headline pera-content">
                                    <h3>Comment on a post</h3>
                                    <p>When you find a post that's interesting. Drop a comment, your comment also can receive likes</p>
                                </div>
                            </div>

                            <div className="s2-feature_list s2-pink wow fadeFromUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="s2-feature_icon text-center relative-position">
                                <i class="fas fa-thumbs-up"></i>
                                </div>
                                <div className="s2-feature_text_box saas2-headline pera-content">
                                    <h3>Like a Post</h3>
                                    <p>Liking a post gets you curation rewards. Post rewards are split by 75/25 and 25% of it goes to the curators like you.</p>
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
