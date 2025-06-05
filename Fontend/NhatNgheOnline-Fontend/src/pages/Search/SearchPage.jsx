import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tìm kiếm:', { keyword, type });
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />

      {/* SECTION: Video + Form */}
      <section className="relative w-full h-[500px] mt-[80px]">
        {/* Video nền */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>

        {/* Overlay đen nhẹ */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Form tìm kiếm nổi lên trên */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-md p-6 rounded-lg flex flex-col md:flex-row items-center gap-4 max-w-4xl w-full mx-auto shadow-lg"
          >
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập khu vực hoặc địa chỉ..."
              className="flex-1 p-3 rounded-md border border-gray-300 text-gray-800 w-full"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="p-3 rounded-md border border-gray-300 text-gray-800 w-full md:w-auto"
            >
              <option value="">Loại nhà</option>
              <option value="nhà ở">Nhà ở</option>
              <option value="chung cư">Chung cư</option>
              <option value="biệt thự">Biệt thự</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto"
            >
              Tìm kiếm
            </button>
          </form>
        </div>
      </section>

      {/* Nội dung sau tìm kiếm nếu cần */}
      <main className="flex-1 bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kết quả tìm kiếm</h2>
          <p className="text-gray-600">Không có dữ liệu hiển thị (demo).</p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
