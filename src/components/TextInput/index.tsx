import React, { InputHTMLAttributes, useRef } from 'react';
import * as Styled from './styles';
export type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  onInputChange?: (value: string) => void;
  onInputBlur?: (value: string) => void;
  disabled?: boolean;
  errorMessage?: string;
  value?: string;
  icon?: React.ReactNode;
  reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  type = 'text',
  label,
  name,
  disabled = false,
  onInputChange,
  onInputBlur,
  errorMessage = '',
  value = '',
  icon = '',
  reference = null,
}: TextInputProps) => {
  const inputRef = useRef(reference);
  const handleChange = () => {
    const value = inputRef.current.value;
    if (onInputChange) {
      onInputChange(value);
    }
  };
  const handleBlur = () => {
    const value = inputRef.current.value;
    if (onInputBlur) {
      onInputBlur(value);
    }
  };

  return (
    <Styled.Container>
      <Styled.InputWrapper errorMessage={errorMessage}>
        <Styled.Input
          type={type}
          name={name}
          id={name}
          disabled={disabled}
          ref={inputRef}
          onChange={handleChange}
          placeholder={label}
          errorMessage={errorMessage}
          // defaultValue={value}
          value={value}
          onBlur={handleBlur}
        />

        <Styled.Label htmlFor={name}>{label}</Styled.Label>
        {icon}
      </Styled.InputWrapper>

      {!!errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}
    </Styled.Container>
  );
};
