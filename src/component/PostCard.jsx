import React from 'react'
import  appwriteSeirvice from '../appwrite/config'
import {Link, Links} from 'react-router-dom'


function PostCard({
    $id,
    title,
    featuredImage,
}) {
  return (
   <Links to={ `/post/${id}`}>
    <div className='w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
           <div className='w-full justify-center items-center mb-4'>
                <img src={appwriteSeirvice.getFilePreview(featuredImage)} alt={title} className='rounded-lg'/>
           </div>
           <h2 className='text-xl font-bold'>{title}</h2>
    </div>
   </Links>
  )
}

export default PostCard


// import React from 'react'
// import appwriteSeirvice from '../appwrite/config'
// import {Link, Links} from 'react-router-dom'

// function PostCard({
//     $id,
//     title,
//     featuredImage,
// }) {
//   return (
//    <Links to={`/post/${$id}`}>
//     <div className='group w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-blue-200 cursor-pointer'>
//            <div className='w-full relative overflow-hidden'>
//                 <img 
//                   src={appwriteSeirvice.getFilePreview(featuredImage)} 
//                   alt={title} 
//                   className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
//                 />
//                 <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
//            </div>
//            <div className='p-6'>
//                 <h2 className='text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight'>{title}</h2>
//                 <div className='mt-4 flex items-center justify-between'>
//                   <span className='text-sm text-gray-500 font-medium'>Read More</span>
//                   <svg className='w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//                     <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
//                   </svg>
//                 </div>
//            </div>
//     </div>
//    </Links>
//   )
// }

// export default PostCard