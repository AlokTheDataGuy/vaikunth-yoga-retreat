import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Components
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

// Utils
import { getImageUrl } from '../utils/imageUtils';

// No API import needed for sample data

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null); // Keep for error handling UI
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Intersection observer hooks for animations
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [relatedRef, relatedInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Sample blog post data
  const samplePost = {
    id: 1,
    title: 'The Ancient Wisdom of Yoga Philosophy',
    slug: 'ancient-wisdom-yoga-philosophy',
    content: `
      <p>Yoga is not just a physical practice but a profound philosophical system that has guided seekers for thousands of years. The word "yoga" comes from the Sanskrit root "yuj," meaning to join or unite, symbolizing the union of individual consciousness with universal consciousness.</p>

      <h2>The Eight Limbs of Yoga</h2>

      <p>Patanjali's Yoga Sutras outline the eight-limbed path (Ashtanga) of yoga:</p>

      <ol>
        <li><strong>Yama (Ethical Standards)</strong>: These are moral imperatives including non-violence (ahimsa), truthfulness (satya), non-stealing (asteya), continence (brahmacharya), and non-covetousness (aparigraha).</li>
        <li><strong>Niyama (Self-Discipline)</strong>: Personal observances including cleanliness (saucha), contentment (santosha), austerity (tapas), self-study (svadhyaya), and surrender to a higher power (ishvara pranidhana).</li>
        <li><strong>Asana (Posture)</strong>: The physical practice of yoga poses, designed to prepare the body for meditation.</li>
        <li><strong>Pranayama (Breath Control)</strong>: Techniques to control and expand vital energy through breath.</li>
        <li><strong>Pratyahara (Sensory Withdrawal)</strong>: Withdrawing the senses from external objects to focus inward.</li>
        <li><strong>Dharana (Concentration)</strong>: Focusing the mind on a single point.</li>
        <li><strong>Dhyana (Meditation)</strong>: Uninterrupted flow of concentration.</li>
        <li><strong>Samadhi (Enlightenment)</strong>: The state of transcendence, where the individual self merges with the universal consciousness.</li>
      </ol>

      <h2>The Yoga of the Bhagavad Gita</h2>

      <p>The Bhagavad Gita, a sacred text within the epic Mahabharata, outlines three main paths of yoga:</p>

      <ul>
        <li><strong>Karma Yoga</strong>: The yoga of selfless action, performing one's duties without attachment to results.</li>
        <li><strong>Bhakti Yoga</strong>: The yoga of devotion, cultivating love and surrender to the divine.</li>
        <li><strong>Jnana Yoga</strong>: The yoga of knowledge, seeking wisdom and understanding of the true nature of reality.</li>
      </ul>

      <p>Later, Raja Yoga (the royal path) was added, encompassing Patanjali's eight limbs.</p>

      <h2>Applying Yogic Philosophy in Modern Life</h2>

      <p>The ancient wisdom of yoga remains remarkably relevant in our modern world. Here are some ways to incorporate yogic philosophy into daily life:</p>

      <ul>
        <li><strong>Practice Ahimsa (Non-violence)</strong>: Cultivate compassion toward all beings, including yourself. This extends to thoughts, words, and actions.</li>
        <li><strong>Embrace Santosha (Contentment)</strong>: Find gratitude for what you have rather than constantly craving more.</li>
        <li><strong>Apply Svadhyaya (Self-study)</strong>: Regularly reflect on your thoughts, actions, and patterns to better understand yourself.</li>
        <li><strong>Balance Effort and Surrender</strong>: Work diligently toward your goals while accepting that some things are beyond your control.</li>
        <li><strong>Live Mindfully</strong>: Bring awareness to everyday activities, from eating to walking to conversing.</li>
      </ul>

      <p>By integrating these philosophical principles with a regular asana practice, we can experience yoga as it was originally intended—a holistic system for physical, mental, and spiritual well-being.</p>

      <p>Remember, yoga is not about perfecting poses but about using the practice as a tool for self-transformation and inner peace. As the Bhagavad Gita states, "Yoga is the journey of the self, through the self, to the self."</p>
    `,
    featuredImage: '/assets/images/blog.png',
    category: 'yoga',
    tags: ['philosophy', 'spirituality', 'yoga practice', 'meditation'],
    author: {
      name: 'Guru Amrit',
      avatar: getImageUrl('/assets/images/team/guru-amrit.jpg', 100, 100),
      bio: 'Guru Amrit has been teaching yoga and meditation for over 30 years. He studied with masters in India and has dedicated his life to sharing the ancient wisdom of yoga.'
    },
    publishedAt: '2023-05-15T10:30:00Z',
    readTime: 8
  };

  // Sample related posts
  const sampleRelatedPosts = [
    {
      id: 2,
      title: 'Meditation Techniques for Beginners',
      slug: 'meditation-techniques-beginners',
      excerpt: 'Simple yet powerful meditation techniques that anyone can practice to find inner peace and mental clarity.',
      featuredImage: '/assets/images/blog.png',
      category: 'meditation',
      publishedAt: '2023-06-02T14:15:00Z'
    },
    {
      id: 5,
      title: 'Understanding the Chakra System',
      slug: 'understanding-chakra-system',
      excerpt: 'A comprehensive guide to the seven main chakras and how balancing them can lead to physical, emotional, and spiritual wellbeing.',
      featuredImage: '/assets/images/blog.png',
      category: 'spirituality',
      publishedAt: '2023-07-18T16:30:00Z'
    },
    {
      id: 6,
      title: 'Yoga for Back Pain Relief',
      slug: 'yoga-back-pain-relief',
      excerpt: 'Gentle yoga poses and sequences specifically designed to alleviate back pain and improve spinal health.',
      featuredImage: '/assets/images/blog.png',
      category: 'yoga',
      publishedAt: '2023-08-01T13:10:00Z'
    }
  ];

  // Fetch blog post
  useEffect(() => {
    // Set loading state
    setLoading(true);

    // Use sample data directly
    setPost(samplePost);
    setRelatedPosts(sampleRelatedPosts);
    setLoading(false);
  }, [id]);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingMessage>Loading article...</LoadingMessage>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <Button to="/blog" variant="primary">
          Return to Blog
        </Button>
      </ErrorContainer>
    );
  }

  if (!post) {
    return (
      <ErrorContainer>
        <ErrorMessage>Article not found.</ErrorMessage>
        <Button to="/blog" variant="primary">
          Return to Blog
        </Button>
      </ErrorContainer>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <Section
        backgroundImage={post.featuredImage}
        fullWidth
        overlay
      >
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CategoryBadge>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</CategoryBadge>
            <HeroTitle>{post.title}</HeroTitle>
            <HeroMeta>
              <MetaItem>
                <FaCalendarAlt />
                <span>{formatDate(post.publishedAt)}</span>
              </MetaItem>
              <MetaItem>
                <FaUser />
                <span>{post.author.name}</span>
              </MetaItem>
              <MetaItem>
                <FaClock />
                <span>{post.readTime} min read</span>
              </MetaItem>
            </HeroMeta>
          </motion.div>
        </HeroContent>
      </Section>

      {/* Content Section */}
      <Section ref={contentRef}>
        <motion.div
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <BlogContainer>
            <BlogContent>
              {/* Author Info */}
              <AuthorContainer>
                <AuthorAvatar src={post.author.avatar} alt={post.author.name} />
                <AuthorInfo>
                  <AuthorName>{post.author.name}</AuthorName>
                  <AuthorBio>{post.author.bio}</AuthorBio>
                </AuthorInfo>
              </AuthorContainer>

              {/* Blog Content */}
              <BlogText dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <TagsContainer>
                  <TagsLabel>Tags:</TagsLabel>
                  <TagsList>
                    {post.tags.map(tag => (
                      <Tag key={tag} to={`/blog?tag=${tag}`}>
                        #{tag}
                      </Tag>
                    ))}
                  </TagsList>
                </TagsContainer>
              )}

              {/* Share */}
              <ShareContainer>
                <ShareLabel>Share this article:</ShareLabel>
                <ShareButtons>
                  <ShareButton aria-label="Share on Facebook">
                    <FaFacebookF />
                  </ShareButton>
                  <ShareButton aria-label="Share on Twitter">
                    <FaTwitter />
                  </ShareButton>
                  <ShareButton aria-label="Share on LinkedIn">
                    <FaLinkedinIn />
                  </ShareButton>
                  <ShareButton aria-label="Share on Pinterest">
                    <FaPinterestP />
                  </ShareButton>
                </ShareButtons>
              </ShareContainer>
            </BlogContent>
          </BlogContainer>
        </motion.div>
      </Section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <Section variant="light" ref={relatedRef}>
          <motion.div
            initial="hidden"
            animate={relatedInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <SectionHeading
              title="You May Also Like"
              subtitle="Related Articles"
              align="center"
              withDivider
            />

            <RelatedPostsGrid>
              {relatedPosts.map(relatedPost => (
                <RelatedPostCard key={relatedPost.id}>
                  <RelatedPostImage to={`/blog/${relatedPost.slug}`}>
                    <img src={relatedPost.featuredImage} alt={relatedPost.title} />
                  </RelatedPostImage>
                  <RelatedPostContent>
                    <RelatedPostCategory>
                      {relatedPost.category.charAt(0).toUpperCase() + relatedPost.category.slice(1)}
                    </RelatedPostCategory>
                    <RelatedPostTitle to={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </RelatedPostTitle>
                    <RelatedPostDate>
                      {formatDate(relatedPost.publishedAt)}
                    </RelatedPostDate>
                  </RelatedPostContent>
                </RelatedPostCard>
              ))}
            </RelatedPostsGrid>

            <ButtonContainer>
              <Button to="/blog" variant="outline">
                View All Articles
              </Button>
            </ButtonContainer>
          </motion.div>
        </Section>
      )}

      {/* Newsletter Section */}
      <Section variant="primary">
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
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const LoadingMessage = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const ErrorMessage = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[16]} 0;
`;

const CategoryBadge = styled.div`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const HeroMeta = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BlogContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[12]};
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  padding-bottom: ${({ theme }) => theme.spacing[8]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const AuthorAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const AuthorBio = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1.6;
`;

const BlogText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray[800]};

  h2 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-top: ${({ theme }) => theme.spacing[10]};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  h3 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-top: ${({ theme }) => theme.spacing[8]};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }

  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    padding-left: ${({ theme }) => theme.spacing[6]};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }

  strong {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    padding-left: ${({ theme }) => theme.spacing[6]};
    margin: ${({ theme }) => theme.spacing[8]} 0;
    font-style: italic;
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    margin: ${({ theme }) => theme.spacing[6]} 0;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[10]};
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const TagsLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Tag = styled(Link)`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  padding-top: ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

const ShareLabel = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const ShareButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[700]};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};
  margin-top: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RelatedPostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const RelatedPostImage = styled(Link)`
  display: block;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const RelatedPostContent = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`;

const RelatedPostCategory = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const RelatedPostTitle = styled(Link)`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  text-decoration: none;
  line-height: 1.4;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const RelatedPostDate = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[10]};
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

export default BlogPost;
