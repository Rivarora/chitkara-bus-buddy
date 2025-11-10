import { mockPayments, mockUsers } from '@/utils/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, Check, Clock, X, TrendingUp } from 'lucide-react';

const ManagePayments = () => {
  const totalRevenue = mockPayments.reduce((sum, p) => sum + p.amount, 0);
  const completedPayments = mockPayments.filter(p => p.status === 'completed').length;

  const statusIcons = {
    completed: <Check className="h-4 w-4" />,
    pending: <Clock className="h-4 w-4" />,
    failed: <X className="h-4 w-4" />
  };

  const statusColors = {
    completed: 'bg-success/10 text-success',
    pending: 'bg-warning/10 text-warning',
    failed: 'bg-destructive/10 text-destructive'
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Manage Payments</h1>
        <p className="text-muted-foreground mt-1">View all payment transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">₹{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{completedPayments}</div>
            <p className="text-xs text-muted-foreground">Successful payments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{mockPayments.length}</div>
            <p className="text-xs text-muted-foreground">All payments</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockPayments.map(payment => {
              const user = mockUsers.find(u => u.id === payment.userId);
              
              return (
                <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{user?.name}</p>
                      <Badge variant="secondary" className="text-xs capitalize">
                        {payment.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                    <p className="text-xs text-muted-foreground">{payment.date}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-semibold text-lg">₹{payment.amount.toLocaleString()}</p>
                    <Badge variant="secondary" className={statusColors[payment.status]}>
                      <span className="flex items-center gap-1">
                        {statusIcons[payment.status]}
                        {payment.status}
                      </span>
                    </Badge>
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

export default ManagePayments;
