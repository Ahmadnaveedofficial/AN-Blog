import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'


function PostCard({
  $id,
  title,
  featuredImage,
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full max-w-sm p-4 pt-44 rounded-xl bg-white border border-gray-200  shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <div className='w-full justify-center items-center mb-4'>
          <img
            src={featuredImage ? appwriteService.getFilePreview(featuredImage) : "/placeholder.png"}
            alt={title}
            className="rounded-lg"
          />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard



