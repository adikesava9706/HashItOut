# Team Management Application

This is a **Team Management Application** built using **React**, **Node.js**, **Express**, and **MongoDB**. The application allows users to add, view, and manage team members with their details and profile pictures.

## Features

- **Add Members**: Users can add team members with details like name, email, hobbies, and a profile picture.
- **View Members**: Displays a list of all team members with their details and profile pictures.
- **Member Details**: View detailed information about a specific team member.
- **Responsive Design**: The application is styled using **TailwindCSS** for a modern and responsive UI.

## Tech Stack

### Frontend

- **React**: For building the user interface.
- **React Router**: For navigation between pages.
- **TailwindCSS**: For styling the application.
- **Vite**: For fast development and build tooling.

### Backend

- **Node.js**: For server-side JavaScript runtime.
- **Express**: For building the REST API.
- **Multer**: For handling file uploads.
- **MongoDB**: For storing member data and images.
- **Mongoose**: For MongoDB object modeling.

## Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (running locally or on a cloud service)

## Installation and Setup

### Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
   The backend server will run on `http://localhost:3000`.

### Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

## Usage

1. Open the frontend in your browser at `http://localhost:5173`.
2. Use the navigation bar to:
   - Add new members.
   - View the list of members.
   - View detailed information about a specific member.

## Folder Structure

```
teammanagement/
├── backend/
│   ├── server.js
│   ├── .gitignore
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   ├── .gitignore
│   └── package.json
└── Readme.md
```

## API Endpoints

### Backend

- **POST** `/add`: Add a new member.
- **GET** `/members`: Get all members.
- **GET** `/members/:id`: Get details of a specific member.

## License

This project is licensed under the MIT License.

Enjoy managing your team!
