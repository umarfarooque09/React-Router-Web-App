import { Container, Typography, Box, Paper, Button, Grid, Chip } from '@mui/material';
import { Shield, Users, Database, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 45%, #ecfdf5 100%)',
        py: { xs: 8, md: 12 }
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={10}>
          <Box
            sx={{
              width: 100,
              height: 100,
              mx: 'auto',
              mb: 3,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
            }}
          >
            <Shield color="white" size={48} />
          </Box>

          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Admin Dashboard
          </Typography>

          <Typography color="text.secondary">
            Manage your system with full control
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {/* Users */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 4,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                transition: '0.3s',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  mx: 'auto',
                  mb: 2,
                  borderRadius: 3,
                  background: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Users color="#16a34a" size={30} />
              </Box>

              <Typography fontWeight="bold" mb={1}>
                User Management
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={3}>
                Manage all users
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #16a34a, #0d9488)'
                  }
                }}
                onClick={() => navigate('/user')}
              >
                Manage
              </Button>
            </Paper>
          </Grid>

          {/* Database */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 4,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                transition: '0.3s',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  mx: 'auto',
                  mb: 2,
                  borderRadius: 3,
                  background: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Database color="#16a34a" size={30} />
              </Box>

              <Typography fontWeight="bold" mb={1}>
                Database
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={3}>
                Monitor data
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #16a34a, #0d9488)'
                  }
                }}
              >
                View
              </Button>
            </Paper>
          </Grid>

          {/* Settings */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 4,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                transition: '0.3s',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  mx: 'auto',
                  mb: 2,
                  borderRadius: 3,
                  background: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Settings color="#16a34a" size={30} />
              </Box>

              <Typography fontWeight="bold" mb={1}>
                Settings
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={3}>
                System config
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #16a34a, #0d9488)'
                  }
                }}
              >
                Open
              </Button>
            </Paper>
          </Grid>

          {/* Admin Powers */}
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 4,
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  mx: 'auto',
                  mb: 2,
                  borderRadius: 3,
                  background: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Shield color="#16a34a" size={30} />
              </Box>

              <Typography fontWeight="bold" mb={2}>
                Admin Powers
              </Typography>

              <Box display="flex" justifyContent="center" gap={1} flexWrap="wrap">
                <Chip label="Super Admin" sx={{ bgcolor: '#dcfce7' }} />
                <Chip label="Full Access" sx={{ bgcolor: '#dcfce7' }} />
                <Chip label="No Limits" sx={{ bgcolor: '#dcfce7' }} />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer Status */}
        <Box
          sx={{
            mt: 10,
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #22c55e, #14b8a6)',
            color: 'white'
          }}
        >
          <Typography fontWeight="bold" mb={1}>
            👑 Admin Status: ACTIVE
          </Typography>
          <Typography variant="body2">
            You have full administrative privileges.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminPage;