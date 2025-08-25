import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Button, Input, Logo } from './index'
import { login } from '../store/authSlice'

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const signup = async (data) => {
        setError(" ");
        try {
            const userData = await authService.createAccount(data.name, data.email, data.password);
            if (userData) {
                const userData = await authService.getUser();
                if (userData) {
                    dispatch(login(userData));
                    navigate("/");
                }
            }
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight '>Create an account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(signup)} >
                    <div className='mt-8 space-y-5'>
                        <input type="text"
                            lable="Name"
                            placeholder="Enter name"
                            {...register("name", { required: true })}
                        />
                        <Input
                            lable="Email"
                            type="email"
                            placeholder="Enter email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            lable="Password"
                            type="password"
                            placeholder="Enter password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Create Account</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default SignUp