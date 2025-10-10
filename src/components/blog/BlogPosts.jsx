import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPosts.css';

const BlogPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All posts');

  const posts = [
    {
      category: 'Technology',
      readTime: '5 min read',
      title: 'Breaking down medical jargon',
      description: 'Simple strategies to understand complex medical terminology and reports',
      slug: 'breaking-down-medical-jargon',
      image: (
        <img src="/src/assets/ChatGPT Image Oct 4, 2025, 09_28_34 PM.png" alt="Understanding Medical Records" width="768" height="400" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      )
    },
    {
      category: 'Privacy',
      readTime: '5 min read',
      title: 'Patient data security explained',
      description: 'Essential tips for protecting your personal health information online',
      slug: 'patient-data-security-explained',
      image: (
        <img src="/src/assets/ChatGPT Image Oct 4, 2025, 09_31_12 PM.png" alt="Security Shield" width="768" height="400" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      )
    },
    {
      category: 'AI',
      readTime: '5 min read',
      title: 'AI in healthcare innovations',
      description: 'How artificial intelligence is revolutionizing patient communication and care',
      slug: 'ai-in-healthcare-innovations',
      image: (
        <img src="/src/assets/ChatGPT Image Oct 4, 2025, 09_33_06 PM.png" alt="AI Healthcare" width="768" height="400" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
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
              <Link to={`/blog/${post.slug}`} className="post-image-link">
                <div className="post-image">
                  {post.image}
                </div>
              </Link>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="post-title-link">
                  <h3 className="post-title">{post.title}</h3>
                </Link>
                <p className="post-description">{post.description}</p>
                <Link to={`/blog/${post.slug}`} className="post-link">
                  Read more <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-view-all">
          <button className="btn-view-all">View all</button>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
