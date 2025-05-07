import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import BlogCard from '../components/blog/BlogCard';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogSidebar from '../components/blog/BlogSidebar';
import BlogCategoryIcon from '../components/blog/BlogCategoryIcon';

// Utils
import { getImageUrl } from '../utils/imageUtils';

// No API import needed for sample data

const Blog = () => {
  // State for blog posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null); // Keep for error handling UI
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Intersection observer hooks for animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [postsRef, postsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Posts', count: posts.length },
    { id: 'yoga', name: 'Yoga', count: posts.filter(post => post.category === 'yoga').length },
    { id: 'meditation', name: 'Meditation', count: posts.filter(post => post.category === 'meditation').length },
    { id: 'ayurveda', name: 'Ayurveda', count: posts.filter(post => post.category === 'ayurveda').length },
    { id: 'wellness', name: 'Wellness', count: posts.filter(post => post.category === 'wellness').length },
    { id: 'spirituality', name: 'Spirituality', count: posts.filter(post => post.category === 'spirituality').length }
  ];

  // Popular tags
  const popularTags = [
    { id: 1, name: 'yoga' },
    { id: 2, name: 'meditation' },
    { id: 3, name: 'wellness' },
    { id: 4, name: 'ayurveda' },
    { id: 5, name: 'spirituality' },
    { id: 6, name: 'mindfulness' },
    { id: 7, name: 'healing' },
    { id: 8, name: 'himalaya' },
    { id: 9, name: 'retreat' },
    { id: 10, name: 'nature' }
  ];

  // Sample blog posts data
  const samplePosts = [
    {
      id: 1,
      title: 'The Ancient Wisdom of Yoga Philosophy',
      slug: 'ancient-wisdom-yoga-philosophy',
      excerpt: 'Explore the philosophical foundations of yoga and how they can transform your practice and daily life.',
      featuredImage: '/assets/images/blog.png',
      category: 'yoga',
      author: {
        name: 'Guru Amrit',
        avatar: getImageUrl('/assets/images/team/guru-amrit.jpg', 100, 100)
      },
      publishedAt: '2023-05-15T10:30:00Z',
      readTime: 8
    },
    {
      id: 2,
      title: 'Meditation Techniques for Beginners',
      slug: 'meditation-techniques-beginners',
      excerpt: 'Simple yet powerful meditation techniques that anyone can practice to find inner peace and mental clarity.',
      featuredImage: '/assets/images/blog.png',
      category: 'meditation',
      author: {
        name: 'Dr. Priya Sharma',
        avatar: getImageUrl('/assets/images/team/dr-priya.jpg', 100, 100)
      },
      publishedAt: '2023-06-02T14:15:00Z',
      readTime: 6
    },
    {
      id: 3,
      title: 'Ayurvedic Principles for Seasonal Wellness',
      slug: 'ayurvedic-principles-seasonal-wellness',
      excerpt: 'How to adapt your diet and lifestyle according to Ayurvedic wisdom for optimal health throughout the changing seasons.',
      featuredImage: '/assets/images/blog.png',
      category: 'ayurveda',
      author: {
        name: 'Vaidya Raj Kumar',
        avatar: getImageUrl('/assets/images/team/default.jpg', 100, 100)
      },
      publishedAt: '2023-06-20T09:45:00Z',
      readTime: 10
    },
    {
      id: 4,
      title: 'The Healing Power of Himalayan Herbs',
      slug: 'healing-power-himalayan-herbs',
      excerpt: 'Discover the medicinal properties of rare herbs that grow in the pristine Himalayan mountains and their traditional uses.',
      featuredImage: '/assets/images/blog.png',
      category: 'wellness',
      author: {
        name: 'Dr. Priya Sharma',
        avatar: getImageUrl('/assets/images/team/dr-priya.jpg', 100, 100)
      },
      publishedAt: '2023-07-05T11:20:00Z',
      readTime: 7
    },
    {
      id: 5,
      title: 'Understanding the Chakra System',
      slug: 'understanding-chakra-system',
      excerpt: 'A comprehensive guide to the seven main chakras and how balancing them can lead to physical, emotional, and spiritual wellbeing.',
      featuredImage: '/assets/images/blog.png',
      category: 'spirituality',
      author: {
        name: 'Guru Amrit',
        avatar: getImageUrl('/assets/images/team/guru-amrit.jpg', 100, 100)
      },
      publishedAt: '2023-07-18T16:30:00Z',
      readTime: 9
    },
    {
      id: 6,
      title: 'Yoga for Back Pain Relief',
      slug: 'yoga-back-pain-relief',
      excerpt: 'Gentle yoga poses and sequences specifically designed to alleviate back pain and improve spinal health.',
      featuredImage: '/assets/images/blog.png',
      category: 'yoga',
      author: {
        name: 'Neerja Singh',
        avatar: getImageUrl('/assets/images/team/default.jpg', 100, 100)
      },
      publishedAt: '2023-08-01T13:10:00Z',
      readTime: 5
    }
  ];

  // Fetch blog posts
  useEffect(() => {
    // Set loading state
    setLoading(true);

    // Use sample data directly
    setPosts(samplePosts);
    setLoading(false);
  }, []);

  // Filter posts by category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <main>
      {/* Hero Section */}
      <Section
        $backgroundImage="/assets/images/blog.png"
        $fullWidth={true}
        $overlay={true}
        ref={heroRef}
      >
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <HeroContent>
            <SectionHeading
              title="Wisdom & Insights"
              subtitle="Our Blog"
              align="center"
              color="light"
              withDivider
            />
            <HeroText>
              Explore our collection of articles on yoga, meditation, Ayurveda, wellness, and spiritual growth.
              Written by our experienced teachers and practitioners to inspire and guide your journey.
            </HeroText>
          </HeroContent>
        </motion.div>
      </Section>

      {/* Blog Posts Section */}
      <Section ref={postsRef}>
        <motion.div
          initial="hidden"
          animate={postsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Featured Post */}
          {!loading && !error && filteredPosts.length > 0 && (
            <FeaturedPost
              post={filteredPosts[0]}
              formatDate={formatDate}
            />
          )}

          <BlogLayout>
            <BlogMainContent>
              {/* Category Icons */}
              <CategoryIconsContainer>
                {categories.map(category => (
                  category.id !== 'all' && (
                    <CategoryIconItem
                      key={category.id}
                      $isActive={activeCategory === category.id}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <BlogCategoryIcon category={category.id} size="small" />
                      <CategoryIconName>{category.name}</CategoryIconName>
                    </CategoryIconItem>
                  )
                ))}
              </CategoryIconsContainer>

              {/* Blog Posts Grid */}
              {loading ? (
                <LoadingMessage>Loading blog posts...</LoadingMessage>
              ) : error ? (
                <ErrorMessage>{error}</ErrorMessage>
              ) : filteredPosts.length === 0 ? (
                <NoResults>
                  <p>No posts found matching your criteria. Please try a different search or category.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                  >
                    Reset Filters
                  </Button>
                </NoResults>
              ) : (
                <BlogGrid>
                  {filteredPosts.slice(1).map(post => (
                    <motion.div key={post.id} variants={fadeIn}>
                      <BlogCard
                        post={post}
                        formatDate={formatDate}
                      />
                    </motion.div>
                  ))}
                </BlogGrid>
              )}
            </BlogMainContent>

            <BlogSidebarContainer>
              <BlogSidebar
                categories={categories}
                recentPosts={posts.slice(0, 3)}
                popularTags={popularTags}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                formatDate={formatDate}
              />
            </BlogSidebarContainer>
          </BlogLayout>
        </motion.div>
      </Section>

      {/* Newsletter Section */}
      <Section $variant="primary">
        <NewsletterContainer>
          <SectionHeading
            title="Stay Updated"
            subtitle="Join Our Newsletter"
            align="center"
            color="light"
            withDivider
          />
          <NewsletterText>
            Subscribe to our newsletter to receive the latest articles, wellness tips, and retreat updates directly in your inbox.
          </NewsletterText>
          <NewsletterForm onSubmit={(e) => {
            e.preventDefault();
            // In a real app, this would submit to an API
            alert('Thank you for subscribing to our newsletter!');
            e.target.reset();
          }}>
            <NewsletterInput
              type="email"
              placeholder="Your email address"
              required
            />
            <Button type="submit" variant="accent">
              Subscribe
            </Button>
          </NewsletterForm>
        </NewsletterContainer>
      </Section>
    </main>
  );
};

// Styled Components
const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]} 0;
`;

const HeroText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing[6]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-top: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr;
  }
`;

const BlogMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const BlogSidebarContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: -1;
  }
`;

const CategoryIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  padding-bottom: ${({ theme }) => theme.spacing[6]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const CategoryIconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0.7)};

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }
`;

const CategoryIconName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.error};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

const NewsletterContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]} 0;
`;

const NewsletterText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: ${({ theme }) => theme.typography.fontSize.base};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }
`;

export default Blog;
