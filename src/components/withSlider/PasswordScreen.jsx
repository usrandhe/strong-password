import { useState } from 'react';
import { Container, Box, Button, TextField, LinearProgress } from '@mui/material';
import PasswordCriteria from './PasswordCriteria';
import PasswordStrengthSlider from './PasswordStrengthSlider';

const PasswordScreen = () => {
    const [strength, setStrength] = useState(1);
    const [password, setPassword] = useState('');

    const handleChange = (_, newValue) => {
        if (newValue === 1) {
            handleReset();
        } else {
            setStrength(newValue);
            setPassword(generatePassword(newValue));
        }
    };

    const generatePassword = (strength) => {
        const length = 8 + strength * 2; // Adjust length based on strength
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:"<>?-=[];,.';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
    };

    const handleReset = () => {
        setStrength(1);
        setPassword('');
    };


    return (
        <Container style={{ marginTop: '50px', }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                border="1px solid #ccc"
                borderRadius="5px"
                padding="20px"
                maxWidth="400px"
                margin="0 auto"
                backgroundColor="white"
            >
                <PasswordCriteria password={password} />
                <PasswordStrengthSlider value={strength} onChange={handleChange} />
                <TextField
                    label="Password"
                    value={password}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    style={{ marginTop: '20px' }}
                />
                <LinearProgress
                    variant="determinate"
                    value={(strength / 5) * 100}
                    style={{ width: '100%', marginTop: '10px', marginBottom: '20px' }}
                    color={
                        strength === 5 ? 'success' : strength >= 3 ? 'warning' : 'error'
                    }
                />
                <Button
                    onClick={handleCopy}
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                >
                    Copy Password
                </Button>
                <Button
                    onClick={handleReset}
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px' }}
                >
                    Reset
                </Button>
            </Box>
        </Container>
    );
};

export default PasswordScreen;
