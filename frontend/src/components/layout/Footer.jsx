import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterTop>
        <FooterColumn>
          <FooterLogo>
            <img src="/assets/images/logo-no-bg-1.png" alt="Vaikunth Yoga Retreat" />
          </FooterLogo>
          <FooterText>
            A sanctuary for spiritual growth and holistic wellness nestled in the serene Himalayan mountains of Auli, India.
          </FooterText>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterLinks>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/programs">Our Programs</FooterLink>
            <FooterLink to="/accommodations">Accommodations</FooterLink>
            <FooterLink to="/testimonials">Testimonials</FooterLink>
            <FooterLink to="/blog">Blog & Resources</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Programs</FooterHeading>
          <FooterLinks>
            <FooterLink to="/programs/yoga-teacher-training">Yoga Teacher Training</FooterLink>
            <FooterLink to="/programs/meditation-retreat">Meditation Retreat</FooterLink>
            <FooterLink to="/programs/ayurveda-panchakarma">Ayurveda Panchakarma</FooterLink>
            <FooterLink to="/programs/spiritual-healing">Spiritual Healing</FooterLink>
            <FooterLink to="/programs/himalayan-trek">Himalayan Trek & Yoga</FooterLink>
            <FooterLink to="/programs/wellness-detox">Wellness Detox</FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Contact Us</FooterHeading>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <ContactText>Vaikunth Yoga Retreat, Auli, Joshimath, Uttarakhand, India - 246443</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <ContactText>+91 98765 43210</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>info@vaikunthyogaretreat.com</ContactText>
            </ContactItem>
          </ContactInfo>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your email address" />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </FooterColumn>
      </FooterTop>

      <FooterBottom>
        <Copyright>
          © {currentYear} Vaikunth Yoga Retreat. All rights reserved.
        </Copyright>
        <FooterBottomLinks>
          <FooterBottomLink to="/privacy-policy">Privacy Policy</FooterBottomLink>
          <FooterBottomLink to="/terms-of-service">Terms of Service</FooterBottomLink>
          <FooterBottomLink to="/sitemap">Sitemap</FooterBottomLink>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spacing[12]};
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing[8]};
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  display: flex;
  justify-content: flex-start;

  img {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: auto;
    borderRadius: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;

    img {
      width: 100px;
    }
  }
`;

const FooterText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: all ${({ theme }) => theme.animation.normal} ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const FooterHeading = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing[6]};

    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  transition: all ${({ theme }) => theme.animation.normal} ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ContactIcon = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  margin-top: 3px;
`;

const ContactText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin: 0;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const NewsletterInput = styled.input`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: white;
  color: ${({ theme }) => theme.colors.charcoal};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  width: 100%;
  -webkit-appearance: none; /* Fix for iOS styling */

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  }
`;

const NewsletterButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.animation.normal} ease;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[6]} ${theme.spacing[6]}`};
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const FooterBottomLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: rgba(255, 255, 255, 0.7);

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default Footer;
