import express, { Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = express.Router();

// Get all projects for a user
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      where: { userId: req.params.userId },
      include: { projectLinks: true },
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Get single project
router.get('/:projectId', async (req: Request, res: Response) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.projectId },
      include: { projectLinks: true, user: { select: { firstName: true, lastName: true } } },
    });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// Create project
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, title, description, technologies } = req.body;
    const project = await prisma.project.create({
      data: {
        userId,
        title,
        description,
        technologies: technologies || [],
      },
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create project' });
  }
});

// Update project
router.put('/:projectId', async (req: Request, res: Response) => {
  try {
    const project = await prisma.project.update({
      where: { id: req.params.projectId },
      data: req.body,
    });
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update project' });
  }
});

export default router;
