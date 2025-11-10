import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Layout from "@/components/Layout";

// Auth pages
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

// User pages
import UserDashboard from "@/pages/user/Dashboard";
import LiveTracking from "@/pages/user/LiveTracking";
import MyRoute from "@/pages/user/MyRoute";
import Notifications from "@/pages/user/Notifications";
import Payment from "@/pages/user/Payment";
import IncidentReport from "@/pages/user/IncidentReport";
import UserProfile from "@/pages/user/Profile";

// Admin pages
import AdminDashboard from "@/pages/admin/Dashboard";
import ManageUsers from "@/pages/admin/ManageUsers";
import ManageBuses from "@/pages/admin/ManageBuses";
import ManageRoutes from "@/pages/admin/ManageRoutes";
import ManageNotifications from "@/pages/admin/ManageNotifications";
import ManageIncidents from "@/pages/admin/ManageIncidents";
import ManagePayments from "@/pages/admin/ManagePayments";
import AdminProfile from "@/pages/admin/Profile";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth routes */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* User routes */}
            <Route
              path="/user/dashboard"
              element={
                <ProtectedRoute requiredRole="user">
                  <Layout>
                    <UserDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/live-tracking"
              element={
                <ProtectedRoute requiredRole="user">
                  <Layout>
                    <LiveTracking />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/my-route"
              element={
                <ProtectedRoute requiredRole="user">
                  <Layout>
                    <MyRoute />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/notifications"
              element={
                <ProtectedRoute requiredRole="user">
                  <Layout>
                    <Notifications />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/payment"
              element={
                <ProtectedRoute requiredRole="user">
                  <Layout>
                    <Payment />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/incident-report"
              element={
                <ProtectedRoute requiredRole="user">
                  <Layout>
                    <IncidentReport />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/profile"
              element={
                <ProtectedRoute requiredRole="user">
                  <Layout>
                    <UserProfile />
                  </Layout>
                </ProtectedRoute>
              }
            />

            {/* Admin routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <AdminDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-users"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <ManageUsers />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-buses"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <ManageBuses />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-routes"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <ManageRoutes />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-notifications"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <ManageNotifications />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-incidents"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <ManageIncidents />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/manage-payments"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <ManagePayments />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/profile"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Layout>
                    <AdminProfile />
                  </Layout>
                </ProtectedRoute>
              }
            />

            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
