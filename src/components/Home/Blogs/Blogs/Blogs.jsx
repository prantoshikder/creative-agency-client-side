import React, { useState } from 'react';
import BlogsFakeData from '../../../FakeData/BlogsFakeData';
import BlogsCard from '../BlogsCard/BlogsCard';
import './Blogs.css';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const allBlogs = BlogsFakeData.slice(0, 3);
    const [blogsContent, setBlogsContent] = useState(allBlogs);
    return (
        <section className="blogs-section">
            <div className="container">
                <div className="common-section-title">
                    <h2>OUR <span>LATEST NEWS</span></h2>
                </div>
                <div className="blogs-wrapper">
                    <div className="blogs-inner">
                        <div className="all-blogs">
                            <div className="row">
                                {
                                    blogsContent.map(blogsContent => <BlogsCard key={blogsContent.id} blogsContent={blogsContent}></BlogsCard>)
                                }
                            </div>
                            <div className="show-allBlogs-btn">
                                <Link className="moreBlogs-btn" to={`/blogs`}>More Blogs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;