import { PostResponse } from '../models/User';
import { petgramAPI } from '../axios/axios';

const getAllPost = async ():Promise<PostResponse[]> => {
    try {
        const response = await petgramAPI.get('/posts');
        return response.data

    } catch (error) {
        return error.response.data.message
    }
}

export {
    getAllPost
}