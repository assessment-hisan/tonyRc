// src/components/CategoryScroller.jsx
const categories = ['Crawlers', 'Drift', 'Drag Racing', 'Trucks', 'Boats', 'Air RC'];

const CategoryScroller = () => {
  return (
    <section className="md:bg-gray-300 py-8 px-4">
     <div className="max-w-7xl mx-auto flex  flex-col items-center justify-center">
         
      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="flex-shrink-0 bg-red-300 md:bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white font-semibold transition"
          >
            {cat}
          </button>
        ))}
      </div>
     </div>
    </section>
  );
};

export default CategoryScroller;
