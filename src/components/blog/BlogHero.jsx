import React from 'react';
import './BlogHero.css';

const BlogHero = () => {
  return (
    <section className="blog-hero">
      <div className="blog-hero-container">
        <p className="blog-hero-label">Blog</p>
        <h1 className="blog-hero-title">Health insights for patients</h1>
        <p className="blog-hero-subtitle">Empowering you with clear, actionable health information</p>
      </div>
    </section>
  );
};

export default BlogHero;
