import express, { Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = express.Router();

// Get user profile
router.get('/:userId', async (req: Request, res: Response) => {
  try {
    const profile = await prisma.userProfile.findUnique({
      where: { userId: req.params.userId },
    });
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Update user profile
router.put('/:userId', async (req: Request, res: Response) => {
  try {
    const profile = await prisma.userProfile.update({
      where: { userId: req.params.userId },
      data: req.body,
    });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update profile' });
  }
});

// Get profile completion score
router.get('/:userId/completion', async (req: Request, res: Response) => {
  try {
    const profile = await prisma.userProfile.findUnique({
      where: { userId: req.params.userId },
    });
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    
    // Calculate completion percentage
    const fields = [
      profile.phoneNumber,
      profile.currentInstitution,
      profile.degree,
      profile.cgpa,
      profile.bio,
      profile.linkedinUrl,
      profile.githubUrl,
      profile.careerObjective,
    ];
    const completionPercentage = (fields.filter(f => f).length / fields.length) * 100;
    
    res.json({ completionPercentage: Math.round(completionPercentage) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate completion' });
  }
});

export default router;
