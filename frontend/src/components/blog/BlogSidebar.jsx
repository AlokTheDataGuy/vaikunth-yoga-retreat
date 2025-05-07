import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';

const BlogSidebar = ({
  categories,
  recentPosts,
  popularTags,
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  formatDate
}) => {
  return (
    <SidebarWrapper>
      {/* Search Widget */}
      <SidebarWidget>
        <SidebarTitle>Search</SidebarTitle>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchContainer>
      </SidebarWidget>

      {/* Categories Widget */}
      <SidebarWidget>
        <SidebarTitle>Categories</SidebarTitle>
        <CategoryList>
          {categories.map(category => (
            <CategoryItem
              key={category.id}
              $isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              <CategoryName>{category.name}</CategoryName>
              {category.count && <CategoryCount>{category.count}</CategoryCount>}
            </CategoryItem>
          ))}
        </CategoryList>
      </SidebarWidget>

      {/* Recent Posts Widget */}
      <SidebarWidget>
        <SidebarTitle>Recent Posts</SidebarTitle>
        <RecentPostsList>
          {recentPosts.map(post => (
            <RecentPostItem key={post.id}>
              <RecentPostImage to={`/blog/${post.slug}`}>
                <img src={post.featuredImage} alt={post.title} />
              </RecentPostImage>
              <RecentPostContent>
                <RecentPostTitle to={`/blog/${post.slug}`}>
                  {post.title}
                </RecentPostTitle>
                <RecentPostDate>
                  <FaCalendarAlt />
                  <span>{formatDate(post.publishedAt)}</span>
                </RecentPostDate>
              </RecentPostContent>
            </RecentPostItem>
          ))}
        </RecentPostsList>
      </SidebarWidget>

      {/* Popular Tags Widget */}
      <SidebarWidget>
        <SidebarTitle>Popular Tags</SidebarTitle>
        <TagsCloud>
          {popularTags.map(tag => (
            <TagItem key={tag.id} to={`/blog?tag=${tag.name}`}>
              #{tag.name}
            </TagItem>
          ))}
        </TagsCloud>
      </SidebarWidget>

      {/* Newsletter Widget */}
      <SidebarWidget>
        <SidebarTitle>Newsletter</SidebarTitle>
        <NewsletterText>
          Subscribe to our newsletter to receive the latest articles and updates.
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
          <NewsletterButton type="submit">
            Subscribe
          </NewsletterButton>
        </NewsletterForm>
      </SidebarWidget>
    </SidebarWrapper>
  );
};

// Styled Components
const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

const SidebarWidget = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const SidebarTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  padding-right: ${({ theme }) => theme.spacing[12]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.charcoal};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.primary : theme.colors.gray[700]};
  font-weight: ${({ $isActive, theme }) => $isActive ? theme.typography.fontWeight.medium : theme.typography.fontWeight.normal};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    padding-left: ${({ theme }) => theme.spacing[2]};
  }
`;

const CategoryName = styled.span``;

const CategoryCount = styled.span`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;

const RecentPostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const RecentPostItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const RecentPostImage = styled(Link)`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const RecentPostContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecentPostTitle = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray[900]};
  text-decoration: none;
  line-height: 1.4;
  margin-bottom: ${({ theme }) => theme.spacing[1]};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const RecentPostDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const TagsCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const TagItem = styled(Link)`
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

const NewsletterText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  background-color: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.charcoal};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(42, 93, 69, 0.2);
  }
`;

const NewsletterButton = styled.button`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentDark};
  }
`;

export default BlogSidebar;
