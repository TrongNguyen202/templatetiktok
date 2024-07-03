"use client";

import React, { useState } from 'react';
import { useUserStore } from '../apis/stores/UserStore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loading, login} = useUserStore()
  const router = useRouter()
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const data = {
      email:email,
      password:password
    }
    const onSuccess =(res:any)=>{
      localStorage.setItem("token",res )
      toast("login thanh cong")
      router.push("/")
    }
    const onFail = (error:any) =>{
      console.log("error when login", error)
      toast(` co loi xay ra ${error.response.data.message}`)
    }
    login(data, onSuccess,onFail)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Page</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="block mb-1 text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="form-group">
            <label className="block mb-1 text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {loading?`loading`:`login`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
