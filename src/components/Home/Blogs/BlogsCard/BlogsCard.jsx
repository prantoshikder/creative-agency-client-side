import React from 'react';
import './BlogsCard.css';

const BlogsCard = (props) => {
    const { image, blogsTitle, blogsDescription } = props.blogsContent;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="single-blogs">
                <div className="single-blogs-img">
                    <img src={image} className="img-fluid" alt=""/>
                </div>
                <div className="single-blogs-content">
                    <h4>{blogsTitle}</h4>
                    <p>{blogsDescription}</p>
                    <div className="blogs-btn">
                        <button className="blogs-readMore-btn">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;