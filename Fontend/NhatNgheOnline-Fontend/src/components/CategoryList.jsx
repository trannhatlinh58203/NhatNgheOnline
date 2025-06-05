import React from 'react';

const categories = [
  {
    name: 'Căn hộ',
    description: 'Không gian sống tiện nghi, phù hợp với gia đình trẻ và cá nhân.',
    image: '/images/apartment.png',  // Đường dẫn tới hình ảnh căn hộ
  },
  {
    name: 'Nhà phố',
    description: 'Thiết kế hiện đại, vị trí trung tâm thuận tiện di chuyển.',
    image: '/images/townhouse.png',  // Đường dẫn tới hình ảnh nhà phố
  },
  {
    name: 'Biệt thự',
    description: 'Không gian sang trọng, rộng rãi và đẳng cấp cho gia đình.',
    image: '/images/villa.png',  // Đường dẫn tới hình ảnh biệt thự
  },
];

export default function CategoryList() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Danh mục nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img
                src={item.image}  // Đưa hình ảnh vào thẻ img
                alt={item.name}
                className="w-20 h-20 mb-4 mx-auto"  // Điều chỉnh kích thước hình ảnh
              />
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{item.name}</h3>
              <p className="text-gray-700 text-lg sm:text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
