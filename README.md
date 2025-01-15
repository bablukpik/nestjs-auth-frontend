# Next.js Authentication Frontend

A Next.js application with authentication features including email/password login and Google OAuth integration.

## Features

- Email/Password Authentication
- Google OAuth Integration
- Protected Routes
- Automatic Token Refresh
- Secure Cookie-based Authentication
- Logout Functionality

## Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- npm or yarn
- A running backend service (default: http://localhost:3000)

## Environment Setup

1. Copy the environment variables template:

```bash
cp .env.example .env
```

2. Update the `.env` file with your configuration:

```env
API URLs
API_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000
Google OAuth (if using Google authentication)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

The application will start on [http://localhost:3001](http://localhost:3001)

## Project Structure

```
├── app/
│ ├── auth/
│ │ ├── login/ # Login page and actions
│ │ ├── actions.ts # Authentication server actions
│ │ └── auth-cookie.ts # Cookie management utilities
│ ├── components/ # Reusable components
│ └── page.tsx # Home page
├── middleware.ts # Authentication middleware
└── .env.example # Environment variables template
```

## Authentication Flow

1. **Login**: Users can authenticate via:

   - Email/password login form
   - Google OAuth button

2. **Session Management**:

   - Authentication status stored in HTTP-only cookies
   - Automatic token refresh
   - Protected routes redirect to login

3. **Logout**:
   - Clears authentication cookies
   - Redirects to login page

## Development

- Modify `app/page.tsx` to edit the home page
- Protected routes are handled by `middleware.ts`
- Authentication logic is in `app/auth/`

## Deployment

Deploy your application using [Vercel](https://vercel.com/new):

1. Push your code to a Git repository
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy!
