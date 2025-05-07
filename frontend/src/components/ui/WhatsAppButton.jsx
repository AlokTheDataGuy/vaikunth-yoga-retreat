import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber = '917300620149', message = 'Hello! I have a question about Vaikunth Yoga Retreat.' }) => {
  // Format the phone number (remove any non-digit characters)
  const formattedPhone = phoneNumber.replace(/\D/g, '');

  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  return (
    <WhatsAppButtonContainer href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <WhatsAppIcon>
        <FaWhatsapp />
      </WhatsAppIcon>
      <WhatsAppText>WhatsApp us</WhatsAppText>
    </WhatsAppButtonContainer>
  );
};

const WhatsAppButtonContainer = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  background-color: #25D366;
  color: white;
  padding: 8px 16px;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 15px;
    right: 15px;
    padding: 8px 12px;
  }
`;

const WhatsAppIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 22px;
    margin-right: 6px;
  }
`;

const WhatsAppText = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 13px;
  }
`;

export default WhatsAppButton;
