import { useState } from 'react';
import { Bell, User, LogOut, Bus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfile = () => {
    navigate(user?.role === 'admin' ? '/admin/profile' : '/user/profile');
    setShowDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">
          <Bus />
        </div>
        <h1 className="navbar-title">Busify</h1>
      </div>

      <div className="navbar-actions">
        <button className="btn btn-ghost btn-icon navbar-notification">
          <Bell size={20} />
          <span className="navbar-notification-badge"></span>
        </button>

        <div className="navbar-user">
          <button
            className="btn btn-ghost btn-icon"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="navbar-user-avatar">
              <User />
            </div>
          </button>

          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                <div className="dropdown-header-name">{user?.name}</div>
                <div className="dropdown-header-email">{user?.email}</div>
              </div>
              <button className="dropdown-item" onClick={handleProfile}>
                <User size={16} />
                Profile
              </button>
              <button className="dropdown-item" onClick={handleLogout}>
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
