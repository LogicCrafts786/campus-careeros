import express, { Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = express.Router();

// Get all skills
router.get('/', async (req: Request, res: Response) => {
  try {
    const skills = await prisma.skill.findMany({
      include: { _count: { select: { userSkills: true } } },
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Get skills by category
router.get('/category/:category', async (req: Request, res: Response) => {
  try {
    const skills = await prisma.skill.findMany({
      where: { category: req.params.category as any },
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Create skill (admin only)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, category, description } = req.body;
    const skill = await prisma.skill.create({
      data: { name, category, description },
    });
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create skill' });
  }
});

// Add skill to user
router.post('/user/:userId', async (req: Request, res: Response) => {
  try {
    const { skillId, proficiencyLevel, yearsOfExperience } = req.body;
    const userSkill = await prisma.userSkill.create({
      data: {
        userId: req.params.userId,
        skillId,
        proficiencyLevel: proficiencyLevel || 'BEGINNER',
        yearsOfExperience: yearsOfExperience || 0,
      },
    });
    res.status(201).json(userSkill);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add skill' });
  }
});

export default router;
