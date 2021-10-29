import {gql} from 'apollo-server-express';

const typeDef = `
	type Post {
		id: ID!
		title: String!
		content: String!
	}
	
	type Query {
		posts: [Post!]
		post(postId: ID!) : Post
	}	
	
	type Mutation {
		addPost(postText: String!): Post
		removePost(id:ID!) : Post
	}	
`;

export default typeDef;
