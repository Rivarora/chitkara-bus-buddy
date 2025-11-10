import { useState } from 'react';
import { mockIncidents, mockBuses } from '@/utils/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Check, Clock } from 'lucide-react';
import { toast } from 'sonner';

const IncidentReport = () => {
  const [busId, setBusId] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Incident reported successfully!');
    setBusId('');
    setDescription('');
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Report Incident</h1>
        <p className="text-muted-foreground mt-1">Let us know about any issues or feedback</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Report New Incident
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bus">Select Bus</Label>
              <Select value={busId} onValueChange={setBusId} required>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a bus" />
                </SelectTrigger>
                <SelectContent>
                  {mockBuses.map(bus => (
                    <SelectItem key={bus.id} value={bus.id}>
                      {bus.busNumber} - {bus.driver}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the incident or issue..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Report
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockIncidents.map(incident => {
              const bus = mockBuses.find(b => b.id === incident.busId);
              return (
                <div key={incident.id} className="p-4 border rounded-lg space-y-2">
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
                      <p className="text-sm text-muted-foreground">{incident.description}</p>
                      <p className="text-xs text-muted-foreground">{incident.date}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncidentReport;
