import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside and handle body scroll
  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling when menu is open
      document.body.style.overflow = 'hidden';

      const handleClickOutside = (e) => {
        // Check if the click is outside the mobile menu content
        if (isOpen && e.target.closest('.mobile-menu-content') === null &&
            !e.target.closest('.mobile-menu-button')) {
          setIsOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
        // Restore scrolling when menu is closed
        document.body.style.overflow = '';
      };
    } else {
      // Ensure scrolling is enabled when menu is closed
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavbarContent $scrolled={scrolled}>
        <LogoContainer>
          <Link to="/">
            <Logo $scrolled={scrolled}>
              <img src="/assets/images/logo-symbol.png" alt="Vaikunth Yoga Retreat" />
            </Logo>
          </Link>
        </LogoContainer>

        {/* Desktop Navigation */}
        <NavLinks>
          <NavLink to="/" $isActive={location.pathname === '/'} $scrolled={scrolled}>Home</NavLink>
          <NavLink to="/about" $isActive={location.pathname === '/about'} $scrolled={scrolled}>About</NavLink>
          <NavLink to="/programs" $isActive={location.pathname.includes('/programs')} $scrolled={scrolled}>Programs</NavLink>
          <NavLink to="/accommodations" $isActive={location.pathname === '/accommodations'} $scrolled={scrolled}>Accommodations</NavLink>
          <NavLink to="/testimonials" $isActive={location.pathname === '/testimonials'} $scrolled={scrolled}>Testimonials</NavLink>
          <NavLink to="/blog" $isActive={location.pathname.includes('/blog')} $scrolled={scrolled}>Blog</NavLink>
          <NavLink to="/contact" $isActive={location.pathname === '/contact'} $scrolled={scrolled}>Contact</NavLink>
        </NavLinks>

        <NavActions>
          <BookButton to="/booking">Reserve Your Retreat</BookButton>
          <MobileMenuButton
            onClick={() => setIsOpen(!isOpen)}
            $scrolled={scrolled}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="mobile-menu-button"
          >
            <FaBars />
          </MobileMenuButton>
        </NavActions>
      </NavbarContent>

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileCloseButton onClick={() => setIsOpen(false)} aria-label="Close menu">
              <FaTimes />
            </MobileCloseButton>
            <MobileMenuContent className="mobile-menu-content">
              <MobileNavLinks>
                <MobileNavLink to="/" $isActive={location.pathname === '/'} onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                <MobileNavLink to="/about" $isActive={location.pathname === '/about'} onClick={() => setIsOpen(false)}>About</MobileNavLink>
                <MobileNavLink to="/programs" $isActive={location.pathname.includes('/programs')} onClick={() => setIsOpen(false)}>Programs</MobileNavLink>
                <MobileNavLink to="/accommodations" $isActive={location.pathname === '/accommodations'} onClick={() => setIsOpen(false)}>Accommodations</MobileNavLink>
                <MobileNavLink to="/testimonials" $isActive={location.pathname === '/testimonials'} onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
                <MobileNavLink to="/blog" $isActive={location.pathname.includes('/blog')} onClick={() => setIsOpen(false)}>Blog</MobileNavLink>
                <MobileNavLink to="/contact" $isActive={location.pathname === '/contact'} onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                <MobileBookButton to="/booking" onClick={() => setIsOpen(false)}>Reserve Your Retreat</MobileBookButton>
              </MobileNavLinks>
            </MobileMenuContent>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

// Styled Components
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex[50]};
  transition: all ${({ theme }) => theme.animation.normal} ease;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) =>
    $scrolled ? 'blur(8px)' : 'none'};
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadows.md : 'none'};
  height: auto;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[6]}`};
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  }
`;

const LogoContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex[20]};
`;

const Logo = styled.div`
  img {
    width: 120px;
    height: auto;
    filter: drop-shadow(0 0 6px rgba(255, 253, 253, 0.3));
    padding: 4px;
    borderRadius: 50%;
    transition: all ${({ theme }) => theme.animation.normal} ease;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      width: 100px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 80px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ $isActive, theme, $scrolled }) =>
    $isActive
      ? theme.colors.secondary
      : $scrolled
        ? theme.colors.charcoal
        : theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  text-shadow: ${({ $scrolled }) =>
    $scrolled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.5)'};
  transition: color ${({ theme }) => theme.animation.normal} ease,
              text-shadow ${({ theme }) => theme.animation.normal} ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.animation.normal} ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const BookButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.animation.normal} ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(255, 255, 255, 0.8)' : 'none'};
  border: none;
  font-size: 1.5rem;
  color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.charcoal : theme.colors.white};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex[20]};
  text-shadow: ${({ $scrolled }) =>
    $scrolled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.5)'};
  transition: all ${({ theme }) => theme.animation.normal} ease;
  width: 40px;
  height: 40px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled ? theme.shadows.sm : 'none'};

  &:hover {
    background-color: ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.gray[200] : 'rgba(255, 255, 255, 0.1)'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.98);
  z-index: ${({ theme }) => theme.zIndex[40]};
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  /* Ensure content is properly positioned regardless of scroll position */
  height: 100vh;
  width: 100vw;
  overscroll-behavior: contain; /* Prevent scroll chaining */
  -webkit-overflow-scrolling: touch;
`;

const MobileCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.charcoal};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex[50]};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
  }
`;

const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: ${({ theme }) => theme.spacing[6]};
  padding-top: 80px;
  padding-bottom: 80px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[6]};
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[4]};
`;

const MobileNavLink = styled(Link)`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.secondary : theme.colors.charcoal};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  text-shadow: none;
  padding: ${({ theme }) => theme.spacing[2]};
  width: 100%;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: ${({ $isActive }) => ($isActive ? '40px' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.animation.normal} ease;
  }

  &:hover:after {
    width: 40px;
  }
`;

const MobileBookButton = styled(BookButton)`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  width: 100%;
  max-width: 250px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export default Navbar;
