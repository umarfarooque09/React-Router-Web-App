import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserPage from './pages/UserPage';
import UserDetail from './pages/UserDetail';
import AdminPage from './pages/AdminPage';
import ErrorPage from './pages/ErrorPage';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const location = useLocation();
  const showNavbar =
    ['/home', '/about', '/contact', '/user', '/admin'].includes(location.pathname) ||
    location.pathname.startsWith('/user/');

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
      <div className="min-h-screen bg-gray-50">
        {showNavbar && <Navbar onLogout={handleLogout} currentUser={currentUser} />}
        
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
  );
}

export default App;