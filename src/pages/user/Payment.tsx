import { useState } from 'react';
import { mockPayments } from '@/utils/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Check, Clock, X } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('monthly');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Payment processed successfully!');
    setAmount('');
  };

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
        <h1 className="text-3xl font-bold text-foreground">Payment</h1>
        <p className="text-muted-foreground mt-1">Manage your bus pass payments</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Make Payment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePayment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Pass Type</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly Pass - ₹2,000</SelectItem>
                    <SelectItem value="semester">Semester Pass - ₹10,000</SelectItem>
                    <SelectItem value="annual">Annual Pass - ₹18,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="2000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Process Payment
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockPayments.map(payment => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium capitalize">{payment.type} Pass</p>
                  <p className="text-sm text-muted-foreground">{payment.date}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-semibold">₹{payment.amount}</p>
                  <Badge variant="secondary" className={statusColors[payment.status]}>
                    <span className="flex items-center gap-1">
                      {statusIcons[payment.status]}
                      {payment.status}
                    </span>
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payment;
