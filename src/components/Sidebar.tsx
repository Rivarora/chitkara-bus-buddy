import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  MapPin,
  Route,
  Bell,
  CreditCard,
  AlertCircle,
  User,
  Users,
  Bus,
  MapPinned,
  Megaphone,
  FileText,
  Wallet
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();

  const userLinks = [
    { to: '/user/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/user/live-tracking', icon: MapPin, label: 'Live Tracking' },
    { to: '/user/my-route', icon: Route, label: 'My Route' },
    { to: '/user/notifications', icon: Bell, label: 'Notifications' },
    { to: '/user/payment', icon: CreditCard, label: 'Payment' },
    { to: '/user/incident-report', icon: AlertCircle, label: 'Report Incident' },
    { to: '/user/profile', icon: User, label: 'Profile' },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/manage-users', icon: Users, label: 'Manage Users' },
    { to: '/admin/manage-buses', icon: Bus, label: 'Manage Buses' },
    { to: '/admin/manage-routes', icon: MapPinned, label: 'Manage Routes' },
    { to: '/admin/manage-notifications', icon: Megaphone, label: 'Notifications' },
    { to: '/admin/manage-incidents', icon: FileText, label: 'Incidents' },
    { to: '/admin/manage-payments', icon: Wallet, label: 'Payments' },
    { to: '/admin/profile', icon: User, label: 'Profile' },
  ];

  const links = user?.role === 'admin' ? adminLinks : userLinks;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
