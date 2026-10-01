import express, { Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = express.Router();

// Get all internships for a user
router.get('/user/:userId', async (req: Request, res: Response) => {
  try {
    const internships = await prisma.internship.findMany({
      where: { userId: req.params.userId },
      orderBy: { createdAt: 'desc' },
    });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch internships' });
  }
});

// Create internship
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, companyName, position, startDate } = req.body;
    const internship = await prisma.internship.create({
      data: {
        userId,
        companyName,
        position,
        startDate: new Date(startDate),
      },
    });
    res.status(201).json(internship);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create internship' });
  }
});

// Update internship status
router.put('/:internshipId', async (req: Request, res: Response) => {
  try {
    const internship = await prisma.internship.update({
      where: { id: req.params.internshipId },
      data: req.body,
    });
    res.json(internship);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update internship' });
  }
});

export default router;
