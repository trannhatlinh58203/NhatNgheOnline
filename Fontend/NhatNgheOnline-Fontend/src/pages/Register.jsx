import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!name || !email || !phone || !password || !confirmPassword) {
      setMessage('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Mật khẩu xác nhận không khớp!');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8080/api/register', {
        name,
        email,
        phone,
        password
      });
      setMessage(res.data || 'Đăng ký thành công!');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err) {
      const errorMsg = typeof err.response?.data === 'string'
        ? err.response.data
        : (err.response?.data?.message || 'Đăng ký thất bại!');
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký tài khoản</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Họ và tên"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Số điện thoại"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            placeholder="Xác nhận mật khẩu"
            className="w-full p-3 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition" disabled={loading}>
            {loading ? 'Đang đăng ký...' : 'Đăng ký'}
          </button>
        </form>
        {message && <div className="mt-4 text-center text-red-600">{message}</div>}
        <div className="text-center text-sm mt-2">
          Đã có tài khoản?{' '}
          <a href="/login" className="text-blue-600 hover:underline font-semibold">Đăng nhập</a>
        </div>
      </div>
    </div>
  );
} 