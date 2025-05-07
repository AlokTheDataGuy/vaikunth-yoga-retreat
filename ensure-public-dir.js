const fs = require('fs');
const path = require('path');

// Path to the public directory
const publicDir = path.join(__dirname, 'backend', 'public');

// Check if the directory exists
if (!fs.existsSync(publicDir)) {
  console.log('Creating public directory...');
  // Create the directory
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Public directory created successfully!');
} else {
  console.log('Public directory already exists.');
}

// Create an empty index.html file if it doesn't exist
const indexPath = path.join(publicDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.log('Creating placeholder index.html...');
  fs.writeFileSync(indexPath, `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vaikunth Yoga Retreat</title>
</head>
<body>
  <h1>Vaikunth Yoga Retreat</h1>
  <p>Welcome to our website!</p>
</body>
</html>`);
  console.log('Placeholder index.html created successfully!');
}
