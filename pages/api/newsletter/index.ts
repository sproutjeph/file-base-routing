import { connectDatabase, insertDocument } from '../../../helpers/db-util';

async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ meaasge: 'Invaild email address' });
      return;
    }
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'connecting to database failed' });

      return;
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
    } catch (error) {
      res.status(500).json({ message: 'Inserting to database failed' });
      client.close();
    }

    res.status(201).json({ message: 'Success', email: req.body.email });
  }
}

export default handler;
