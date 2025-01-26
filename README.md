# Blsky Chat (Front-End)

This is my submission for the front-end position at Blsky.tech. The app implements a two-window chat system using Next.js with the following features:

## Features
1. **Two chat windows**: Left chat sends messages to the right chat and vice versa.
2. **Persistent messages**: Messages are stored in `localStorage` to ensure they remain available even after the tab is closed or refreshed.
3. **Message flashing**: When a message is sent, the target chat window flashes briefly.
4. **Built with**:
   - Next.js (App Router)
   - Node.js
   - Minimal dependencies to adhere to the test requirements.

## Instructions

### Run the Application (Development Mode)
```bash
npm install
npm run dev

The application will be available at http://localhost:3000
