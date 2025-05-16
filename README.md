# AI Game Generator SaaS

A SaaS application to generate 2D games using AI AGENT.

## setup

1. Frontend: `cd client && npm install && npm run dev`
2. Backend: `cd server && npm install && npm start`
3. Seed database: `cd server && node src/seed.js`

## API

- GET /api/templates: List all game templates

## Environment Variables

- `MONGODB_URI`: MongoDB Atlas connection string
- `PORT`: Server port (default 3000)
