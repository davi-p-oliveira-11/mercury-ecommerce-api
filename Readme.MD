# Mercury API

![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?logo=typescript\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js\&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-5-000000?logo=fastify\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql\&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1)
![OpenAPI](https://img.shields.io/badge/OpenAPI-Documentation-6BA539?logo=openapiinitiative\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A production-oriented REST API built with **Fastify, TypeScript, Prisma, PostgreSQL, and Zod**, designed to demonstrate modern Node.js backend development and Fastify ecosystem capabilities.

## Overview

**Mercury API** is a backend service focused on building a clean, scalable REST API using the Fastify ecosystem.

The project was initially inspired by a Fastify + Prisma tutorial, but the implementation is being adapted to modern versions of the Node.js ecosystem and improved with production-oriented patterns where appropriate.

The initial MVP focuses on:

* User authentication
* User management
* Product management
* Request validation
* PostgreSQL persistence
* Prisma ORM
* OpenAPI/Swagger documentation

The architecture is intentionally kept lightweight while leaving room for future expansion into a more complete e-commerce API.

## Tech Stack

| Technology            | Purpose              |
| --------------------- | -------------------- |
| **TypeScript**        | Application language |
| **Node.js**           | Runtime              |
| **Fastify**           | Web framework        |
| **Prisma**            | ORM                  |
| **PostgreSQL**        | Database             |
| **Zod**               | Schema validation    |
| **OpenAPI / Swagger** | API documentation    |
| **tsx**               | Development runtime  |

## Features

### Authentication

* User registration
* Password hashing
* Password verification
* User authentication
* JWT-based authentication

### Users

* Create users
* Authenticate users
* Retrieve users
* Protected routes

### Products

* Product schemas
* Product creation
* Product retrieval
* Product service layer
* Product routes

### API

* RESTful architecture
* Request validation with Zod
* Structured route organization
* Fastify plugins
* OpenAPI documentation
* TypeScript type safety
* Prisma database integration

## Project Structure

```text
mercury-api/
├── src/
│   ├── app.ts
│   ├── plugins/
│   ├── routes/
│   ├── handlers/
│   ├── services/
│   ├── schemas/
│   └── ...
├── prisma/
│   └── schema.prisma
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

> The project structure may evolve as the API grows.

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js 20+
* npm
* PostgreSQL

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/mercury-api.git
cd mercury-api
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Configure the required environment variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mercury"
JWT_SECRET="your-secret"
```

### Database

Run Prisma migrations:

```bash
npx prisma migrate dev
```

Generate the Prisma client:

```bash
npx prisma generate
```

### Development

Start the development server:

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:3000
```

## API Documentation

Once the server is running, interactive API documentation will be available through the Swagger/OpenAPI interface.

```text
http://localhost:3000/docs
```

## Testing

Run the test suite with:

```bash
npm test
```

## Roadmap

The initial goal is to deliver a clean and functional MVP demonstrating Fastify and modern Node.js backend development.

Potential future improvements include:

* Pagination and filtering
* Improved error handling
* Integration tests
* Rate limiting
* Refresh tokens
* Structured logging
* Docker support
* Expanded e-commerce functionality

These features are intentionally outside the initial MVP scope.

## Learning Goals

Mercury API is primarily a portfolio project focused on demonstrating practical experience with the **Fastify ecosystem** and broader Node.js backend development.

Key areas explored include:

* Fastify plugins
* Route organization
* Schema validation
* Authentication
* Request/reply handling
* TypeScript integration
* Prisma integration
* PostgreSQL
* OpenAPI documentation
* Backend testing
* Production-oriented API architecture

## License

This project is licensed under the MIT License.
