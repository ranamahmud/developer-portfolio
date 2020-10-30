import React, { Fragment } from 'react';
import Navigation from '../commons/Navigation/Navigation';
import BlogContent from './BlogContent/BlogContent';

const Blog = () => {
    return (
        <Fragment>
            <Navigation />
            <BlogContent />
        </Fragment>

    );
};

export default Blog;