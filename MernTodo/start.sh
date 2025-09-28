#!/bin/bash
# Exit on errors
set -e

echo "Installing frontend dependencies and building frontend..."
cd Frontend
npm install
npm run build

echo "Going back to root and installing backend dependencies..."
cd ..
npm install

echo "Starting backend server..."
npm start
