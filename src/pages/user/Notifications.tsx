import { mockNotifications } from '@/utils/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, Circle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Notifications = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
        <p className="text-muted-foreground mt-1">Stay updated with the latest announcements</p>
      </div>

      <div className="space-y-3">
        {mockNotifications.map(notification => (
          <Card key={notification.id} className={!notification.read ? 'border-primary/50' : ''}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${!notification.read ? 'bg-primary/10' : 'bg-muted'}`}>
                  <Bell className={`h-5 w-5 ${!notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{notification.title}</h3>
                    {!notification.read && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        New
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
