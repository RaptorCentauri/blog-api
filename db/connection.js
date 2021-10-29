import {MongoClient} from 'mongodb';
import config from '../config/config.js';

const client = new MongoClient(config.db);

try {
	await client.connect();
	console.info('Connected to MongoDB');
} catch (err) {
	console.error(`MongoDB Error: ${err.message}`)
}

process.on("SIGINT", async () => {
	await client.close();
	console.info("\nMongoDB Client disconnected");
	process.exit(0);
});


export default client;