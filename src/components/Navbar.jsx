import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { LogOut, Home, Info, Mail, Users } from 'lucide-react';

const Navbar = ({ onLogout, currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <AppBar position="static" className="bg-gradient-to-r from-blue-600 to-purple-600">
      <Toolbar className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-3">
        <Typography variant="h6" className="flex-1 font-bold text-white">
          MyApp
        </Typography>
        <Box className="flex flex-wrap items-center gap-2">
          <Button color="inherit" onClick={() => navigate('/home')} startIcon={<Home className="w-5 h-5" />}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate('/about')} startIcon={<Info className="w-5 h-5" />}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate('/contact')} startIcon={<Mail className="w-5 h-5" />}>
            Contact
          </Button>
          <Button color="inherit" onClick={() => navigate('/user')} startIcon={<Users className="w-5 h-5" />}>
            Users
          </Button>
          {currentUser && (
            <Button color="inherit" onClick={handleLogout} startIcon={<LogOut className="w-5 h-5" />}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;