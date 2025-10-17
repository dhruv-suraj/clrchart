import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogPosts.css';

const BlogPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [observedPosts, setObservedPosts] = useState(new Set());
  const observerRef = useRef(null);

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
    // Reset observed posts when category changes
    setObservedPosts(new Set());

    // Set up intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setObservedPosts((prev) => new Set([...prev, parseInt(index)]));
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all post elements
    const postElements = document.querySelectorAll('.blog-article');
    postElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [selectedCategory, displayedPosts.length]);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <section className="blog-posts-section">
      <div className="blog-container">
        {/* Filter Pills */}
        <div className="blog-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category);
                setVisiblePosts(6);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Count */}
        <div className="blog-header">
          <h2 className="articles-count">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
          </h2>
        </div>

        {/* Articles */}
        <div className="blog-articles">
          {displayedPosts.map((post, index) => (
            <article
              key={index}
              data-index={index}
              className={`blog-article ${observedPosts.has(index) ? 'visible' : ''}`}
            >
              <Link to={`/blog/${post.slug}`} className="article-link">
                <div className="article-image-wrapper">
                  <img src={post.imageSrc} alt={post.title} className="article-image" />
                  <div className="image-overlay">
                    <span className="overlay-text">Read Article</span>
                  </div>
                </div>

                <div className="article-content">
                  <div className="article-category">{post.category}</div>

                  <h3 className="article-title">{post.title}</h3>

                  <p className="article-description">{post.description}</p>

                  <div className="article-meta">
                    <span className="meta-author">{post.author.name}</span>
                    <span className="meta-separator">·</span>
                    <span className="meta-date">{post.date}</span>
                    <span className="meta-separator">·</span>
                    <span className="meta-time">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Load More */}
        {visiblePosts < filteredPosts.length && (
          <div className="blog-load-more">
            <button className="load-more-btn" onClick={handleLoadMore}>
              View More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPosts;
