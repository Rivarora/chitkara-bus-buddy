import { mockRoutes, mockBuses } from '@/utils/mockData';
import RouteCard from '@/components/RouteCard';
import { Card, CardContent } from '@/components/ui/card';
import { Bus, User, Clock } from 'lucide-react';

const MyRoute = () => {
  const myRoute = mockRoutes[0]; // Assume first route is user's assigned route
  const myBus = mockBuses.find(bus => bus.id === myRoute.busId);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Route</h1>
        <p className="text-muted-foreground mt-1">Your assigned bus route details</p>
      </div>

      <RouteCard route={myRoute} />

      {myBus && (
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Bus className="h-5 w-5 text-primary" />
              Assigned Bus
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Bus Number</span>
                <span className="font-medium">{myBus.busNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Driver</span>
                <span className="font-medium">{myBus.driver}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Capacity</span>
                <span className="font-medium">{myBus.capacity} seats</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className="font-medium capitalize">{myBus.status}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Schedule Information
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Departure Time</span>
              <span className="font-medium">{myRoute.startTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Arrival Time</span>
              <span className="font-medium">{myRoute.endTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Stops</span>
              <span className="font-medium">{myRoute.stops.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyRoute;
