import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 45%, #ecfdf5 100%)',
        py: { xs: 12, md: 16 }
      }}
    >
      <Container maxWidth="sm" className="px-4 sm:px-6">
        <Paper className="p-12 text-center rounded-3xl shadow-2xl max-w-lg mx-auto bg-white/95">
          <div className="w-32 h-32 bg-red-100 rounded-3xl mx-auto mb-8 flex items-center justify-center">
            <AlertCircle className="w-20 h-20 text-red-500" />
          </div>

          <Typography variant="h1" className="text-8xl font-black text-gray-800 mb-4">
            404
          </Typography>
          <Typography variant="h4" className="font-bold text-gray-800 mb-2">
            Page Not Found
          </Typography>
          <Typography className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </Typography>

          <Box className="space-y-4">
            <Button
              variant="contained"
              size="large"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-3 text-lg font-bold rounded-2xl shadow-xl"
              onClick={() => navigate('/home')}
              startIcon={<ArrowLeft className="w-5 h-5" />}
            >
              Go Home
            </Button>
            <Button
              variant="outlined"
              size="large"
              className="px-12 py-3 text-lg font-semibold rounded-2xl border-2 border-gray-300 hover:bg-gray-50"
              onClick={() => navigate('/user')}
            >
              View Users
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ErrorPage;
