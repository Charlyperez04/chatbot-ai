"use server"
import axios from 'axios';

export const onGetBlogPosts = async () => {
    try{
        const postArray: {
            id: string
            title: string
            image: string
            content: string
            createdAt: Date
        }[] = []
        const postsUrl= process.env.CLOUDWAYS_POSTS_URL
        if(!postsUrl) return
        const posts = await axios.get(postsUrl)
        
    } catch (error) {}
}