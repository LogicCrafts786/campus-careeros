import express, { Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = express.Router();

// Get all roadmap milestones for a user
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const milestones = await prisma.roadmapMilestone.findMany({
      where: { userId: req.params.userId },
      orderBy: { targetDate: 'asc' },
    });
    res.json(milestones);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch milestones' });
  }
});

// Create milestone
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, title, category, targetDate } = req.body;
    const milestone = await prisma.roadmapMilestone.create({
      data: {
        userId,
        title,
        category,
        targetDate: new Date(targetDate),
      },
    });
    res.status(201).json(milestone);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create milestone' });
  }
});

// Update milestone
router.put('/:milestoneId', async (req: Request, res: Response) => {
  try {
    const milestone = await prisma.roadmapMilestone.update({
      where: { id: req.params.milestoneId },
      data: req.body,
    });
    res.json(milestone);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update milestone' });
  }
});

export default router;
