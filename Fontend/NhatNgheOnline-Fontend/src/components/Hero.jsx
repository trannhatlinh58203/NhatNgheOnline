import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import hook điều hướng
import '../styles.css';

export default function Hero() {
  const navigate = useNavigate(); // ✅ dùng hook này để chuyển trang

  return (
    <section className="relative min-h-screen text-white pt-28 overflow-hidden">
      {/* Nền video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2022/09/14/131258-749647533_large.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>

      {/* Overlay tối mờ */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Nội dung */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8 mt-20"> {/* Tăng margin-top */}
          Khám phá ngôi nhà mơ ước cùng chúng tôi
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 mt-4"> {/* Thêm margin-top cho đoạn văn */}
          Tìm kiếm bất động sản phù hợp với phong cách sống của bạn
        </p>
        <button
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          onClick={() => navigate('/search')}
        >
          Start Searching
        </button>
      </div>
    </section>
  );
}
