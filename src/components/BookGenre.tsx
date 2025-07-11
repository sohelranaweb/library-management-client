const BookGenre = () => {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto my-6">
      {/* Title & Subtitle */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-3xl font-medium text-gray-800">
          Explore Book <span className="text-[#ff6163] text-4xl">Genre</span>
        </h1>
        <p className="text-gray-600 mt-2 text-md">
          Browse by genre and dive into a world of endless stories and knowledge
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[
          { name: "Science", color: "bg-blue-100" },
          { name: "Fiction", color: "bg-pink-100" },
          { name: "Non-fiction", color: "bg-green-100" },
          { name: "History", color: "bg-yellow-100" },
          { name: "Biography", color: "bg-purple-100" },
          { name: "Fantasy", color: "bg-red-100" },
          { name: "Technology", color: "bg-teal-100" },
          { name: "Mystery", color: "bg-indigo-100" },
        ].map((category) => (
          <div
            key={category.name}
            className={`${category.color} shadow-md rounded-xl p-6 text-center hover:shadow-lg transition`}
          >
            <p className="text-lg font-semibold text-gray-800">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGenre;
