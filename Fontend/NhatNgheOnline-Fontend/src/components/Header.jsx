import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=150&q=80"
            className="w-12 h-12 object-cover rounded-full"
            alt="Logo"
          />
          <span className="text-2xl font-semibold text-gray-100">BĐS Siêu Xịn</span>
        </div>

       {/* Desktop nav */}
<div className="hidden md:flex items-center space-x-6 font-medium text-white">
  <nav className="flex space-x-6">
    <a href="#" className="text-lg font-semibold hover:text-gray-100 transition">Trang chủ</a>
    <a href="#" className="text-lg font-semibold hover:text-gray-100 transition">Danh mục</a>
    <a href="#" className="text-lg font-semibold hover:text-gray-100 transition">Dịch vụ</a>
    <a href="#" className="text-lg font-semibold hover:text-gray-100 transition">Liên hệ</a>
  </nav>
  <button className="text-lg font-semibold text-white border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-blue-900 transition" onClick={() => navigate('/login')}>
    Đăng nhập
  </button>
</div>


        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 font-semibold"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-blue-900/90 backdrop-blur-md shadow-md z-40`}>
        <div className="flex flex-col px-6 py-4 space-y-3 text-white font-medium">
          <a href="#" className="text-lg font-semibold hover:text-gray-200 transition">Trang chủ</a>
          <a href="#" className="text-lg font-semibold hover:text-gray-200 transition">Danh mục</a>
          <a href="#" className="text-lg font-semibold hover:text-gray-200 transition">Dịch vụ</a>
          <a href="#" className="text-lg font-semibold hover:text-gray-200 transition">Liên hệ</a>

          <div className="flex justify-center w-full mt-4">
            <button className="text-lg font-semibold text-white hover:text-gray-200 transition w-full text-center" onClick={() => { setIsOpen(false); navigate('/login'); }}>
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
