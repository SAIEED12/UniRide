'use client'
import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Wire this up to your auth logic
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#f2f2f8] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
                <p className="mt-1 text-gray-500 text-sm">Log in to your UniRide account.</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xs font-semibold tracking-wide text-gray-700 mb-2"
                        >
                            UNIVERSITY EMAIL
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@student.aiub.edu"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-xs font-semibold tracking-wide text-gray-700 mb-2"
                        >
                            PASSWORD
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <a
                            href="#"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline underline-offset-2"
                        >
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors cursor-pointer"
                    >
                        Log in
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    No account?{' '}
                    <Link href="/signup" className="text-indigo-600 font-medium hover:text-indigo-700 hover:underline underline-offset-2">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;