import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [tab, setTab] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let username = tab === 'email' ? email : phone;
    try {
      const res = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
      });
      setMessage(res.data);
      if (res.data === "Đăng nhập thành công!") {
        setTimeout(() => {
          navigate('/');
        }, 500);
      }
    } catch (err) {
      const errorMsg = typeof err.response?.data === 'string'
        ? err.response.data
        : (err.response?.data?.message || 'Đăng nhập thất bại!');
      setMessage(errorMsg);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold rounded-t-md focus:outline-none ${tab === 'email' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setTab('email')}
          >
            Đăng nhập bằng email
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-t-md focus:outline-none ml-2 ${tab === 'phone' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setTab('phone')}
          >
            Đăng nhập bằng số điện thoại
          </button>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          {tab === 'email' ? (
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border rounded"
              required
            />
          ) : (
            <input
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Số điện thoại"
              className="w-full p-3 border rounded"
              required
            />
          )}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Mật khẩu"
              className="w-full p-3 border rounded pr-10"
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-600 hover:underline">Quên mật khẩu email?</a>
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded font-bold hover:bg-red-700 transition">ĐĂNG NHẬP</button>
        </form>
        {message && <div className="mt-4 text-center text-red-600">{message}</div>}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">hoặc đăng nhập bằng</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            className="flex-1 flex items-center justify-center bg-red-500 text-white py-2 rounded hover:bg-red-600 transition font-semibold"
            type="button"
            onClick={() => window.location.href = 'http://localhost:8080/oauth2/authorization/google'}
          >
            <FaGoogle className="mr-2" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition font-semibold">
            <FaFacebookF className="mr-2" /> Facebook
          </button>
        </div>
        <div className="text-center text-sm mt-2">
          Bạn chưa có tài khoản?{' '}
          <a href="#" className="text-blue-600 hover:underline font-semibold">Đăng ký ngay!</a>
        </div>
      </div>
    </div>
  );
} 