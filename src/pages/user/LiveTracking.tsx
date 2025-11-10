import { mockBuses } from '@/utils/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Bus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const LiveTracking = () => {
  const activeBuses = mockBuses.filter(bus => bus.status === 'active' && bus.currentLocation);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Live Bus Tracking</h1>
        <p className="text-muted-foreground mt-1">Track your buses in real-time</p>
      </div>

      <Card className="h-[400px] bg-muted/30">
        <CardContent className="h-full flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground">Map integration coming soon</p>
            <p className="text-sm text-muted-foreground">Google Maps will be integrated here</p>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Active Buses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeBuses.map(bus => (
            <Card key={bus.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bus className="h-5 w-5 text-primary" />
                    {bus.busNumber}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">Driver: </span>
                  <span className="font-medium">{bus.driver}</span>
                </div>
                {bus.currentLocation && (
                  <div className="text-sm">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="font-mono text-xs">
                      {bus.currentLocation.lat.toFixed(4)}, {bus.currentLocation.lng.toFixed(4)}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
