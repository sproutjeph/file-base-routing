import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://donjeph:onmyway222@cluster0.acwls.mongodb.net/events?retryWrites=true&w=majority'
  );

  return client;
}
export async function insertDocument(
  client: any,
  collection: any,
  document: any
) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAlldocument(
  client: any,
  collection: string,
  sort: any
) {
  const db = client.db();
  const document = await db.collection(collection).find().sort(sort).toArray();

  return document;
}
