import { Container, Typography, Box, Paper, TextField, Button } from '@mui/material';
import { Mail, ExternalLink, Send } from 'lucide-react';
const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2ff 0%, #dbeafe 45%, #ecfdf5 100%)',
        py: { xs: 10, md: 14 }
      }}
    >
      <Container maxWidth="lg" className="px-4 sm:px-6 lg:px-8">
      <Box className="text-center mb-16">
        <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Contact Us
        </Typography>
        <Typography className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get in touch with us. We’d love to hear from you.
        </Typography>
      </Box>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="lg:col-span-1">
          <Paper elevation={0} className="p-8 h-full bg-white rounded-3xl shadow-lg">
            <Typography variant="h5" className="font-bold text-gray-800 mb-8">
              Send us a message
            </Typography>

            <form>
              <TextField
                fullWidth
                label="Your Name"
                className="mb-6"
                slotProps={{
                  input: { className: 'py-3' }
                }}
              />

              <TextField
                fullWidth
                label="Email"
                type="email"
                className="mb-6"
                slotProps={{
                  input: { className: 'py-3' }
                }}
              />

              <TextField
                fullWidth
                label="Message"
                multiline
                rows={5}
                className="mb-6"
                slotProps={{
                  input: { className: 'py-3' }
                }}
              />

              <Button
                fullWidth
                variant="contained"
                size="large"
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-4 font-semibold rounded-2xl"
                endIcon={<Send className="w-5 h-5" />}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1">
          <Paper elevation={0} className="p-8 h-full bg-gradient-to-br from-indigo-50 to-blue-100 rounded-3xl shadow-lg">
            <Typography variant="h5" className="font-bold text-gray-800 mb-8">
              Contact Information
            </Typography>

            <Box className="space-y-6">

              {/* Email */}
              <Box className="flex items-start space-x-4 p-4 bg-white/50 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <Box>
                  <Typography className="font-semibold text-gray-800">Email</Typography>
                  <Typography className="text-gray-600">
                    muhammadumarfarooque569@gmail.com
                  </Typography>
                </Box>
              </Box>

              {/* LinkedIn */}
              <Box className="flex items-start space-x-4 p-4 bg-white/50 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-blue-700" />
                </div>
                <Box>
                  <Typography className="font-semibold text-gray-800">LinkedIn</Typography>
                  <Typography className="text-gray-600 break-all">
                    https://www.linkedin.com/in/muhammad-umar-farooque-24967137a/
                  </Typography>
                </Box>
              </Box>

            </Box>
          </Paper>
        </div>
      </div>
    </Container>
    </Box>
  );
};

export default Contact;