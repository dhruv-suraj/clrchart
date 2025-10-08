import React, { useState } from 'react';
import './BlogPosts.css';

const BlogPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All posts');

  const posts = [
    {
      category: 'Technology',
      readTime: '5 min read',
      title: 'Understanding your medical records matters',
      description: 'Learn how to decode complex medical language and take control of your health journey',
      image: (
        <img src="/src/assets/ChatGPT Image Oct 4, 2025, 09_28_34 PM.png" alt="Understanding Medical Records" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      )
    },
    {
      category: 'Privacy',
      readTime: '5 min read',
      title: 'Protecting patient data in the digital age',
      description: 'Explore the latest strategies for securing personal health information',
      image: (
        <svg width="100%" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A1A2E" />
              <stop offset="100%" stopColor="#2A2A3E" />
            </linearGradient>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5FC4C4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#5FC4C4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="600" height="300" fill="url(#securityGradient)" />

          {/* Glow effect */}
          <circle cx="300" cy="150" r="120" fill="url(#glowGradient)" />

          {/* Shield */}
          <path d="M300 60 L360 85 L360 145 Q360 185, 300 220 Q240 185, 240 145 L240 85 Z"
                fill="rgba(95, 196, 196, 0.2)" stroke="#5FC4C4" strokeWidth="3" />

          {/* Lock */}
          <rect x="280" y="130" width="40" height="50" rx="5" fill="#5FC4C4" opacity="0.8" />
          <path d="M285 130 L285 115 Q285 100, 300 100 Q315 100, 315 115 L315 130"
                stroke="#5FC4C4" strokeWidth="3" fill="none" />
          <circle cx="300" cy="155" r="5" fill="#1A1A2E" />

          {/* Tech circles */}
          <circle cx="200" cy="100" r="30" stroke="#5FC4C4" strokeWidth="1" fill="none" opacity="0.3" />
          <circle cx="400" cy="100" r="30" stroke="#5FC4C4" strokeWidth="1" fill="none" opacity="0.3" />
          <circle cx="200" cy="200" r="30" stroke="#5FC4C4" strokeWidth="1" fill="none" opacity="0.3" />
          <circle cx="400" cy="200" r="30" stroke="#5FC4C4" strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
      )
    },
    {
      category: 'AI',
      readTime: '5 min read',
      title: 'How AI is transforming patient care',
      description: 'Discover breakthrough technologies making healthcare more accessible and understandable',
      image: (
        <svg width="100%" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9A76" />
              <stop offset="100%" stopColor="#F7B267" />
            </linearGradient>
          </defs>
          <rect width="600" height="300" fill="url(#aiGradient)" />

          {/* Brain network */}
          <circle cx="200" cy="150" r="80" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />

          {/* Neural nodes */}
          <circle cx="180" cy="120" r="6" fill="rgba(255,255,255,0.8)" />
          <circle cx="220" cy="115" r="6" fill="rgba(255,255,255,0.8)" />
          <circle cx="200" cy="150" r="6" fill="rgba(255,255,255,0.8)" />
          <circle cx="170" cy="180" r="6" fill="rgba(255,255,255,0.8)" />
          <circle cx="230" cy="175" r="6" fill="rgba(255,255,255,0.8)" />

          {/* Connections */}
          <line x1="180" y1="120" x2="220" y2="115" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <line x1="180" y1="120" x2="200" y2="150" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <line x1="220" y1="115" x2="200" y2="150" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <line x1="200" y1="150" x2="170" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <line x1="200" y1="150" x2="230" y2="175" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />

          {/* Medical cross */}
          <path d="M400 100 L400 200 M350 150 L450 150" stroke="rgba(255,255,255,0.5)" strokeWidth="12" strokeLinecap="round" />
          <circle cx="400" cy="150" r="60" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
        </svg>
      )
    }
  ];

  return (
    <section className="blog-posts">
      <div className="blog-posts-container">
        <div className="blog-filter">
          <select
            className="filter-dropdown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>All posts</option>
            <option>Technology</option>
            <option>Privacy</option>
            <option>AI</option>
          </select>
        </div>

        <div className="posts-grid">
          {posts.map((post, index) => (
            <article key={index} className="post-card">
              <div className="post-image">
                {post.image}
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-description">{post.description}</p>
                <a href="#" className="post-link">
                  Read more <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
