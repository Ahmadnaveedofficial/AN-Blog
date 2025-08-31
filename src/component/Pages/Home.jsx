
import React,{ useState,useEffect}from 'react'
import appwriteService from '../../appwrite/config';
import {Container,PostCard} from '../index';
import { Link } from 'react-router-dom';


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
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                <div className="absolute top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-500/3 to-emerald-500/3 rounded-full blur-3xl"></div>

                <Container>
                    <div className="flex justify-center items-center min-h-[85vh]">
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <div className="mb-16 py-8 px-4">
                                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-12 leading-[1.1] pb-4">
                                    Welcome to Your
                                    <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent pt-2 pb-4">
                                        Digital Journey 
                                    </span>
                                </h1>
                                
                                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
                                
                                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
                                    Discover amazing content, connect with like-minded individuals, and embark on an incredible journey of learning and growth.
                                </p>
                            </div>
                            
                            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-12 shadow-2xl shadow-slate-900/50 hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02] group">
                                <div className="mb-8">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-3.586l6.879-6.879A6 6 0 0118 9z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                        Ready to Get Started?
                                    </h2>
                                    <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                        Join our community to unlock exclusive content, share your thoughts, and connect with creators from around the world. Your adventure begins with a simple login.
                                    </p>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                               <Link
                               to='/login'
                               >
                                    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1 group/btn">
                                        <span className="flex items-center space-x-2">
                                            <span>Login to Continue</span>
                                            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                               </Link>
                                    
                                    <button className="px-8 py-4 border-2 border-slate-600 hover:border-purple-500 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-slate-800/30 group/btn2">
                                        <span className="flex items-center space-x-2">
                                            <span>Learn More</span>
                                            <svg className="w-5 h-5 group-hover/btn2:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>

                                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center group/feature">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Rich Content</h3>
                                        <p className="text-slate-400 text-sm">Explore diverse posts and articles</p>
                                    </div>
                                    
                                    <div className="text-center group/feature">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                                            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                                        <p className="text-slate-400 text-sm">Connect with amazing creators</p>
                                    </div>
                                    
                                    <div className="text-center group/feature">
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
                                            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Fast & Secure</h3>
                                        <p className="text-slate-400 text-sm">Lightning-fast, secure experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-16 relative overflow-hidden'>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="absolute top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <Container>
                <div className="text-center mb-16 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-[1.1] pb-4">
                        Latest Posts
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
                        Discover the latest insights, stories, and ideas from our community of creators.
                    </p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10'>
                    {posts.map((post, index) => (
                        <div 
                            key={post.$id} 
                            className='group hover:scale-105 transition-all duration-300 hover:-translate-y-2'
                            style={{
                                animationDelay: `${index * 150}ms`
                            }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300">
                                    <PostCard {...post} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {posts.length>8&& (
                    <div className="text-center mt-16 relative z-10">
                        <button className="px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1 border border-slate-600 hover:border-transparent group">
                            <span className="flex items-center space-x-2">
                                <span>Load More Posts</span>
                                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                        </button>
                    </div>
                )}
            </Container>
        </div>
    )
}



export default Home
