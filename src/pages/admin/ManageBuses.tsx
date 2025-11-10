import { mockBuses } from '@/utils/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bus, Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const ManageBuses = () => {
  const handleEdit = (busId: string) => {
    toast.info('Edit functionality coming soon');
  };

  const handleDelete = (busId: string) => {
    toast.success('Bus deleted successfully');
  };

  const statusColors = {
    active: 'bg-success/10 text-success',
    inactive: 'bg-muted',
    maintenance: 'bg-warning/10 text-warning'
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Buses</h1>
          <p className="text-muted-foreground mt-1">View and manage bus fleet</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Bus
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bus className="h-5 w-5" />
            All Buses ({mockBuses.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockBuses.map(bus => (
              <div key={bus.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{bus.busNumber}</p>
                    <Badge variant="secondary" className={statusColors[bus.status]}>
                      {bus.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Driver: {bus.driver}</p>
                  <p className="text-sm text-muted-foreground">Capacity: {bus.capacity} seats</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(bus.id)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(bus.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageBuses;
