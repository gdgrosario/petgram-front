import { Post } from "src/models/User";
import { useState, useEffect } from 'react';
import { getAllPost } from "@services/Posts";

export const useGetPosts = () => {
    const [posts, setPosts] = useState<Post[]>();
    const [error, setError] = useState()
    const [loading, setloading] = useState(true)

    useEffect(() => {
        (async() => {
            try {
                const response = await getAllPost()
                const mapResponse = response.map((post) => {
                    return {
                        ...post,
                        image: post.image.url
                    }
                })
                console.log(mapResponse)
                setPosts(mapResponse)
            } catch (error) {
                setError(error)
            }
            setloading(false)
        })();

    }, [])


    return {
        posts,
        loading,
        error
    }
}
