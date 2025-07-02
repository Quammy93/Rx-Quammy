#!/bin/bash
# Remove the old styles.css file from root directory
rm -f styles.css
rm -f script.js
rm -f index.html

# Install dependencies
npm install

echo "Cleanup complete! Run 'npm run dev' to start the development server."
