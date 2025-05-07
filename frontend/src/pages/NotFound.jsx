import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Components
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

// Utils
import { getImageUrl } from '../utils/imageUtils';

const NotFound = () => {
  return (
    <main>
      <NotFoundSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NotFoundContainer>
            <NotFoundImage 
              src={getImageUrl('/assets/images/404.png', 400, 300)} 
              alt="Page not found" 
            />
            <NotFoundContent>
              <NotFoundCode>404</NotFoundCode>
              <NotFoundTitle>Page Not Found</NotFoundTitle>
              <NotFoundMessage>
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable.
              </NotFoundMessage>
              <NotFoundActions>
                <Button to="/" variant="primary" size="large">
                  Return Home
                </Button>
                <Button to="/contact" variant="outline" size="large">
                  Contact Us
                </Button>
              </NotFoundActions>
              <SuggestedLinks>
                <SuggestedLinksTitle>You might be looking for:</SuggestedLinksTitle>
                <SuggestedLinksList>
                  <SuggestedLinkItem>
                    <Link to="/programs">Our Programs</Link>
                  </SuggestedLinkItem>
                  <SuggestedLinkItem>
                    <Link to="/accommodations">Accommodations</Link>
                  </SuggestedLinkItem>
                  <SuggestedLinkItem>
                    <Link to="/booking">Book a Retreat</Link>
                  </SuggestedLinkItem>
                  <SuggestedLinkItem>
                    <Link to="/blog">Blog & Resources</Link>
                  </SuggestedLinkItem>
                </SuggestedLinksList>
              </SuggestedLinks>
            </NotFoundContent>
          </NotFoundContainer>
        </motion.div>
      </NotFoundSection>
    </main>
  );
};

// Styled Components
const NotFoundSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.offWhite};
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[8]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
    gap: ${({ theme }) => theme.spacing[10]};
  }
`;

const NotFoundImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 300px;
    margin-bottom: 0;
  }
`;

const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NotFoundCode = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['6xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const NotFoundTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const NotFoundMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const NotFoundActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const SuggestedLinks = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

const SuggestedLinksTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

const SuggestedLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SuggestedLinkItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: underline;
    }
  }
`;

export default NotFound;
