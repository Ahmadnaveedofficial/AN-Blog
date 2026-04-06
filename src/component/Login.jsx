import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const login = async (data) => {
        setError(" ");
        try {
            const session = await authservice.login({
                email: data.email,
                password: data.password,
            });
            if (session) {
                const userData = await authservice.getUser();
                if (userData) {
                    dispatch(authLogin(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 pt-48 pb-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
            <div className="fixed top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="fixed bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-cyan-500/3 to-emerald-500/3 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative group w-full max-w-lg">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-slate-700/30 p-4 group/logo hover:scale-110 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/25">
                            <img
                                src="an3.png"
                                className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-200 cursor-pointer"
                                alt="Logo"
                            />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-5 leading-[1.1]">
                           <p>
                            Welcome Back
                            </p>
                        </h2>
                          <p className="text-xs text-slate-400">
                            Secure login with end-to-end encryption
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-5 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl backdrop-blur-sm">
                            <p className="text-red-400 text-center text-sm font-medium">{error}</p>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit(login)} className="space-y-5">
                        {/* Email Input */}
                        <div className="group/input">
                            <label className="block text-sm font-semibold text-slate-300 mb-2 group-focus-within/input:text-blue-400 transition-colors duration-300">
                                Email
                            </label>
                            <div className="relative">
                                <Input
                                    lable=""
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-slate-600/50 backdrop-blur-sm"
                                    {...register("email", {
                                        required: true,
                                        validate: {
                                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                "Email address must be a valid address",
                                        }
                                    })}
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-focus-within/input:from-blue-500/5 group-focus-within/input:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="group/input">
                            <label className="block text-sm font-semibold text-slate-300 mb-2 group-focus-within/input:text-blue-400 transition-colors duration-300">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-slate-600/50 backdrop-blur-sm"
                                    {...register("password", { required: true })}
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-focus-within/input:from-blue-500/5 group-focus-within/input:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-3">
                            <Button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1 group/btn"
                            >
                                <span className="flex items-center justify-center space-x-2">
                                    <span>Sign In</span>
                                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                </span>
                            </Button>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                           <p className="text-slate-300 font-light">
                            Don't have any account?{" "}
                            <Link
                                to="/signup"
                                className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
                            >
                                Sign Up
                            </Link>
                        </p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login