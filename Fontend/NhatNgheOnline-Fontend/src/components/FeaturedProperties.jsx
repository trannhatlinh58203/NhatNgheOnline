import React from 'react';

const properties = [
  {
    title: 'Căn hộ Sunrise City',
    location: 'Quận 7, TP. Hồ Chí Minh',
    price: '2.5 tỷ',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c',
  },
  {
    title: 'Nhà phố trung tâm',
    location: 'Quận 1, TP. HCM',
    price: '6 tỷ',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
  },
  {
    title: 'Biệt thự nghỉ dưỡng',
    location: 'Đà Lạt, Lâm Đồng',
    price: '12 tỷ',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Bất động sản nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full shadow p-2 text-sm font-semibold text-blue-600">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
