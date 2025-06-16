# Simple Blog App

A simple blogging application built with Node.js, Express, and MongoDB. This application allows users to create, read, update, and delete blog posts, along with features like user authentication, comments, and profile management.

## Features

- 🔐 User Authentication (Signup/Login)
- ✍️ Create, Read, Update, and Delete Blog Posts
- 💬 Comment System
- 👤 User Profiles with Custom Avatars
- 🔒 Role-based Access Control (User/Admin)
- 🖼️ Image Upload Support
- 📱 Responsive Design

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Template Engine**: EJS
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Styling**: CSS

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd simple-blogapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following variables:
```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

4. Start the development server:
```bash
npm run dev
```

For production:
```bash
npm start
```

## Project Structure

```
├── models/          # Database models
├── routes/          # Route handlers
├── views/           # EJS templates
├── public/          # Static files
├── middlewares/     # Custom middlewares
├── services/        # Business logic
└── app.js          # Application entry point
```

## API Endpoints

### User Routes
- `POST /user/signup` - Register a new user
- `POST /user/login` - User login
- `GET /user/logout` - User logout

### Blog Routes
- `GET /blog` - Get all blogs
- `POST /blog` - Create a new blog
- `GET /blog/:id` - Get a specific blog
- `PUT /blog/:id` - Update a blog
- `DELETE /blog/:id` - Delete a blog

### Comment Routes
- `POST /blog/:id/comment` - Add a comment to a blog
- `GET /blog/:id/comments` - Get all comments for a blog

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License. 
