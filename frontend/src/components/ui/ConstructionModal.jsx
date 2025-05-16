import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';

const ConstructionModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the modal has been shown before in this session
    const hasModalBeenShown = sessionStorage.getItem('constructionModalShown');
    
    // If not shown before, display it
    if (!hasModalBeenShown) {
      setIsVisible(true);
      // Mark as shown for this session
      sessionStorage.setItem('constructionModalShown', 'true');
    }
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ModalContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <CloseButton onClick={closeModal} aria-label="Close modal">
              <FaTimes />
            </CloseButton>
            
            <ModalContent>
              <ModalIcon>🏗️</ModalIcon>
              <ModalTitle>Site Under Construction</ModalTitle>
              <ModalMessage>
                Thank you for visiting Vaikunth Yoga Retreat. Our website is currently 
                undergoing improvements to enhance your experience. Some features may be 
                limited or unavailable during this time.
              </ModalMessage>
              <ModalActions>
                <Button 
                  variant="primary" 
                  onClick={closeModal}
                >
                  Continue to Site
                </Button>
              </ModalActions>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

// Styled Components
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex[50]};
  padding: ${({ theme }) => theme.spacing[4]};
`;

const ModalContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  width: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  background: transparent;
  border: none;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all ${({ theme }) => theme.animation.normal} ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.charcoal};
  }
`;

const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing[8]};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ModalIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ModalTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ModalMessage = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: center;
`;

export default ConstructionModal;
