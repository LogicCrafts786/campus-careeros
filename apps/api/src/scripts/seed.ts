import prisma from '../lib/prisma';

const seedDatabase = async () => {
  try {
    console.log('🌱 Seeding database...');

    // Create skills
    const skills = await prisma.skill.createMany({
      data: [
        { name: 'React', category: 'WEB_DEVELOPMENT', description: 'JavaScript library for building UIs' },
        { name: 'TypeScript', category: 'PROGRAMMING', description: 'Typed superset of JavaScript' },
        { name: 'Node.js', category: 'PROGRAMMING', description: 'JavaScript runtime' },
        { name: 'PostgreSQL', category: 'TOOLS', description: 'Relational database' },
        { name: 'System Design', category: 'SOFT_SKILLS', description: 'Design scalable systems' },
        { name: 'Problem Solving', category: 'SOFT_SKILLS', description: 'Analytical thinking' },
      ],
      skipDuplicates: true,
    });

    // Create a test user
    const user = await prisma.user.create({
      data: {
        email: 'arjun@university.edu',
        password: 'hashed_password_here',
        firstName: 'Arjun',
        lastName: 'Sharma',
        role: 'STUDENT',
        profile: {
          create: {
            currentInstitution: 'IIT Delhi',
            degree: 'B.Tech',
            currentYear: 'Third Year',
            cgpa: 8.42,
            bio: 'Passionate about full-stack web development',
            linkedinUrl: 'https://linkedin.com/in/arjun-sharma',
            githubUrl: 'https://github.com/arjun-sharma',
            careerObjective: 'Software Engineer at a product-based company',
            preferredJobRoles: ['Software Engineer', 'Frontend Developer'],
            preferredLocations: ['Bangalore', 'Mumbai'],
            placementReadinessScore: 72,
          },
        },
      },
    });

    // Add skills to user
    await prisma.userSkill.createMany({
      data: [
        { userId: user.id, skillId: skills[0].id, proficiencyLevel: 'ADVANCED', yearsOfExperience: 3 },
        { userId: user.id, skillId: skills[1].id, proficiencyLevel: 'INTERMEDIATE', yearsOfExperience: 2 },
        { userId: user.id, skillId: skills[2].id, proficiencyLevel: 'INTERMEDIATE', yearsOfExperience: 2 },
      ],
    });

    // Create projects
    await prisma.project.createMany({
      data: [
        {
          userId: user.id,
          title: 'E-Commerce Platform',
          description: 'Full-stack marketplace with payment integration',
          technologies: ['React', 'Node.js', 'PostgreSQL'],
          status: 'COMPLETED',
          featured: true,
        },
        {
          userId: user.id,
          title: 'AI Chat Application',
          description: 'Real-time messaging with LLM integration',
          technologies: ['Next.js', 'WebSocket', 'OpenAI'],
          status: 'IN_PROGRESS',
        },
      ],
    });

    // Create internships
    await prisma.internship.create({
      data: {
        userId: user.id,
        companyName: 'Tech Startup Inc',
        position: 'Frontend Engineering Intern',
        startDate: new Date('2024-06-01'),
        endDate: new Date('2024-08-01'),
        location: 'Bangalore',
        status: 'COMPLETED',
        skillsGained: ['React', 'TypeScript'],
      },
    });

    // Create job applications
    await prisma.jobApplication.createMany({
      data: [
        {
          userId: user.id,
          companyName: 'Razorpay',
          position: 'Frontend Engineer',
          jobType: 'FULL_TIME',
          status: 'INTERVIEW_SCHEDULED',
          interviewRounds: 3,
        },
        {
          userId: user.id,
          companyName: 'Microsoft',
          position: 'Software Engineer',
          jobType: 'FULL_TIME',
          status: 'UNDER_REVIEW',
        },
      ],
    });

    // Create roadmap milestones
    await prisma.roadmapMilestone.createMany({
      data: [
        {
          userId: user.id,
          title: 'Master React Hooks',
          category: 'Learning',
          targetDate: new Date('2024-12-15'),
          status: 'IN_PROGRESS',
          progress: 70,
        },
        {
          userId: user.id,
          title: 'Complete System Design Course',
          category: 'Learning',
          targetDate: new Date('2025-01-31'),
          status: 'NOT_STARTED',
        },
      ],
    });

    console.log('✅ Database seeding completed!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
