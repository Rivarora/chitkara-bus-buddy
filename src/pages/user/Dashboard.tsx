import { Bus, Route, Clock } from 'lucide-react';
import { mockBuses, mockRoutes } from '@/utils/mockData';
import '../../styles/Dashboard.css';

const UserDashboard = () => {
  const activeBuses = mockBuses.filter(bus => bus.status === 'active');
  const myRoute = mockRoutes[0];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-description">Welcome back! Here's your bus information.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Active Buses</span>
            <Bus size={16} className="stat-icon" />
          </div>
          <div className="stat-value">{activeBuses.length}</div>
          <div className="stat-description">Currently running</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">My Route</span>
            <Route size={16} className="stat-icon" />
          </div>
          <div className="stat-value">{myRoute.name.split('-')[0].trim()}</div>
          <div className="stat-description">{myRoute.stops.length} stops</div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <span className="stat-label">Next Bus</span>
            <Clock size={16} className="stat-icon" />
          </div>
          <div className="stat-value">{myRoute.startTime}</div>
          <div className="stat-description">Arrives soon</div>
        </div>
      </div>

      <div>
        <h2 className="section-title">My Route</h2>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{myRoute.name}</h3>
          </div>
          <div className="card-content">
            <div className="flex items-center gap-2 text-sm mb-3">
              <Clock size={16} className="text-muted" />
              <span className="text-muted">
                {myRoute.startTime} - {myRoute.endTime}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium">Stops:</span>
              </div>
              <div className="flex" style={{flexWrap: 'wrap', gap: '0.5rem'}}>
                {myRoute.stops.map((stop, index) => (
                  <span key={index} className="badge badge-primary">
                    {stop}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h2 className="section-title">Active Buses</h2>
        <div className="bus-grid">
          {activeBuses.map(bus => (
            <div key={bus.id} className="card">
              <div className="card-header">
                <div className="flex items-start justify-between">
                  <h3 className="card-title flex items-center gap-2">
                    <Bus size={20} />
                    {bus.busNumber}
                  </h3>
                  <span className={`badge ${bus.status === 'active' ? 'badge-success' : 'badge-warning'}`}>
                    {bus.status}
                  </span>
                </div>
              </div>
              <div className="card-content">
                <div className="text-sm space-y-2">
                  <div className="flex items-center gap-2 text-muted">
                    Driver: <span className="font-medium" style={{color: 'var(--color-foreground)'}}>{bus.driver}</span>
                  </div>
                  <div>
                    <span className="text-muted">Capacity: </span>
                    <span className="font-medium">{bus.capacity} seats</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
