const NewsLetter = () => {
  return (
    <div className="bg-blue-50 py-10 px-4 my-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
          Keep in <span className="text-[#ff6163]">Touch</span>
        </h2>
        <p className="text-gray-600 mt-2 mb-6">
          Stay updated with the latest books, events, and features
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-[#ff6163] text-white px-5 py-2 rounded-md hover:bg-yellow-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
