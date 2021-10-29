import dotenv from "dotenv";
dotenv.config();

const config = {
	port: process.env.PORT || 8080,
	db: process.env.DB_URL || 'mongodb://127.0.0.1:27017'
}

export default config;