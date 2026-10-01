import express, { Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = express.Router();

// Get all job applications for a user
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const applications = await prisma.jobApplication.findMany({
      where: { userId: req.params.userId },
      orderBy: { appliedDate: 'desc' },
    });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// Create job application
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, companyName, position, jobType } = req.body;
    const application = await prisma.jobApplication.create({
      data: {
        userId,
        companyName,
        position,
        jobType,
      },
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create application' });
  }
});

// Update application status
router.put('/:applicationId', async (req: Request, res: Response) => {
  try {
    const application = await prisma.jobApplication.update({
      where: { id: req.params.applicationId },
      data: req.body,
    });
    res.json(application);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update application' });
  }
});

export default router;
