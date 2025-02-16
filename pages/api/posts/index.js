// /pages/api/posts/index.js
import { PrismaClient } from '@prisma/client';

//Instance
const prisma = new PrismaClient();

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching posts' });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === 'POST') {
    try {
      const { title, content } = req.body;
      const newPost = await prisma.post.create({
        data: {
          title,
          content
        }
      });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'Error creating post' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
