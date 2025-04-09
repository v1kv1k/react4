# React Data Fetching Demo

A simple React application demonstrating data fetching using useEffect and Axios. This project allows users to fetch and display user information from the JSONPlaceholder API.

## Features

- Fetches user data from a remote API using Axios
- Demonstrates the use of React hooks (useState, useEffect)
- Shows loading states during API requests
- Handles error states when API requests fail
- Implements conditional rendering based on different states
- Automatically refetches data when ID parameter changes

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-data-fetcher.git
   cd react-data-fetcher
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Technologies Used

- React
- Vite
- Axios
- JSONPlaceholder API

## Project Structure

```
react-data-fetcher/
├── src/
│   ├── components/
│   │   └── DataFetcher.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How It Works

The application uses the `useEffect` hook to fetch data when the component mounts or when the user ID changes. It manages three different states:

1. Loading state: Shows a loading spinner while data is being fetched
2. Error state: Displays an error message if the API request fails
3. Success state: Renders the user data when successfully fetched

The `DataFetcher` component accepts a `userId` prop that determines which user's data to fetch. When this prop changes, the component automatically fetches the new user's data.

## Demo

You can see a live demo of this project at [https://your-demo-url.vercel.app](https://your-demo-url.vercel.app) 