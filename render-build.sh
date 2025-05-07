#!/bin/bash
# Install dependencies at all levels
npm install
npm run install:all

# Build both frontend and backend
npm run build

# Copy frontend build to backend public folder
node ensure-public-dir.js
cp -r ./frontend/dist/* ./backend/public/
