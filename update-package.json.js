const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Update scripts for production
packageJson.scripts.start = "cd backend && npm start";
packageJson.scripts.build = "concurrently \"npm run build:backend\" \"npm run build:frontend\"";

// Write the updated package.json back to disk
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
console.log('package.json updated for production deployment');
