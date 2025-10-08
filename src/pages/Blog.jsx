import React from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogPosts from '../components/blog/BlogPosts';
import CTA from '../components/CTA';

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogPosts />
      <CTA />
    </>
  );
};

export default Blog;
