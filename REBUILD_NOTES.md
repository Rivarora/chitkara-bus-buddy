# Busify - React + CSS Rebuild

This project has been rebuilt to use **React Router** and **normal CSS** instead of Tailwind CSS and shadcn/ui.

## What's Been Completed

### 1. Dependencies Updated
- Removed all Tailwind CSS and shadcn/ui dependencies
- Kept only: React, React DOM, React Router DOM, and Lucide React (for icons)
- Updated `package.json` to minimal dependencies

### 2. CSS Structure Created
- **`src/index.css`**: Global styles, utility classes, components (buttons, cards, forms, badges, grid)
- **`src/styles/Layout.css`**: Layout component styles
- **`src/styles/Navbar.css`**: Navigation bar styles
- **`src/styles/Sidebar.css`**: Sidebar navigation styles
- **`src/styles/Auth.css`**: Authentication pages styles
- **`src/styles/Toast.css`**: Toast notification styles
- **`src/styles/Dashboard.css`**: Dashboard-specific styles

### 3. Core Components Rebuilt
- **`Navbar.tsx`**: Navigation with dropdown menu (vanilla JS state)
- **`Sidebar.tsx`**: Sidebar navigation with React Router NavLink
- **`Layout.tsx`**: Main layout wrapper
- **`Toast.tsx`**: Toast notification component
- **`ToastContext.tsx`**: Toast state management

### 4. Authentication Pages
- **`Login.tsx`**: Login page with form and styling
- **`Register.tsx`**: Registration page with role selection
- Both use the new ToastContext instead of sonner

### 5. App.tsx Updated
- Removed QueryClient, TooltipProvider, and UI component dependencies
- Added ToastProvider wrapper
- Clean React Router setup

## Remaining Work

The following page files still need to be updated to remove shadcn/ui component imports:

### Admin Pages
- `src/pages/admin/Dashboard.tsx`
- `src/pages/admin/ManageUsers.tsx`
- `src/pages/admin/ManageBuses.tsx`
- `src/pages/admin/ManageRoutes.tsx`
- `src/pages/admin/ManageNotifications.tsx`
- `src/pages/admin/ManageIncidents.tsx`
- `src/pages/admin/ManagePayments.tsx`
- `src/pages/admin/Profile.tsx`

### User Pages
- `src/pages/user/Dashboard.tsx` ✓ (COMPLETED)
- `src/pages/user/LiveTracking.tsx`
- `src/pages/user/MyRoute.tsx`
- `src/pages/user/Notifications.tsx`
- `src/pages/user/Payment.tsx`
- `src/pages/user/IncidentReport.tsx`
- `src/pages/user/Profile.tsx`

## How to Complete Remaining Pages

Each page needs to:

1. **Remove shadcn imports** like:
   - `Card, CardContent, CardHeader, CardTitle`
   - `Button, Input, Label, Badge`
   - `Select, Textarea` etc.

2. **Replace with HTML + CSS classes**:
   ```tsx
   // OLD:
   <Card>
     <CardHeader>
       <CardTitle>Title</CardTitle>
     </CardHeader>
     <CardContent>Content</CardContent>
   </Card>

   // NEW:
   <div className="card">
     <div className="card-header">
       <h3 className="card-title">Title</h3>
     </div>
     <div className="card-content">Content</div>
   </div>
   ```

3. **Replace Button components**:
   ```tsx
   // OLD:
   <Button variant="primary">Click</Button>

   // NEW:
   <button className="btn btn-primary">Click</button>
   ```

4. **Replace Form components**:
   ```tsx
   // OLD:
   <Label htmlFor="name">Name</Label>
   <Input id="name" />

   // NEW:
   <label htmlFor="name" className="form-label">Name</label>
   <input id="name" className="form-input" />
   ```

5. **Update toast calls**:
   ```tsx
   // Import:
   import { useToast } from '@/context/ToastContext';

   // In component:
   const { showToast } = useToast();

   // Usage:
   showToast('Success message!', 'success');
   showToast('Error message!', 'error');
   ```

## Available CSS Classes

### Buttons
- `.btn` - Base button
- `.btn-primary` - Primary blue button
- `.btn-secondary` - Secondary gray button
- `.btn-ghost` - Transparent button
- `.btn-sm` - Small button
- `.btn-icon` - Icon-only button
- `.btn-full` - Full width button

### Cards
- `.card` - Base card container
- `.card-header` - Card header section
- `.card-title` - Card title heading
- `.card-content` - Card content area

### Forms
- `.form-group` - Form field wrapper
- `.form-label` - Form label
- `.form-input` - Text input
- `.form-select` - Select dropdown
- `.form-textarea` - Textarea

### Badges
- `.badge` - Base badge
- `.badge-success` - Green badge
- `.badge-warning` - Yellow badge
- `.badge-danger` - Red badge
- `.badge-primary` - Blue badge

### Grid & Layout
- `.grid`, `.grid-cols-1/2/3/4`
- `.flex`, `.flex-col`
- `.items-center`, `.items-start`
- `.justify-between`, `.justify-center`
- `.gap-1/2/3/4/6`

### Utilities
- `.text-sm`, `.text-xs`, `.text-lg` etc.
- `.font-medium`, `.font-semibold`, `.font-bold`
- `.text-muted` - Muted text color
- `.space-y-2/3/4/6` - Vertical spacing between children

## Example: User Dashboard

See `src/pages/user/Dashboard.tsx` for a complete example of a rebuilt page.

## Running the Project

```bash
npm install
npm run build
npm run dev
```

The project is now using vanilla CSS with CSS variables for theming, making it easier to customize and maintain without framework dependencies.
