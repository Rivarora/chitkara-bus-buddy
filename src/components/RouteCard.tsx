import { MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Route } from '@/utils/mockData';
import { Badge } from '@/components/ui/badge';

interface RouteCardProps {
  route: Route;
}

const RouteCard = ({ route }: RouteCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{route.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">
            {route.startTime} - {route.endTime}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Stops:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {route.stops.map((stop, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {stop}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RouteCard;
