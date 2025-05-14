# back-end-test

A simple Node.js REST API using Express and Prisma ORM.

## Features
- CRUD operations for users (Create, Read, Update, Delete)
- Uses Prisma as the ORM for database access
- Environment variable support with dotenv

## Endpoints

### Get all users
```
GET /users
```
Returns a list of all users.

### Create a new user
```
POST /users
```
Body (JSON):
```
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}
```

### Update a user
```
PUT /users/:id
```
Body (JSON):
```
{
  "name": "New Name",
  "email": "new@example.com",
  "password": "newpassword"
}
```

### Delete a user
```
DELETE /users/:id
```

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Set up your `.env` file with the correct database connection string.
3. Run database migrations (if needed):
   ```
   npx prisma migrate dev
   ```
4. Start the server:
   ```
   node index.js
   ```

## Project Structure
- `index.js` - Main server file
- `prisma/` - Prisma schema and migrations
- `generated/` - Generated Prisma client