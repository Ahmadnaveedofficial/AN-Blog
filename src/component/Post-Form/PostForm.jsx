// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "..";
// import appwriteService from "../../appwrite/config";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { ID } from "appwrite";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.user);

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");
//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     const submit = async (data) => {
//         try {
//             let file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;
//             if (post && file) {
//                 await appwriteService.deleteFile(post.featuredImage);
//             }

//             const payload = {
//                 ...data,
//                 featuredImage: file ? file.$id : post?.featuredImage || "",
//                 userId: userData?.$id || "",
//                 slug: data.slug || ID.unique(),
//             };

//             console.log("Submitting post payload:", payload);

//             const dbPost = post
//                 ? await appwriteService.updatePost(post.$id, payload)
//                 : await appwriteService.createPost(payload);

//             if (dbPost) navigate(`/post/${dbPost.$id}`);
//         } catch (err) {
//             console.error("Post submit error:", err);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap pt-44">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }

// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "..";
// import appwriteService from "../../appwrite/config";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { ID } from "appwrite";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.user);

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");
//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     const submit = async (data) => {
//         try {
//             let file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;
//             if (post && file) {
//                 await appwriteService.deleteFile(post.featuredImage);
//             }

//             const payload = {
//                 ...data,
//                 featuredImage: file ? file.$id : post?.featuredImage || "",
//                 userId: userData?.$id || "",
//                 slug: data.slug || ID.unique(),
//             };

//             console.log("Submitting post payload:", payload);

//             const dbPost = post
//                 ? await appwriteService.updatePost(post.$id, payload)
//                 : await appwriteService.createPost(payload);

//             if (dbPost) navigate(`/post/${dbPost.$id}`);
//         } catch (err) {
//             console.error("Post submit error:", err);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 relative overflow-hidden">
//                   <section className="flex flex-col ml-96 items-center justify-center text-center px-6 py-20 pt-40 relative z-10">
//                 <div className="rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-slate-700/30 w-20 h-20 flex items-center justify-center mb-6 group hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
//                     <svg className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                     </svg>
//                 </div>
                
//                 <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4 leading-[1.1] pb-2">
//                     {post ? "Edit Post" : "Create New Post"}
//                 </h1>
                
//                 <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
                
//                 <p className="max-w-2xl text-lg text-slate-300 font-light leading-relaxed">
//                     {post ? "Update your existing post with new content and settings" : "Share your thoughts and ideas with the world"}
//                 </p>
//             </section>
//             {/* Background decorative elements */}
//             <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
//             <div className="fixed top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
//             <div className="fixed bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
//             <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-500/3 to-emerald-500/3 rounded-full blur-3xl pointer-events-none"></div>

//             {/* Main Content Section */}
//             <div className="w-2/3 px-6 relative z-10">
//                 <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-xl hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.01] group">
//                     <div className="flex items-center space-x-4 mb-8">
//                         <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                             <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                             </svg>
//                         </div>
//                         <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Post Content</h2>
//                     </div>
                    
//                     <div className="space-y-6">
//                         <Input
//                             label="Title :"
//                             placeholder="Enter your post title..."
//                             className="mb-4"
//                             {...register("title", { required: true })}
//                         />
//                         <Input
//                             label="Slug :"
//                             placeholder="auto-generated-from-title"
//                             className="mb-4"
//                             {...register("slug", { required: true })}
//                             onInput={(e) => {
//                                 setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                             }}
//                         />
//                         <div className="mt-8">
//                             <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             {/* Sidebar Section */}
//             <div className="w-1/3 px-6 relative z-10">
//                 <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-xl hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.01] group">
//                     <div className="flex items-center space-x-4 mb-8">
//                         <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                             <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             </svg>
//                         </div>
//                         <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Settings</h2>
//                     </div>
                    
//                     <div className="space-y-6">
//                         {/* Featured Image Upload */}
//                         <div>
//                             <label className="block text-sm font-semibold text-slate-300 mb-3">
//                                 Featured Image :
//                             </label>
//                             <input
//                                 type="file"
//                                 className="block w-full text-sm text-slate-300 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-500/20 file:to-purple-500/20 file:text-blue-400 file:backdrop-blur-sm hover:file:from-blue-500/30 hover:file:to-purple-500/30 border border-slate-700/50 rounded-2xl cursor-pointer bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 hover:scale-[1.02] mb-4"
//                                 accept="image/png, image/jpg, image/jpeg, image/gif"
//                                 {...register("image", { required: !post })}
//                             />
//                         </div>
                        
//                         {/* Current Image Preview */}
//                         {post && (
//                             <div className="w-full mb-4">
//                                 <label className="block text-sm font-semibold text-slate-300 mb-3">
//                                     Current Image:
//                                 </label>
//                                 <div className="relative group/image">
//                                     <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur opacity-0 group-hover/image:opacity-100 transition-all duration-500"></div>
//                                     <img
//                                         src={appwriteService.getFilePreview(post.featuredImage)}
//                                         alt={post.title}
//                                         className="relative w-full h-48 object-cover rounded-2xl border border-slate-700/50 shadow-xl group-hover/image:shadow-2xl group-hover/image:shadow-cyan-500/10 transition-all duration-500 hover:scale-[1.02]"
//                                     />
//                                 </div>
//                             </div>
//                         )}
                        
//                         {/* Status Selection */}
//                         <Select
//                             options={["active", "inactive"]}
//                             label="Status"
//                             className="mb-4"
//                             {...register("status", { required: true })}
//                         />
                        
//                         {/* Submit Button */}
//                         <div className="relative group/button">
//                             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur opacity-0 group-hover/button:opacity-100 transition-all duration-500"></div>
//                             <Button 
//                                 type="submit" 
//                                 bgColor={post ? "bg-gradient-to-r from-emerald-500 to-cyan-500" : "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"} 
//                                 className="relative w-full py-4 px-6 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/30 hover:-translate-y-1"
//                             >
//                                 <span className="flex items-center justify-center gap-3">
//                                     {post ? (
//                                         <>
//                                             <svg className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//                                             </svg>
//                                             <span className="text-lg">Update</span>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <svg className="w-5 h-5 group-hover/button:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                                             </svg>
//                                             <span className="text-lg">Submit</span>
//                                         </>
//                                     )}
//                                 </span>
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//                   {/* Quick Tips Card */}
//                 <div className="mt-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02]">
//                     <div className="flex items-center space-x-3 mb-4">
//                         <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
//                             <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                         </div>
//                         <h3 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Quick Tips</h3>
//                     </div>
//                     <ul className="space-y-3 text-sm text-slate-400">
//                         <li className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300">
//                             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
//                             <span>Title automatically generates slug</span>
//                         </li>
//                         <li className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300">
//                             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0"></div>
//                             <span>Use high-quality images for better engagement</span>
//                         </li>
//                         <li className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300">
//                             <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 mt-2 flex-shrink-0"></div>
//                             <span>Draft posts can be saved as inactive</span>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </form>
//     );
// }




import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ID } from "appwrite";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.user);

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    const submit = async (data) => {
        try {
            let file = data.image?.[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            if (post && file) {
                await appwriteService.deleteFile(post.featuredImage);
            }

            const payload = {
                ...data,
                featuredImage: file ? file.$id : post?.featuredImage || "",
                userId: userData?.$id || "",
                slug: data.slug || ID.unique(),
            };

            console.log("Submitting post payload:", payload);

            const dbPost = post
                ? await appwriteService.updatePost(post.$id, payload)
                : await appwriteService.createPost(payload);

            if (dbPost) navigate(`/post/${dbPost.$id}`);
        } catch (err) {
            console.error("Post submit error:", err);
        }
    };

    return (
        <div className="min-h-screen text-gray-100 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
            <div className="fixed top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="fixed bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-500/3 to-emerald-500/3 rounded-full blur-3xl pointer-events-none"></div>

            <form onSubmit={handleSubmit(submit)} className="relative z-10">
                {/* Header Section */}
                <section className="flex flex-col items-center justify-center text-center px-6 py-20 pt-40">
                    <div className="rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-slate-700/30 w-20 h-20 flex items-center justify-center mb-6 group hover:scale-110 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                        <svg className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    
                    <h1 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-4 leading-[1.1] pb-2">
                        {post ? "Edit Post" : "Create New Post"}
                    </h1>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
                    
                    <p className="max-w-2xl text-lg text-slate-300 font-light leading-relaxed">
                        {post ? "Update your existing post with new content and settings" : "Share your thoughts and ideas with the world"}
                    </p>
                </section>

                {/* Main Content Section */}
                <div className="flex flex-wrap px-6 pb-20">
                    {/* Main Content */}
                    <div className="w-2/3 px-6">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-xl hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.01] group">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Post Content</h2>
                            </div>
                            
                            <div className="space-y-6">
                                <Input
                                    label="Title :"
                                    placeholder="Enter your post title..."
                                    className="mb-4"
                                    {...register("title", { required: true })}
                                />
                                <Input
                                    label="Slug :"
                                    placeholder="auto-generated-from-title"
                                    className="mb-4"
                                    {...register("slug", { required: true })}
                                    onInput={(e) => {
                                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                                    }}
                                />
                                <div className="mt-8">
                                    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Sidebar Section */}
                    <div className="w-1/3 px-6">
                        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-3xl p-8 shadow-xl hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.01] group">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Settings</h2>
                            </div>
                            
                            <div className="space-y-6">
                                {/* Featured Image Upload */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-3">
                                        Featured Image :
                                    </label>
                                    <input
                                        type="file"
                                        className="block w-full text-sm text-slate-300 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-blue-500/20 file:to-purple-500/20 file:text-blue-400 file:backdrop-blur-sm hover:file:from-blue-500/30 hover:file:to-purple-500/30 border border-slate-700/50 rounded-2xl cursor-pointer bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 hover:scale-[1.02] mb-4"
                                        accept="image/png, image/jpg, image/jpeg, image/gif"
                                        {...register("image", { required: !post })}
                                    />
                                </div>
                                
                                {/* Current Image Preview */}
                                {post && (
                                    <div className="w-full mb-4">
                                        <label className="block text-sm font-semibold text-slate-300 mb-3">
                                            Current Image:
                                        </label>
                                        <div className="relative group/image">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur opacity-0 group-hover/image:opacity-100 transition-all duration-500"></div>
                                            <img
                                                src={appwriteService.getFilePreview(post.featuredImage)}
                                                alt={post.title}
                                                className="relative w-full h-48 object-cover rounded-2xl border border-slate-700/50 shadow-xl group-hover/image:shadow-2xl group-hover/image:shadow-cyan-500/10 transition-all duration-500 hover:scale-[1.02]"
                                            />
                                        </div>
                                    </div>
                                )}
                                
                                {/* Status Selection */}
                                <Select
                                    options={["active", "inactive"]}
                                    label="Status"
                                    className="mb-4"
                                    {...register("status", { required: true })}
                                />
                                
                                {/* Submit Button */}
                                <div className="relative group/button">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur opacity-0 group-hover/button:opacity-100 transition-all duration-500"></div>
                                    <Button 
                                        type="submit" 
                                        bgColor={post ? "bg-gradient-to-r from-emerald-500 to-cyan-500" : "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"} 
                                        className="relative w-full py-4 px-6 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/30 hover:-translate-y-1"
                                    >
                                        <span className="flex items-center justify-center gap-3">
                                            {post ? (
                                                <>
                                                    <svg className="w-5 h-5 group-hover/button:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                                    </svg>
                                                    <span className="text-lg">Update</span>
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-5 h-5 group-hover/button:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                    <span className="text-lg">Submit</span>
                                                </>
                                            )}
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Quick Tips Card */}
                        <div className="mt-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/40 rounded-2xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Quick Tips</h3>
                            </div>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                                    <span>Title automatically generates slug</span>
                                </li>
                                <li className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0"></div>
                                    <span>Use high-quality images for better engagement</span>
                                </li>
                                <li className="flex items-start space-x-3 group/item hover:translate-x-1 transition-transform duration-300">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                                    <span>Draft posts can be saved as inactive</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

               
            </form>
        </div>
    );
}
