import React from 'react';
import { render } from '@testing-library/react';
import PasswordCriteria from './PasswordCriteria';

describe('PasswordCriteria component', () => {
  test('displays correct criteria based on password', () => {
    const { getByText } = render(<PasswordCriteria password="Abc123@" />);

    expect(getByText('At least 8 characters')).toBeInTheDocument();
    expect(getByText('Contains uppercase letters')).toBeInTheDocument();
    expect(getByText('Contains lowercase letters')).toBeInTheDocument();
    expect(getByText('Contains numbers')).toBeInTheDocument();
    expect(getByText('Contains special characters')).toBeInTheDocument();
  });

  test('displays criteria as valid or invalid based on password', () => {
    const { getByText } = render(<PasswordCriteria password="Abc123@" />);

    expect(getByText('At least 8 characters').classList.contains('valid')).toBe(
      true
    );
    expect(
      getByText('Contains uppercase letters').classList.contains('valid')
    ).toBe(true);
    expect(
      getByText('Contains lowercase letters').classList.contains('valid')
    ).toBe(true);
    expect(getByText('Contains numbers').classList.contains('valid')).toBe(
      true
    );
    expect(
      getByText('Contains special characters').classList.contains('valid')
    ).toBe(true);
  });

  test('displays criteria as invalid if password does not meet criteria', () => {
    const { getByText } = render(<PasswordCriteria password="abc123" />);

    expect(
      getByText('At least 8 characters').classList.contains('invalid')
    ).toBe(true);
    expect(
      getByText('Contains uppercase letters').classList.contains('invalid')
    ).toBe(true);
    expect(
      getByText('Contains lowercase letters').classList.contains('valid')
    ).toBe(false);
    expect(getByText('Contains numbers').classList.contains('invalid')).toBe(
      true
    );
    expect(
      getByText('Contains special characters').classList.contains('invalid')
    ).toBe(true);
  });
});
