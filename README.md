# Mini App – Login & Price List

A comprehensive full-stack application demonstrating modern web development practices, including frontend and backend architecture, secure authentication, relational database design, and containerized deployment.

The application provides a robust platform for managing product price lists with an intuitive user interface and a secure, scalable backend.

## Features

- **Secure Authentication**: Robust user login and session management using JWT and Argon2 password hashing.
- **Product Management**: Comprehensive price list and inventory tracking for products (stock, unit, in-price).
- **Modern State Management**: Efficient server-state synchronization and caching using TanStack React Query.
- **Form Handling & Validation**: Client-side form management using React Hook Form and server-side validation with Express Validator.
- **Containerization & Deployment**: Fully containerized with Docker, reverse proxy via Nginx, and automated CI/CD pipelines using GitHub Actions deploying to AWS EC2.

## Technology Stack

**Frontend**
- **Framework**: React 19 (Vite)
- **State Management**: TanStack Query (React Query v5)
- **Routing**: React Router DOM v7
- **Forms**: React Hook Form
- **Styling**: Pure CSS
- **Utilities**: JS Cookie, React Icons, React Toastify

**Backend**
- **Framework**: Node.js with Express 5
- **ORM**: Prisma Client / Postgres Adapter
- **Database**: PostgreSQL 17
- **Security & Auth**: JSON Web Token (JWT), Argon2, CORS
- **Validation**: Express Validator

**Infrastructure**
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx
- **CI/CD**: GitHub Actions
- **Cloud Provider**: AWS (EC2)

## Live Demo

**Website**: [Mini_Price_List](https://miniapp.thuraminthein.dev/)

**Test Credentials**:
- **Username**: `test@gmail.com`
- **Password**: `123456789`

## Author

**Thura Min Thein**
