# Seeker-Provider Matching App

This is a minimal viable prototype (MVP) for a "Seeker-Provider" matching application. The app allows users to register as either a Seeker or a Provider, manage their profiles, and view matches based on shared fields like location and industry.

## Features

- User Registration & Login with JWT-based authentication.
- Profile Management for Seekers and Providers.
- Matching functionality based on shared fields (e.g., location, industry).
- Frontend built with Vite and styled using Tailwind CSS.
- Backend built with Flask and SQLite.
- Dockerized backend for easy setup.

## Prerequisites

- Node.js and npm installed.
- Docker installed (for backend).

## Setup Instructions

### Backend Setup

1. Navigate to the backend folder:  
   `cd backend`

2. Build and run the backend using Docker:  
   `docker-compose up`

3. The backend will be available at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend folder:  
   `cd frontend`

2. Install dependencies:  
   `npm install`

3. Start the development server:  
   `npm run dev`

4. The frontend will be available at `http://localhost:5173`.

## How to Use

1. Open the frontend in your browser at `http://localhost:5173`.
2. Register as a Seeker or Provider.
3. Log in with your credentials.
4. Update your profile with relevant details (e.g., location, industry).
5. View matches (Seekers can see Providers based on shared fields).

## Enhancements (Future Work)

- Add pagination for matches.
- Improve the matching algorithm with weighted scoring.
- Add analytics or logging for user activity.
- Deploy the app to a cloud platform (e.g., Heroku, Netlify).

## Known Limitations

- The matching algorithm is basic and only filters by location and industry.
- No email verification during registration.
- Limited error handling in the frontend and backend.

## License

This project is for demonstration purposes only and is not licensed for production use.