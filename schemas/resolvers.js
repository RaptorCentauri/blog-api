import {index, findOne} from '../models/blog.js'

const resolvers = {
	Query: {
		posts: (parent, args, context, info) => {
			return index()
		},
		post:  (parent, args, context, info) => {
			return findOne(args.postId)
		}
	},
	Post: {
		id: (parent) => parent._id,
		title: (parent) => parent.title,
		content: (parent) => parent.content,
	},
     
}
export default resolvers;
