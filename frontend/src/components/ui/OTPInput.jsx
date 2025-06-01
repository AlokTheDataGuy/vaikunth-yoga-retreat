import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const OTPInput = ({ 
  length = 6, 
  value = '', 
  onChange, 
  onComplete,
  disabled = false,
  error = false,
  autoFocus = false,
  ...props 
}) => {
  const [otp, setOtp] = useState(value.split('').slice(0, length));
  const inputRefs = useRef([]);

  useEffect(() => {
    setOtp(value.split('').slice(0, length));
  }, [value, length]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (index, digit) => {
    if (disabled) return;

    // Only allow digits
    if (!/^\d*$/.test(digit)) return;

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    const otpString = newOtp.join('');
    onChange?.(otpString);

    // Auto-focus next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onComplete when all digits are filled
    if (otpString.length === length && onComplete) {
      onComplete(otpString);
    }
  };

  const handleKeyDown = (index, e) => {
    if (disabled) return;

    // Handle backspace
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newOtp = [...otp];
      
      if (otp[index]) {
        // Clear current digit
        newOtp[index] = '';
        setOtp(newOtp);
        onChange?.(newOtp.join(''));
      } else if (index > 0) {
        // Move to previous input and clear it
        newOtp[index - 1] = '';
        setOtp(newOtp);
        onChange?.(newOtp.join(''));
        inputRefs.current[index - 1]?.focus();
      }
    }
    
    // Handle arrow keys
    else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    
    // Handle paste
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (otp.join('').length === length && onComplete) {
        onComplete(otp.join(''));
      }
    }
  };

  const handlePaste = (e) => {
    if (disabled) return;

    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    const digits = pastedData.replace(/\D/g, '').slice(0, length);
    
    if (digits) {
      const newOtp = digits.split('').concat(Array(length - digits.length).fill(''));
      setOtp(newOtp);
      onChange?.(digits);
      
      // Focus the next empty input or the last input
      const nextIndex = Math.min(digits.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      
      // Call onComplete if all digits are filled
      if (digits.length === length && onComplete) {
        onComplete(digits);
      }
    }
  };

  const handleFocus = (index) => {
    // Select all text when focusing
    inputRefs.current[index]?.select();
  };

  return (
    <Container {...props}>
      <InputContainer $error={error}>
        {Array.from({ length }, (_, index) => (
          <Input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={otp[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={() => handleFocus(index)}
            disabled={disabled}
            $error={error}
            $filled={!!otp[index]}
          />
        ))}
      </InputContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const Input = styled.input`
  width: 48px;
  height: 56px;
  border: 2px solid ${({ $error, $filled, theme }) => {
    if ($error) return theme.colors.red[400];
    if ($filled) return theme.colors.accent;
    return theme.colors.gray[300];
  }};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease;
  outline: none;

  &:focus {
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.red[500] : theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ $error, theme }) =>
      $error ? theme.colors.red[100] : `${theme.colors.accent}20`};
    transform: scale(1.05);
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.red[400] : theme.colors.gray[400]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: not-allowed;
  }

  /* Remove number input arrows */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 40px;
    height: 48px;
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 36px;
    height: 44px;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

export default OTPInput;
