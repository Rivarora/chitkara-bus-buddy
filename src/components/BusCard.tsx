import { Bus as BusIcon, User, Circle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bus } from '@/utils/mockData';
import { cn } from '@/lib/utils';

interface BusCardProps {
  bus: Bus;
}

const BusCard = ({ bus }: BusCardProps) => {
  const statusColors = {
    active: 'bg-success',
    inactive: 'bg-muted',
    maintenance: 'bg-warning'
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <BusIcon className="h-5 w-5 text-primary" />
            {bus.busNumber}
          </CardTitle>
          <div className="flex items-center gap-1.5">
            <Circle className={cn('h-2.5 w-2.5 rounded-full', statusColors[bus.status])} />
            <span className="text-xs font-medium capitalize text-muted-foreground">
              {bus.status}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          <span>{bus.driver}</span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground">Capacity: </span>
          <span className="font-medium">{bus.capacity} seats</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusCard;
