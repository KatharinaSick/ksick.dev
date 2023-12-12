// Writes the required environment variables to a .env.local file
const fs = require('fs')
fs.writeFileSync('./.env.local', `VITE_GITHUB_API_KEY=${process.env.GITHUB_API_KEY}\n`)