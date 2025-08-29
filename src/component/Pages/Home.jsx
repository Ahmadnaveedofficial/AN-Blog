import React,{ useState,useEffect}from 'react'
import appwriteService from '../../appwrite/config';
import {Container,PostCard} from '../index';


function Home() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        appwriteService.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })
    },[])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat, error molestias in magni natus modi reprehenderit explicabo vitae fuga iste, id ipsum, corrupti deserunt iure placeat ea dolor odit.
                                Iusto accusantium amet sint vel quisquam, tempore ipsum ipsam iste facilis ea. Odit temporibus reiciendis repudiandae suscipit architecto ea delectus laboriosam dolore error ab! Quos aut amet animi consequatur dignissimos.
                                Recusandae laboriosam quis sequi quibusdam consectetur fuga minima nobis tenetur reiciendis a, facere sapiente totam dolorum dignissimos nostrum saepe sed hic. Magni doloribus ut neque. Fugit voluptatem totam optio voluptate!
                                Natus dolorum corporis numquam deserunt corrupti minus ea obcaecati, fugit, architecto ipsa quae nisi in culpa, error inventore rerum. Alias accusantium labore culpa animi ipsam architecto nisi beatae eius ullam.
                                Rerum, aliquam! Consectetur, debitis a magni fugiat animi beatae tenetur quod veniam enim magnam odio itaque. Illum numquam itaque omnis iusto odio dicta hic voluptate, quos rerum, ad libero ratione? 
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}



export default Home