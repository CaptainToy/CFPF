import React from 'react';
import './aboutUs.css';
import img2 from '../about/2.jpg'

const AboutUs = () => {
    return (
        <div className="section-about-us">
            <div className="content-about-us">
                <div className="info-about-us">
                    <h1>About Us</h1>
                    <p className="description-about-us">
                    As lifelong philanthropists, giving back has always been our founders deepest passion. They believe that making a difference in others' lives not only uplifts them but also enriches theirs and humanity at large. Their approach goes beyond donations; it's about connecting with people, understanding their struggles, and alleviating their burdens.

                    </p>
                    <div className="features-about-us">
                        <div className="single-feature-about-us">
                        <div className="icon-feature-about-us"><span class="material-symbols-outlined">calendar_month</span></div>
                        <div className="text-feature-about-us">
                                <h4>Founded in September 2023</h4>
                            </div>
                        </div>

                        <div className="single-feature-about-us">
                            <div className="icon-feature-about-us"><span class="material-symbols-outlined">handshake</span></div>
                            <div className="text-feature-about-us">
                                <h4>Primary sponsors since inception</h4>
                            </div>
                        </div>

                        <div className="single-feature-about-us">
                            <div className="icon-feature-about-us"><span class="material-symbols-outlined">groups</span></div>
                            <div className="text-feature-about-us">
                                <h4>Seeking collaborators and sponsors</h4>
                            </div>
                        </div>

                        <div className="single-feature-about-us">
                            <div className="icon-feature-about-us"><span class="material-symbols-outlined">recommend</span></div>
                            <div className="text-feature-about-us">
                                <h4>Dedicated to supporting the less privileged in Nigeria</h4>
                            </div>
                        </div>

                        <div className="single-feature-about-us">
                            <div className="icon-feature-about-us"><span class="material-symbols-outlined">editor_choice</span></div>
                            <div className="text-feature-about-us">
                                <h4> Bi-weekly program support</h4>
                            </div>
                        </div>
                        <p className="description-about-us">
                             They’re committed to advocating for change, fostering community, and supporting those in need. They understand that every act of kindness inspires hope and builds a better world. And they invite everyone to join us in empowering positive change.
                        </p>
                    </div>
                </div>

                <div className="media-about-us">
                    <img src={img2} alt="About Us" className="image-about-us" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
