export const getRoleBasedRoute = (role: 'user' | 'admin'): string => {
  return role === 'admin' ? '/admin/dashboard' : '/user/dashboard';
};

export const isAuthorizedForRoute = (userRole: 'user' | 'admin', routePath: string): boolean => {
  if (routePath.startsWith('/admin')) {
    return userRole === 'admin';
  }
  if (routePath.startsWith('/user')) {
    return userRole === 'user';
  }
  return true;
};
