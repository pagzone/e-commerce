import { config } from '@/lib/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(config.database.CONNECTION_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export { client as db };