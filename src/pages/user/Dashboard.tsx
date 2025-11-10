import { mockBuses, mockRoutes } from '@/utils/mockData';
import BusCard from '@/components/BusCard';
import RouteCard from '@/components/RouteCard';
import { Bus, Route, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserDashboard = () => {
  const activeBuses = mockBuses.filter(bus => bus.status === 'active');
  const myRoute = mockRoutes[0]; // Assume first route is user's route

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's your bus information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Buses</CardTitle>
            <Bus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{activeBuses.length}</div>
            <p className="text-xs text-muted-foreground">Currently running</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">My Route</CardTitle>
            <Route className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{myRoute.name.split('-')[0].trim()}</div>
            <p className="text-xs text-muted-foreground">{myRoute.stops.length} stops</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Bus</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{myRoute.startTime}</div>
            <p className="text-xs text-muted-foreground">Arrives soon</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">My Route</h2>
        <RouteCard route={myRoute} />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Active Buses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeBuses.map(bus => (
            <BusCard key={bus.id} bus={bus} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
