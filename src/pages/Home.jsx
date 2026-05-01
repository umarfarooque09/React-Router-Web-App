import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { ArrowRight, Users, Info, Mail } from "lucide-react";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 45%, #ecfdf5 100%)',
        py: { xs: 10, md: 14 }
      }}
    >
      <Container maxWidth="lg" className="py-10 px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <Box className="text-center mb-16">
        <Typography
          variant="h2"
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
        >
          Welcome to MyApp
        </Typography>

        <Typography
          variant="h5"
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
        >
          Discover amazing features and explore our platform with ease.
        </Typography>

        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowRight className="w-5 h-5" />}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold"
        >
          Get Started
        </Button>
      </Box>

      {/* CARDS SECTION */}
      <Grid container spacing={4} className="mb-20">

        {/* USERS CARD */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className="p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 h-64 flex flex-col justify-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <Typography variant="h6" className="text-2xl font-bold mb-3 text-gray-800">
              User Management
            </Typography>
            <Typography className="text-gray-600">
              Manage users and their details with our intuitive interface.
            </Typography>
          </Paper>
        </Grid>

        {/* ABOUT CARD */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className="p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 h-64 flex flex-col justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Info className="w-10 h-10 text-green-600" />
            </div>
            <Typography variant="h6" className="text-2xl font-bold mb-3 text-gray-800">
              About Us
            </Typography>
            <Typography className="text-gray-600">
              Learn more about our mission and what we stand for.
            </Typography>
          </Paper>
        </Grid>

        {/* CONTACT CARD */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className="p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 h-64 flex flex-col justify-center">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Mail className="w-10 h-10 text-purple-600" />
            </div>
            <Typography variant="h6" className="text-2xl font-bold mb-3 text-gray-800">
              Contact
            </Typography>
            <Typography className="text-gray-600">
              Get in touch with us anytime you need assistance.
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Container>
    </Box>
  );
};

export default Home;