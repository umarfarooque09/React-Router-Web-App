import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Paper,
  Container,
  InputAdornment
} from '@mui/material';
import { UserPlus, Mail, Lock, User } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find(user => user.email === formData.email)) {
      setError('Account already exists! Please login.');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    const newUser = { ...formData, id: Date.now(), role: 'user' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully!');
    navigate('/login');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 45%, #ecfdf5 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255,255,255,0.9)',
            textAlign: 'center'
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              mx: 'auto',
              mb: 2,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }}
          >
            <UserPlus color="white" size={36} />
          </Box>

          {/* Title */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Create your account
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              placeholder="Full Name"
              variant="outlined"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <User size={18} />
                  </InputAdornment>
                ),
                sx: { borderRadius: 3 }
              }}
              required
            />

            <TextField
              fullWidth
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail size={18} />
                  </InputAdornment>
                ),
                sx: { borderRadius: 3 }
              }}
              required
            />

            <TextField
              fullWidth
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock size={18} />
                  </InputAdornment>
                ),
                sx: { borderRadius: 3 }
              }}
              required
            />

            {/* Button */}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 3,
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '16px',
                background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
                boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #16a34a, #0d9488)'
                }
              }}
            >
              Create Account →
            </Button>
          </form>

          {/* Footer */}
          <Typography variant="body2" mt={3}>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              style={{
                color: '#2563eb',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Login
            </span>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Signup;