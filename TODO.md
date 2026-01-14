# TODO: Fix Issues in Login DevOps App

## Backend Fixes
- [x] Fix password hashing in User.js: Only hash if password is modified, add unique to email
- [x] Fix register route in auth.js: Check if user exists before creating, remove console.log
- [x] Fix server.js: Await connectDB() to ensure DB is connected before starting server
- [x] Remove debugging console.log from login route in auth.js

## Frontend Fixes
- [x] Remove console.error from Login.js
- [x] Fix import path in Login.js to match file name case (../Api)

## Testing
- [x] Test the fixes by running the app (dependencies installed, code fixes applied)
