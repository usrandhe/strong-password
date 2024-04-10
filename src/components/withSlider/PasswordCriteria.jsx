import { Box, Typography } from '@mui/material';

const PasswordCriteria = ({ password }) => {  
  const criteria = [
    { label: 'At least 8 characters', isValid: password.length >= 8 },
    { label: 'Contains uppercase letters', isValid: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letters', isValid: /[a-z]/.test(password) },
    { label: 'Contains numbers', isValid: /[0-9]/.test(password) },
    {
      label: 'Contains special characters',
      isValid: /[^A-Za-z0-9]/.test(password),
    },
  ];


  return (
    <Box>
      <ul>
      {criteria.map((criterion, index) => (
        <li>
        <Typography align='left'
          key={index}
          sx={{
            textDecoration: criterion.isValid ? 'line-through' : 'none',
            color: criterion.isValid ? 'text.disabled' : 'text.primary',
          }}
        >
          {criterion.label}
        </Typography></li>
      ))}</ul>
    </Box>
  );
};

export default PasswordCriteria;
