# Campus CareerOS

A comprehensive career development platform for college students to organize their academic profile, technical skills, projects, internships, and job applications in one place.

## Project Overview

Campus CareerOS helps students answer three critical questions:
- **Where am I now?** - Complete profile with education, skills, and interests
- **What should I work on next?** - Learning roadmap with milestones and progress tracking
- **What evidence do I have that I'm placement-ready?** - Portfolio, projects, and analytics

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS, Radix UI
- **Backend:** Express.js, Node.js, TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** NextAuth.js with JWT
- **Validation:** Zod, Joi
- **UI Components:** Custom + Radix UI primitives

## Project Structure

```
campus-careeros/
├── apps/
│   ├── web/                 # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/        # Next.js app directory
│   │   │   ├── components/ # React components
│   │   │   ├── lib/        # Utilities
│   │   │   └── styles/     # Tailwind styles
│   │   └── public/
│   └── api/                 # Express backend
│       ├── src/
│       │   ├── routes/     # API routes
│       │   ├── middleware/ # Express middleware
│       │   ├── models/     # Database models
│       │   ├── services/   # Business logic
│       │   └── scripts/    # Database scripts
│       └── prisma/         # Database schema
├── packages/
│   └── shared/             # Shared types and utilities
└── docker-compose.yml      # Database setup
```

## Getting Started

### Prerequisites
- Node.js 18+
- Yarn
- PostgreSQL 14+

### Installation

```bash
# Install dependencies
yarn install

# Setup environment variables
cp .env.example .env.local

# Setup database
yarn db:migrate
yarn db:seed

# Run development servers
yarn dev
```

The application will be available at:
- Frontend: http://localhost:3000
- API: http://localhost:3001

## Features

### Student Module
- ✅ User authentication & profile management
- ✅ Academic profile (education, courses, GPA)
- ✅ Skills management with proficiency levels
- ✅ Skill assessments and self-evaluations
- ✅ Project portfolio
- ✅ Internship tracking
- ✅ Job application pipeline
- ✅ Resume building from profile data
- ✅ Learning roadmap and progress tracking
- ✅ Analytics and placement readiness score

### Faculty/Coordinator Module
- ✅ View assigned students
- ✅ Create and assign learning activities
- ✅ Review student progress
- ✅ Manage skill assessments
- ✅ Track placement activities

### Admin/Placement Module
- ✅ User management
- ✅ Skill catalog management
- ✅ Course management
- ✅ Job and internship postings
- ✅ Analytics and reports
- ✅ Platform settings

## Database Schema

Core entities:
- Users (Students, Faculty, Admins)
- UserProfile (Personal info)
- Skills & SkillAssessments
- Projects & ProjectLinks
- Internships
- JobApplications
- LearningActivities
- RoadmapMilestones
- Courses

## API Endpoints

See `/apps/api/src/routes/` for complete API documentation.

## Development

```bash
# Format code
yarn format

# Run linter
yarn lint

# View database
yarn db:studio
```

## Deployment

See deployment documentation in `/docs/deployment.md`

## License

MIT
