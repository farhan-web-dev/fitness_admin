# Basecamp Admin Panel

A modern, full-featured admin panel built with Next.js 14, TypeScript, TailwindCSS, and shadcn/ui. This admin dashboard is designed for managing users, events, and platform settings with a beautiful, responsive UI.

## Features

- **Dashboard**: KPI cards, charts (line/bar), and recent activity feed
- **Users Management**: Table view with filters, actions, and pagination
- **Events Management**: Card-based event display with grid/list views
- **Settings**: Comprehensive settings for profile, branding, and preferences
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with shadcn/ui components and TailwindCSS
- **Type-Safe**: Full TypeScript support
- **State Management**: React Query (TanStack Query) for server state

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **State Management**: React Query (@tanstack/react-query)
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Project Structure

```
/
├── app/
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── users/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── events/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── settings/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layouts/
│   │   ├── admin-layout.tsx
│   │   ├── sidebar.tsx
│   │   └── topbar.tsx
│   ├── dashboard/
│   │   ├── stat-card.tsx
│   │   ├── users-chart.tsx
│   │   ├── activities-chart.tsx
│   │   └── activity-item.tsx
│   ├── users/
│   │   ├── users-table.tsx
│   │   └── users-filters.tsx
│   ├── events/
│   │   ├── event-card.tsx
│   │   └── event-filters.tsx
│   ├── ui/ (shadcn/ui components)
│   └── providers.tsx
├── api/
│   ├── dashboard.ts
│   ├── users.ts
│   ├── events.ts
│   └── settings.ts
├── hooks/
│   ├── use-dashboard.ts
│   ├── use-users.ts
│   ├── use-events.ts
│   └── use-settings.ts
├── types/
│   └── index.ts
└── lib/
    ├── api-client.ts
    └── utils.ts
```

## Installation

1. **Clone the repository** (or navigate to the project directory)

```bash
cd /path/to/project
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Update this URL to match your backend API endpoint.

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will automatically redirect to `/dashboard`.

## Build

Create an optimized production build:

```bash
npm run build
```

## Start Production Server

After building, start the production server:

```bash
npm start
```

## Backend API Integration

### API Configuration

All API calls are configured to use the base URL from environment variables. Update `.env.local` with your backend URL.

### API Structure

The project includes API functions for all major features:

**Dashboard API** (`/api/dashboard.ts`)
```typescript
- getDashboardStats() → GET /dashboard/stats
- getRecentActivity() → GET /dashboard/activity
- getChartData(type) → GET /dashboard/charts/:type
```

**Users API** (`/api/users.ts`)
```typescript
- getUsers(filters) → GET /users
- getUserById(id) → GET /users/:id
- updateUser(id, data) → PUT /users/:id
- deleteUser(id) → DELETE /users/:id
- banUser(id) → POST /users/:id/ban
```

**Events API** (`/api/events.ts`)
```typescript
- getEvents(filters) → GET /events
- getEventById(id) → GET /events/:id
- createEvent(data) → POST /events
- updateEvent(id, data) → PUT /events/:id
- deleteEvent(id) → DELETE /events/:id
```

**Settings API** (`/api/settings.ts`)
```typescript
- getSettings() → GET /settings
- updateSettings(data) → PUT /settings
```

### Connecting Your Node.js + MongoDB Backend

1. **Update the API base URL** in `.env.local` to point to your backend
2. **Implement the matching endpoints** in your Node.js backend
3. **Authentication**: The API client automatically includes JWT tokens from localStorage
4. **Response format**: Ensure your backend returns JSON responses matching the TypeScript types in `/types/index.ts`

### Sample Backend Response Formats

**Dashboard Stats Response:**
```json
{
  "totalUsers": 10234,
  "activeUsers": 8567,
  "totalEvents": 857,
  "growthRate": 15.7
}
```

**Users Response:**
```json
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://...",
    "location": "London",
    "status": "active",
    "joinDate": "2024-01-15"
  }
]
```

**Events Response:**
```json
[
  {
    "id": "1",
    "title": "Sunrise Yoga Bliss",
    "description": "Start your day with energizing yoga...",
    "image": "https://...",
    "date": "March 15, 2024",
    "location": "Beach Park",
    "attendees": 45,
    "status": "upcoming"
  }
]
```

## React Query Usage

All data fetching uses React Query hooks for optimal caching and state management:

```typescript
// Dashboard
import { useDashboardStats, useRecentActivity } from '@/hooks/use-dashboard';

// Users
import { useUsers, useUpdateUser, useBanUser } from '@/hooks/use-users';

// Events
import { useEvents, useCreateEvent } from '@/hooks/use-events';

// Settings
import { useSettings, useUpdateSettings } from '@/hooks/use-settings';
```

## Mock Data

The project currently uses mock data to demonstrate functionality. To connect real data:

1. Remove mock data arrays from page components
2. Uncomment React Query hooks
3. Ensure your backend APIs match the expected response formats

## Design System

### Colors

- **Primary**: Violet/Purple (`#8b5cf6`)
- **Success**: Green (`#10B981`)
- **Warning**: Yellow (`#F59E0B`)
- **Danger**: Red (`#EF4444`)
- **Background**: Light gray (`#F3F4F6`)

### Components

All UI components are from shadcn/ui and can be customized in `/components/ui/`.

### Typography

- **Font**: Inter (Google Fonts)
- **Headers**: Bold, dark text
- **Body**: Regular weight, gray tones
- **Metrics**: Large, bold numbers with colored indicators

## Pages Overview

### 1. Dashboard (`/dashboard`)
- KPI cards showing key metrics
- Line chart for monthly growth
- Bar chart for activities
- Recent activity feed with color-coded items

### 2. Users (`/users`)
- Filterable user table
- Location and status filters
- Actions: View, Edit, Ban
- Pagination
- Avatar display
- Status badges

### 3. Events (`/events`)
- Grid/List toggle view
- Event cards with images
- Status filtering
- Event details (date, location, attendees)
- Create new event button

### 4. Settings (`/settings`)
- General preferences (dark mode, notifications, timezone)
- Brand & appearance (colors, logo, fonts)
- Typography samples
- Profile settings with avatar upload

## Customization

### Changing Brand Colors

Update colors in `/app/settings/page.tsx` or modify the TailwindCSS theme in `tailwind.config.ts`.

### Adding New Pages

1. Create a new directory in `/app/`
2. Add `page.tsx` and `layout.tsx`
3. Add route to sidebar in `/components/layouts/sidebar.tsx`
4. Create API functions in `/api/`
5. Create hooks in `/hooks/`
6. Add TypeScript types in `/types/index.ts`

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Docker

```bash
docker build -t admin-panel .
docker run -p 3000:3000 admin-panel
```

### Manual Deployment

1. Build the project: `npm run build`
2. Copy `.next`, `public`, `package.json`, and `node_modules` to server
3. Set environment variables
4. Run: `npm start`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For issues or questions, please open an issue in the repository.

---

**Note**: This is a frontend-only application. You need to connect it to your Node.js + MongoDB backend by implementing the API endpoints described in the "Backend API Integration" section.
