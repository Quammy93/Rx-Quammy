#!/bin/bash
# Remove the old styles.css file from root directory
rm -f styles.css
rm -f script.js
rm -f index.html

# Remove node_modules and package-lock.json to ensure clean state
rm -rf node_modules
rm -f package-lock.json

# Clear npm cache to remove any corrupted cached files
npm cache clean --force

# Install dependencies
npm install

echo "Cleanup complete! Run 'npm run dev' to start the development server."
