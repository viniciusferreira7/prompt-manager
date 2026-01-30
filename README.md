# Prompt Manager

> **⚠️ Work In Progress** - This project is currently under active development.

A modern prompt management application built with Next.js, emphasizing clean architecture, SOLID principles, and comprehensive testing practices.

## About

This project demonstrates professional React development with a focus on maintainability, testability, and architectural excellence:

### Core Technologies

- **Next.js 15+** leveraging React Server Components and Client Components
- **React Hook Form** for robust form validation and state management
- **Framer Motion** for smooth, performant animations
- **TypeScript** for type-safe development
- **Tailwind CSS** with automatic class sorting via Biome
- **Biome** for lightning-fast linting and formatting

### Architecture & Practices

- **Clean Architecture** for clear separation of concerns and maintainability
- **SOLID Principles** applied throughout the codebase
- **Design Patterns** for scalable and reusable solutions
- **Comprehensive Testing** strategy covering unit, integration, and E2E tests
- **Git workflow** with VCS integration for team collaboration

The codebase enforces strict code quality standards with 80-character line width, consistent 2-space indentation, and comprehensive linting rules optimized for React and Next.js development.

## Prerequisites

- Node.js 18+ or Bun
- Docker and Docker Compose
- Git

## Getting Started

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd prompt-manager

# Install dependencies
npm install
# or
bun install
```

### 2. Environment Setup

```bash
# Copy the environment template
cp .env.example .env

# Edit .env with your configuration if needed
```

### 3. Database Setup

Start the PostgreSQL database using Docker:

```bash
# Start PostgreSQL container
docker-compose up -d

# Check container status
docker-compose ps

# View logs
docker-compose logs -f postgres
```

The database will be available at `localhost:5432` with the credentials from your `.env` file.

### 4. Database Migration

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Optional: Seed the database
npx prisma db seed
```

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### 6. Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format

# Run type checking
npm run type-check
```

## Project Structure

```
prompt-manager/
├── app/              # Next.js App Router pages and layouts
├── components/       # React components (Server & Client)
├── lib/             # Shared utilities and helpers
├── prisma/          # Database schema and migrations
├── public/          # Static assets
└── tests/           # Test files
```

## Docker Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Stop and remove volumes (⚠️ deletes data)
docker-compose down -v

# Restart services
docker-compose restart

# View logs
docker-compose logs -f postgres
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
