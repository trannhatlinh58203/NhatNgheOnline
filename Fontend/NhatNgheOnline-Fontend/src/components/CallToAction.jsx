import React from 'react';

export default function CallToAction() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Tìm ngôi nhà mơ ước của bạn ngay hôm nay
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Chúng tôi cung cấp các giải pháp bất động sản phù hợp với mọi nhu cầu của bạn. Đội ngũ tư vấn tận tâm luôn sẵn sàng hỗ trợ!
        </p>
        <a
          href="/lien-he"
          className="inline-block bg-white text-blue-600 font-semibold text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Liên hệ ngay
        </a>
      </div>
    </section>
  );
}
