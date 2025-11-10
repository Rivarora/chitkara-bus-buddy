import { mockRoutes } from '@/utils/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPinned, Plus, Edit, Trash2, Clock } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

const ManageRoutes = () => {
  const handleEdit = (routeId: string) => {
    showToast('Edit functionality coming soon');
  };

  const handleDelete = (routeId: string) => {
    showToast('Route deleted successfully');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Routes</h1>
          <p className="text-muted-foreground mt-1">View and manage bus routes</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Route
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPinned className="h-5 w-5" />
            All Routes ({mockRoutes.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockRoutes.map(route => (
              <div key={route.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium text-lg">{route.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {route.startTime} - {route.endTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(route.id)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(route.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {route.stops.map((stop, index) => (
                    <Badge key={index} variant="secondary">
                      {stop}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageRoutes;
