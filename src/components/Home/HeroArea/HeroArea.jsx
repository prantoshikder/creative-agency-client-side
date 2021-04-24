import React from 'react';
import './HeroArea.css';
import bannerImage1 from '../../../images/BannerImages/banner-img1.jpg';
import bannerImage2 from '../../../images/BannerImages/banner-img2.jpg';
import bannerImage3 from '../../../images/BannerImages/banner-img3.jpg';
import bannerImage4 from '../../../images/BannerImages/banner-img4.jpg';
import bannerImage5 from '../../../images/BannerImages/banner-img5.jpg';

const HeroArea = () => {
    return (
        <section className="hero-area-part">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleFade" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleFade" data-slide-to="1"></li>
                    <li data-target="#carouselExampleFade" data-slide-to="2"></li>
                    <li data-target="#carouselExampleFade" data-slide-to="3"></li>
                    <li data-target="#carouselExampleFade" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerImage1} className="d-block w-100" alt="" />
                        <div className="bg-overlay">
                            <div className="carousel-caption d-none d-md-block">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h5>Let's Grow Your Brand To The Next Level</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores minus, animi, illo deleniti aperiam voluptates culpa, mollitia assumenda dolores sunt vel. Aspernatur, molestias soluta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerImage2} className="d-block w-100" alt="" />
                        <div className="bg-overlay">
                            <div className="carousel-caption d-none d-md-block">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h5>Let's Grow Your Brand To The Next Level</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores minus, animi, illo deleniti aperiam voluptates culpa, mollitia assumenda dolores sunt vel. Aspernatur, molestias soluta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerImage3} className="d-block w-100" alt="" />
                        <div className="bg-overlay">
                            <div className="carousel-caption d-none d-md-block">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h5>Let's Grow Your Brand To The Next Level</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores minus, animi, illo deleniti aperiam voluptates culpa, mollitia assumenda dolores sunt vel. Aspernatur, molestias soluta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerImage4} className="d-block w-100" alt="" />
                        <div className="bg-overlay">
                            <div className="carousel-caption d-none d-md-block">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h5>Let's Grow Your Brand To The Next Level</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores minus, animi, illo deleniti aperiam voluptates culpa, mollitia assumenda dolores sunt vel. Aspernatur, molestias soluta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerImage5} className="d-block w-100" alt="" />
                        <div className="bg-overlay">
                            <div className="carousel-caption d-none d-md-block">
                                <div className="row">
                                    <div className="col-lg-10 offset-lg-1">
                                        <h5>Let's Grow Your Brand To The Next Level</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum asperiores minus, animi, illo deleniti aperiam voluptates culpa, mollitia assumenda dolores sunt vel. Aspernatur, molestias soluta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    );
};

export default HeroArea;