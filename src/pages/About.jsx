import { Container, Typography, Box, Paper } from '@mui/material';
import { Users, Award, Clock } from 'lucide-react';

const About = () => {
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
        <div className="text-center mb-8">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            About Us
          </Typography>
          <Typography color="text.secondary" sx={{ mx: 'auto', maxWidth: 600 }}>
            We are passionate about creating exceptional digital experiences
            that help businesses grow and succeed.
          </Typography>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
            }}
          >
            <Typography fontSize={50} mb={2}>🚀</Typography>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Our Mission
            </Typography>
            <Typography color="text.secondary">
              To empower businesses and individuals with innovative solutions
              that drive growth and success in the digital age.
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
            }}
          >
            <Typography fontSize={50} mb={2}>🎯</Typography>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Our Vision
            </Typography>
            <Typography color="text.secondary">
              To be the leading provider of cutting-edge technology solutions
              that transform the way people work and live.
            </Typography>
          </Paper>
        </div>

        {/* Stats Section */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              }
            }}
          >
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <Users color="#16a34a" size={28} />
            </div>
            <Typography variant="h5" fontWeight="bold">
              10K+
            </Typography>
            <Typography color="text.secondary">
              Happy Users
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              }
            }}
          >
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <Award color="#16a34a" size={28} />
            </div>
            <Typography variant="h5" fontWeight="bold">
              50+
            </Typography>
            <Typography color="text.secondary">
              Awards Won
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(10px)',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              }
            }}
          >
            <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <Clock color="#16a34a" size={28} />
            </div>
            <Typography variant="h5" fontWeight="bold">
              5+
            </Typography>
            <Typography color="text.secondary">
              Years Experience
            </Typography>
          </Paper>
        </div>
      </Container>
    </Box>
  );
};

export default About;