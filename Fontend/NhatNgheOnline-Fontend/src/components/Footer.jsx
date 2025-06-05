import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1 - Giới thiệu */}
        <div>
          <h3 className="text-xl font-bold mb-4">Thuê đi chờ chi</h3>
          <p className="text-gray-400">
            Nền tảng tìm kiếm bất động sản thông minh – nơi kết nối giữa người cần thuê và người cho thuê một cách nhanh chóng và hiệu quả.
          </p>
        </div>

        {/* Cột 2 - Liên kết nhanh */}
        <div>
          <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white transition">Trang chủ</a></li>
            <li><a href="/nha-pho" className="text-gray-400 hover:text-white transition">Nhà phố</a></li>
            <li><a href="/can-ho" className="text-gray-400 hover:text-white transition">Căn hộ</a></li>
            <li><a href="/lien-he" className="text-gray-400 hover:text-white transition">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 3 - Liên hệ */}
        <div>
          <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
          <p className="text-gray-400">📞 0909 999 888</p>
          <p className="text-gray-400">📧 support@thuedichochi.vn</p>
          <p className="text-gray-400">🏠 123 Đường Nhà Đẹp, TP.HCM</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Thuê đi chờ chi. Đã đăng ký bản quyền.
      </div>
    </footer>
  );
}
