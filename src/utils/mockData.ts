export interface Bus {
  id: string;
  busNumber: string;
  driver: string;
  capacity: number;
  status: 'active' | 'inactive' | 'maintenance';
  currentLocation?: { lat: number; lng: number };
}

export interface Route {
  id: string;
  name: string;
  stops: string[];
  startTime: string;
  endTime: string;
  busId: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  type: 'monthly' | 'semester' | 'annual';
  status: 'completed' | 'pending' | 'failed';
  date: string;
}

export interface Incident {
  id: string;
  userId: string;
  busId: string;
  description: string;
  status: 'pending' | 'resolved';
  date: string;
}

export const mockBuses: Bus[] = [
  { id: '1', busNumber: 'CU-001', driver: 'Rajesh Kumar', capacity: 50, status: 'active', currentLocation: { lat: 30.5162, lng: 76.6599 } },
  { id: '2', busNumber: 'CU-002', driver: 'Amit Singh', capacity: 45, status: 'active', currentLocation: { lat: 30.5172, lng: 76.6589 } },
  { id: '3', busNumber: 'CU-003', driver: 'Priya Sharma', capacity: 50, status: 'maintenance' },
  { id: '4', busNumber: 'CU-004', driver: 'Vikram Patel', capacity: 40, status: 'active', currentLocation: { lat: 30.5152, lng: 76.6609 } },
];

export const mockRoutes: Route[] = [
  { id: '1', name: 'Route A - Sector 17 to Campus', stops: ['Sector 17', 'Sector 22', 'Industrial Area', 'Campus'], startTime: '07:00', endTime: '09:00', busId: '1' },
  { id: '2', name: 'Route B - Railway Station to Campus', stops: ['Railway Station', 'Bus Stand', 'Mall Road', 'Campus'], startTime: '07:30', endTime: '09:30', busId: '2' },
  { id: '3', name: 'Route C - Mohali to Campus', stops: ['Mohali Phase 7', 'Phase 8', 'Phase 9', 'Campus'], startTime: '08:00', endTime: '10:00', busId: '4' },
];

export const mockNotifications: Notification[] = [
  { id: '1', title: 'Route Change', message: 'Route A will have a slight delay today due to traffic.', date: '2025-11-10', read: false },
  { id: '2', title: 'New Schedule', message: 'Updated bus schedules are now available.', date: '2025-11-09', read: true },
  { id: '3', title: 'Maintenance Notice', message: 'CU-003 will be under maintenance this week.', date: '2025-11-08', read: true },
];

export const mockPayments: Payment[] = [
  { id: '1', userId: '2', amount: 2000, type: 'monthly', status: 'completed', date: '2025-11-01' },
  { id: '2', userId: '2', amount: 10000, type: 'semester', status: 'completed', date: '2025-10-01' },
];

export const mockIncidents: Incident[] = [
  { id: '1', userId: '2', busId: '1', description: 'AC not working properly', status: 'pending', date: '2025-11-09' },
  { id: '2', userId: '2', busId: '2', description: 'Driver was very helpful', status: 'resolved', date: '2025-11-05' },
];

export const mockUsers = [
  { id: '1', email: 'admin@chitkara.edu.in', name: 'Admin User', role: 'admin' },
  { id: '2', email: 'student@chitkara.edu.in', name: 'Student User', role: 'user' },
  { id: '3', email: 'faculty@chitkara.edu.in', name: 'Faculty Member', role: 'user' },
];
