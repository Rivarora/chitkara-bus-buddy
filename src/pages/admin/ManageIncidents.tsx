import { mockIncidents, mockBuses, mockUsers } from '@/utils/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Check, Clock } from 'lucide-react';
import { toast } from 'sonner';

const ManageIncidents = () => {
  const handleResolve = (incidentId: string) => {
    toast.success('Incident marked as resolved');
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Manage Incidents</h1>
        <p className="text-muted-foreground mt-1">Review and resolve reported incidents</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            All Incidents ({mockIncidents.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockIncidents.map(incident => {
              const bus = mockBuses.find(b => b.id === incident.busId);
              const user = mockUsers.find(u => u.id === incident.userId);
              
              return (
                <div key={incident.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{bus?.busNumber}</p>
                        <Badge 
                          variant="secondary" 
                          className={incident.status === 'resolved' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}
                        >
                          {incident.status === 'resolved' ? (
                            <span className="flex items-center gap-1">
                              <Check className="h-3 w-3" />
                              Resolved
                            </span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Pending
                            </span>
                          )}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Reported by: {user?.name}</p>
                      <p className="text-sm mt-2">{incident.description}</p>
                      <p className="text-xs text-muted-foreground">{incident.date}</p>
                    </div>
                  </div>
                  {incident.status === 'pending' && (
                    <Button 
                      size="sm" 
                      onClick={() => handleResolve(incident.id)}
                      className="gap-2"
                    >
                      <Check className="h-4 w-4" />
                      Mark as Resolved
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageIncidents;
