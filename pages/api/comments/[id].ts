import { MongoClient } from 'mongodb';
import {
  connectDatabase,
  getAlldocument,
  insertDocument,
} from '../../../helpers/db-util';

async function handler(req: any, res: any) {
  const eventId = req.query.id;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Connecting to database failed' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' });
      client.close();
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;
    try {
      result = await insertDocument(client, 'comments', newComment);
      res.status(201).json({ message: 'Added Comment', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Inserting failed' });
    }
    console.log(result);
    newComment.eventId = result.insertedId;
  }

  if (req.method === 'GET') {
    const db = client.db();
    try {
      const documents = await getAlldocument(client, 'comments', { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: 'fail to get document' });
    }
  }
  client.close();
}

export default handler;
