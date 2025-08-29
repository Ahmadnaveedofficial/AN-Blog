import React, { useState, useEffect } from 'react'
import appwriteSercice from "../../appwrite/config"
import PostCard from '../PostCard';
import Container from '../container/Container';



function Allpost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
    }, [])
    appwriteSercice.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap -mx-2'>
                    {posts.map((post) => (
                        <div key={post.$id} className='w-full md:w-1/2 lg:w-1/3 px-2 mb-4'>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Allpost