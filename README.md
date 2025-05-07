# Vaikunth Yoga Retreat Website

A comprehensive MERN stack website for a Himalayan yoga and wellness retreat.

## Features
- Showcase retreat programs and accommodations
- Online booking system
- User accounts and profiles
- Blog and resources
- Testimonials
- Admin dashboard

## Tech Stack
- MongoDB
- Express.js
- React.js
- Node.js
- Redux/Context API
- JWT Authentication
- Stripe/Razorpay Integration

## Development

### Prerequisites
- Node.js (v14+)
- MongoDB
- NPM or Yarn

### Installation
1. Clone the repository
2. Install dependencies: `npm run install:all`
3. Set up environment variables (see .env.example)
4. Start development servers: `npm run dev`

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production
- `npm run start` - Start both frontend and backend in production mode
- `npm run install:all` - Install dependencies for root, frontend, and backend
- `npm run test` - Run tests for both frontend and backend
- `npm run deploy` - Build and deploy the application to Vercel

## Deployment

### Building for Production
1. Run the build script: `npm run build`
   - This will build both frontend and backend
   - Frontend build will be created in `frontend/dist` directory

### Deployment Options

#### Option 1: Using the Deployment Script
1. Run the deployment script: `./deploy.sh`
   - This script will install dependencies, build the application, and copy the frontend build to the backend public folder
   - After running the script, the application will be deployed to Vercel

#### Option 2: Using NPM Scripts
1. Run the deploy command: `npm run deploy`
   - This will build both frontend and backend
   - Copy the frontend build to the backend public folder
   - Deploy the application to Vercel

#### Option 3: Manual Deployment
1. Install dependencies: `npm run install:all`
2. Build both frontend and backend: `npm run build`
3. Copy the frontend build to the backend public folder:
   ```
   npm run copy-frontend
   ```
4. Deploy the backend to Vercel:
   ```
   cd backend && vercel --prod
   ```

#### Option 4: Docker Deployment
1. Build and start the Docker containers: `npm start`
   - This uses docker-compose to build and start the application

### Environment Variables
Make sure to set up the appropriate environment variables for production:
- Create a `.env` file in the backend directory based on `.env.example`
- Set `NODE_ENV=production`

### Troubleshooting

#### Port Already in Use
If you encounter the "address already in use" error when starting the server:

1. Use the alternative start script: `npm run start:prod:alt`
   - This script will detect port conflicts and provide options to resolve them

2. Manually specify a different port:
   ```
   cd backend && PORT=5001 npm run start
   ```

3. Find and kill the process using port 5000:
   ```
   # On Windows
   netstat -ano | findstr :5000
   taskkill /F /PID <PID>

   # On Linux/Mac
   lsof -i :5000
   kill -9 <PID>
   ```

## License
[MIT](LICENSE)

