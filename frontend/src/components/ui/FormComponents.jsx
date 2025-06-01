import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash, FaExclamationCircle } from 'react-icons/fa';

// Form Group Component
export const FormGroup = ({ children, error, ...props }) => (
  <FormGroupContainer $hasError={!!error} {...props}>
    {children}
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </FormGroupContainer>
);

// Form Label Component
export const FormLabel = ({ children, required, ...props }) => (
  <Label {...props}>
    {children}
    {required && <RequiredIndicator>*</RequiredIndicator>}
  </Label>
);

// Form Input Component
export const FormInput = ({ error, ...props }) => (
  <Input $hasError={!!error} {...props} />
);

// Password Input Component
export const PasswordInput = ({ error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PasswordContainer>
      <Input
        type={showPassword ? 'text' : 'password'}
        $hasError={!!error}
        {...props}
      />
      <PasswordToggle
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        tabIndex={-1}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </PasswordToggle>
    </PasswordContainer>
  );
};

// Form Select Component
export const FormSelect = ({ error, children, placeholder, ...props }) => (
  <SelectContainer>
    <Select $hasError={!!error} {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </Select>
  </SelectContainer>
);

// Form Textarea Component
export const FormTextarea = ({ error, ...props }) => (
  <Textarea $hasError={!!error} {...props} />
);

// Form Checkbox Component
export const FormCheckbox = ({ label, error, ...props }) => (
  <CheckboxContainer>
    <CheckboxInput {...props} />
    <CheckboxLabel htmlFor={props.id}>
      <CheckboxCustom />
      {label}
    </CheckboxLabel>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </CheckboxContainer>
);

// Form Radio Component
export const FormRadio = ({ label, error, ...props }) => (
  <RadioContainer>
    <RadioInput {...props} />
    <RadioLabel htmlFor={props.id}>
      <RadioCustom />
      {label}
    </RadioLabel>
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </RadioContainer>
);

// Form Row Component
export const FormRow = ({ children, ...props }) => (
  <Row {...props}>{children}</Row>
);

// Form Section Component
export const FormSection = ({ title, children, ...props }) => (
  <Section {...props}>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </Section>
);

// Error Message Component
export const ErrorMessage = ({ children, icon = true }) => (
  <ErrorText>
    {icon && <FaExclamationCircle />}
    {children}
  </ErrorText>
);

// Success Message Component
export const SuccessMessage = ({ children }) => (
  <SuccessText>{children}</SuccessText>
);

// Loading Spinner Component
export const LoadingSpinner = ({ size = 'md' }) => (
  <Spinner $size={size} />
);

// Styled Components
const FormGroupContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[800]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  letter-spacing: 0.025em;
`;

const RequiredIndicator = styled.span`
  color: ${({ theme }) => theme.colors.red[500]};
  margin-left: ${({ theme }) => theme.spacing[1]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ $hasError, theme }) =>
    $hasError ? theme.colors.red[400] : theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[500] : theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[100] : `${theme.colors.accent}20`},
      0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[400] : theme.colors.gray[400]};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: not-allowed;
    box-shadow: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  }

  /* Better styling for different input types */
  &[type="date"], &[type="time"], &[type="datetime-local"] {
    color: ${({ theme }) => theme.colors.gray[700]};

    &::-webkit-calendar-picker-indicator {
      color: ${({ theme }) => theme.colors.accent};
      cursor: pointer;
    }
  }

  &[type="number"] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray[500]};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[1]};

  &:hover {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const SelectContainer = styled.div`
  position: relative;
`;

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ $hasError, theme }) =>
    $hasError ? theme.colors.red[400] : theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right ${({ theme }) => theme.spacing[3]} center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: ${({ theme }) => theme.spacing[10]};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  appearance: none;

  &:focus {
    outline: none;
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[500] : theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[100] : `${theme.colors.accent}20`},
      0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[400] : theme.colors.gray[400]};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: not-allowed;
    box-shadow: none;
  }

  option {
    color: ${({ theme }) => theme.colors.gray[900]};
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing[2]};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  border: 2px solid ${({ $hasError, theme }) =>
    $hasError ? theme.colors.red[400] : theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.white};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  &:focus {
    outline: none;
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[500] : theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[100] : `${theme.colors.accent}20`},
      0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red[400] : theme.colors.gray[400]};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[50]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: not-allowed;
    box-shadow: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const CheckboxCustom = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  position: relative;
  transition: all 0.2s ease;

  ${CheckboxInput}:checked + ${CheckboxLabel} & {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};

    &::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
      font-weight: bold;
    }
  }

  ${CheckboxInput}:focus + ${CheckboxLabel} & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent}20;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  display: none;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const RadioCustom = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 50%;
  position: relative;
  transition: all 0.2s ease;

  ${RadioInput}:checked + ${RadioLabel} & {
    border-color: ${({ theme }) => theme.colors.accent};

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.accent};
      border-radius: 50%;
    }
  }

  ${RadioInput}:focus + ${RadioLabel} & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent}20;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.red[600]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.red[50]};
  border: 1px solid ${({ theme }) => theme.colors.red[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  animation: slideIn 0.2s ease-out;

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.red[500]};
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SuccessText = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.green[700]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-top: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.colors.green[50]};
  border: 1px solid ${({ theme }) => theme.colors.green[200]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  animation: slideIn 0.2s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Spinner = styled.div`
  width: ${({ $size }) =>
    $size === 'sm' ? '16px' :
    $size === 'lg' ? '32px' : '24px'};
  height: ${({ $size }) =>
    $size === 'sm' ? '16px' :
    $size === 'lg' ? '32px' : '24px'};
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
