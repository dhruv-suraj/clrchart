import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPosts.css';

const BlogPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [cardsVisible, setCardsVisible] = useState([]);

  const categories = ['All', 'Technology', 'Privacy', 'AI', 'Patient Education', 'Wellness'];

  const allPosts = [
    {
      category: 'Technology',
      readTime: '5 min read',
      date: 'Dec 14, 2025',
      author: { name: 'Dr. Emily Carter', avatar: '👩‍⚕️' },
      title: 'Breaking down medical jargon',
      description: 'Simple strategies to understand complex medical terminology and reports',
      slug: 'breaking-down-medical-jargon',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_28_34 PM.png',
      tags: ['Medical Terms', 'Education']
    },
    {
      category: 'Privacy',
      readTime: '5 min read',
      date: 'Dec 13, 2025',
      author: { name: 'John Smith', avatar: '🔒' },
      title: 'Patient data security explained',
      description: 'Essential tips for protecting your personal health information online',
      slug: 'patient-data-security-explained',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_31_12 PM.png',
      tags: ['Security', 'Privacy']
    },
    {
      category: 'AI',
      readTime: '5 min read',
      date: 'Dec 12, 2025',
      author: { name: 'Dr. Sarah Chen', avatar: '🤖' },
      title: 'AI in healthcare innovations',
      description: 'How artificial intelligence is revolutionizing patient communication and care',
      slug: 'ai-in-healthcare-innovations',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_33_06 PM.png',
      tags: ['AI', 'Innovation']
    },
    {
      category: 'Patient Education',
      readTime: '7 min read',
      date: 'Dec 11, 2025',
      author: { name: 'Dr. Michael Lee', avatar: '📚' },
      title: 'Reading your lab results with confidence',
      description: 'A comprehensive guide to interpreting common laboratory tests',
      slug: 'reading-lab-results',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_28_34 PM.png',
      tags: ['Lab Tests', 'Guide']
    },
    {
      category: 'Wellness',
      readTime: '6 min read',
      date: 'Dec 10, 2025',
      author: { name: 'Lisa Johnson', avatar: '💚' },
      title: 'Taking control of your health journey',
      description: 'Practical steps to become an active participant in your healthcare',
      slug: 'control-health-journey',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_31_12 PM.png',
      tags: ['Wellness', 'Empowerment']
    },
    {
      category: 'Technology',
      readTime: '4 min read',
      date: 'Dec 9, 2025',
      author: { name: 'Alex Rodriguez', avatar: '💻' },
      title: 'Digital health records explained',
      description: 'Understanding electronic health records and how to access yours',
      slug: 'digital-health-records',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_33_06 PM.png',
      tags: ['EHR', 'Technology']
    },
    {
      category: 'Privacy',
      readTime: '8 min read',
      date: 'Dec 8, 2025',
      author: { name: 'Dr. Patricia Brown', avatar: '🛡️' },
      title: 'HIPAA compliance for patients',
      description: 'Your rights and protections under healthcare privacy laws',
      slug: 'hipaa-compliance',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_28_34 PM.png',
      tags: ['HIPAA', 'Rights']
    },
    {
      category: 'AI',
      readTime: '6 min read',
      date: 'Dec 7, 2025',
      author: { name: 'Dr. James Wilson', avatar: '🔬' },
      title: 'Machine learning in diagnostics',
      description: 'How AI is improving accuracy in medical diagnosis',
      slug: 'ml-diagnostics',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_31_12 PM.png',
      tags: ['ML', 'Diagnosis']
    },
    {
      category: 'Patient Education',
      readTime: '5 min read',
      date: 'Dec 6, 2025',
      author: { name: 'Dr. Rachel Green', avatar: '👨‍⚕️' },
      title: 'Understanding prescription labels',
      description: 'Decode medication instructions and warnings for safe use',
      slug: 'prescription-labels',
      imageSrc: '/src/assets/ChatGPT Image Oct 4, 2025, 09_33_06 PM.png',
      tags: ['Medications', 'Safety']
    }
  ];

  const filteredPosts = selectedCategory === 'All'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  useEffect(() => {
    // Trigger card animations on mount and filter change
    setCardsVisible([]);
    const timer = setTimeout(() => {
      setCardsVisible(displayedPosts.map((_, i) => i));
    }, 100);
    return () => clearTimeout(timer);
  }, [selectedCategory, displayedPosts.length]);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <section className="blog-posts">
      <div className="blog-posts-container">
        {/* Category Filter Pills */}
        <div className="blog-filter-pills">
          <div className="filter-pills-container">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisiblePosts(6);
                }}
              >
                {category}
                {selectedCategory === category && (
                  <span className="pill-indicator"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Count */}
        <div className="posts-header">
          <h2 className="posts-count">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </h2>
          <div className="posts-sort">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 5H15M5 9H13M7 13H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Latest first</span>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="posts-grid">
          {displayedPosts.map((post, index) => (
            <article
              key={index}
              className={`post-card ${cardsVisible.includes(index) ? 'visible' : ''}`}
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              <Link to={`/blog/${post.slug}`} className="post-card-link">
                <div className="post-image-wrapper">
                  <img src={post.imageSrc} alt={post.title} className="post-image" />
                  <div className="post-image-overlay">
                    <span className="read-overlay">Read article</span>
                  </div>
                  <div className="post-category-badge">{post.category}</div>
                </div>

                <div className="post-content">
                  <div className="post-meta-top">
                    <div className="post-author">
                      <span className="author-avatar">{post.author.avatar}</span>
                      <span className="author-name">{post.author.name}</span>
                    </div>
                    <div className="post-date">{post.date}</div>
                  </div>

                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>

                  <div className="post-footer">
                    <div className="post-tags">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="post-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="post-read-time">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 5V8L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <div className="blog-load-more">
            <button className="btn-load-more" onClick={handleLoadMore}>
              <span>Load more articles</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPosts;
