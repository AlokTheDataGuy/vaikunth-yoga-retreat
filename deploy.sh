#!/bin/bash

# Vaikunth Yoga Retreat Deployment Script
echo "Starting deployment process for Vaikunth Yoga Retreat..."

# Install dependencies
echo "Installing dependencies..."
npm run install:all

# Build the application
echo "Building the application..."
npm run build

# Create backend/public directory if it doesn't exist
echo "Creating public directory in backend..."
mkdir -p ./backend/public

# Copy frontend build to backend/public
echo "Copying frontend build to backend/public..."
cp -r ./frontend/dist/* ./backend/public/

# Deploy to Vercel
echo "Deploying to Vercel..."
cd backend && vercel --prod

echo "Deployment completed successfully!"
