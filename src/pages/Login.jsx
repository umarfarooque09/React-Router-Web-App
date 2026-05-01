import { useState, useEffect } from 'react';
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
import { Mail, Lock } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSignupAlert, setShowSignupAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setShowSignupAlert(false), 5000);
    return () => clearTimeout(timeout);
  }, [showSignupAlert]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      setError('Invalid credentials');
      return;
    }

    if (email === 'admin@admin.com' && password === 'admin123') {
      onLogin({ email, role: 'admin', name: 'Admin' });
      navigate('/admin');
      return;
    }

    onLogin(user);
    navigate('/home');
  };

  const checkSignupRequired = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.length === 0) {
      setShowSignupAlert(true);
      setTimeout(() => navigate('/signup'), 2000);
    }
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
              background: 'linear-gradient(135deg, #22c55e, #14b8a6)', // SAME
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
            }}
          >
            <Mail color="white" size={36} />
          </Box>

          {/* Title */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Sign in to your account
          </Typography>

          {showSignupAlert && (
            <Alert severity="warning" sx={{ mb: 2 }}>
              Please sign up first!
            </Alert>
          )}

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={checkSignupRequired}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                background: 'linear-gradient(135deg, #22c55e, #14b8a6)', // SAME
                boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #16a34a, #0d9488)'
                }
              }}
            >
              Login →
            </Button>
          </form>

          {/* Footer */}
          <Typography variant="body2" mt={3}>
            Don’t have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              style={{
                color: '#16a34a', // match green theme
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Sign up
            </span>
          </Typography>

          {/* Admin Info */}
          <Box
            sx={{
              mt: 3,
              p: 2,
              borderRadius: 2,
              background: '#f0fdf4' // light green
            }}
          >
            <Typography variant="caption" color="text.secondary">
              Admin: admin@admin.com / admin123
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;