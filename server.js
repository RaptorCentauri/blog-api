import express from 'express';
import config from './config/config.js'
import {ApolloServer} from 'apollo-server-express'
import client from './db/connection.js'
import {typeDefs, resolvers} from './schemas/index.js'
// const { authMiddleware } = require("./utils/auth");




const PORT = 8080; 
const app = new express()

const graphQLServer = new ApolloServer({
		typeDefs,
		resolvers,
		// context: authMiddleware,

	})
	
await graphQLServer.start();
graphQLServer.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(config.port, ()=>console.log(`Server listening at port ${PORT}|| GraphQL at ${config.port}/${graphQLServer.graphqlPath}`))
