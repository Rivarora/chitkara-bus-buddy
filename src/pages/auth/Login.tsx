import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import { Bus } from 'lucide-react';
import '../../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await login(email, password);

    if (success) {
      showToast('Login successful!', 'success');
      const user = JSON.parse(localStorage.getItem('busify_user') || '{}');
      navigate(user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard');
    } else {
      showToast('Invalid credentials. Try: admin@chitkara.edu.in or student@chitkara.edu.in', 'error');
    }

    setIsLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <Bus />
          </div>
          <h1 className="auth-title">Welcome to Busify</h1>
          <p className="auth-description">Sign in to your Chitkara University account</p>
        </div>
        <div className="auth-content">
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="your.email@chitkara.edu.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          <div className="auth-footer">
            <span className="auth-footer-muted">Don't have an account? </span>
            <Link to="/register" className="auth-footer-link">
              Register
            </Link>
          </div>
          <div className="auth-demo">
            <p className="auth-demo-title">Demo Accounts:</p>
            <p>Admin: admin@chitkara.edu.in</p>
            <p>Student: student@chitkara.edu.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
