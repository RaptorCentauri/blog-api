import client from '../db/connection.js'
import {ObjectId} from 'mongodb';


const index = () => {
 return client.db("blog_db").collection('blog').find().toArray();
}

const findOne = async (id) => {
	return client.db("blog_db").collection('blog').findOne({'_id': ObjectId(id)});
}

export {index, findOne};

