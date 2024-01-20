import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';
import nextConnect from 'next-connect';

const handler = nextConnect();

// Add CORS headers
handler.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // or set your own origin like
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Authorization, Accept, Content-Type'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  return next();
});

handler.get(async (req, res) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    return res.status(200).json(prompts);
  } catch (error) {
    return res.status(500).send("Failed to fetch all prompts");
  }
});

export default handler;