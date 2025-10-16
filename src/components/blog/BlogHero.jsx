import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogHero.css';

const BlogHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredPost = {
    category: 'Featured',
    readTime: '8 min read',
    date: 'December 15, 2025',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: '👨‍⚕️'
    },
    title: 'Understanding Your Medical Records: A Complete Guide',
    description: 'Learn how to decode medical jargon, understand test results, and take control of your health journey with confidence.',
    slug: 'understanding-medical-records-guide',
    tags: ['Medical Records', 'Patient Education', 'Healthcare']
  };

  return (
    <section className="blog-hero-new">
      <div className="blog-hero-header">
        <div className="blog-hero-content">
          <div className={`blog-badge ${isVisible ? 'visible' : ''}`}>
            <span className="pulse-dot"></span>
            <span>Latest Insights</span>
          </div>
          <h1 className={`blog-main-title ${isVisible ? 'visible' : ''}`}>
            Health insights for <span className="gradient-text">patients</span>
          </h1>
          <p className={`blog-main-subtitle ${isVisible ? 'visible' : ''}`}>
            Empowering you with clear, actionable health information
          </p>

          {/* Search Bar */}
          <div className={`blog-search ${isVisible ? 'visible' : ''}`}>
            <div className="search-container">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button className="search-clear" onClick={() => setSearchQuery('')}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="featured-post-container">
        <Link to={`/blog/${featuredPost.slug}`} className="featured-post">
          <div className="featured-post-image">
            <img
              src="/src/assets/ChatGPT Image Oct 4, 2025, 09_28_34 PM.png"
              alt={featuredPost.title}
            />
            <div className="featured-overlay"></div>
            <div className="featured-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L9.5 6.5L14 6.5L10.5 9.5L12 14L8 11L4 14L5.5 9.5L2 6.5L6.5 6.5L8 2Z" fill="currentColor"/>
              </svg>
              Featured
            </div>
          </div>

          <div className="featured-post-content">
            <div className="featured-post-meta">
              <span className="featured-category">{featuredPost.category}</span>
              <span className="meta-divider">•</span>
              <span className="featured-date">{featuredPost.date}</span>
              <span className="meta-divider">•</span>
              <span className="featured-read-time">{featuredPost.readTime}</span>
            </div>

            <h2 className="featured-post-title">{featuredPost.title}</h2>
            <p className="featured-post-description">{featuredPost.description}</p>

            <div className="featured-post-footer">
              <div className="featured-author">
                <div className="author-avatar">{featuredPost.author.avatar}</div>
                <span className="author-name">{featuredPost.author.name}</span>
              </div>

              <div className="featured-tags">
                {featuredPost.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="featured-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="read-more-arrow">
              <span>Read Article</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BlogHero;
