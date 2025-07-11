import { useGetAllBookQuery } from "@/redux/api/bookApi";
import { BookTable } from "@/components/BookTable";

const AllBook = () => {
  const { data: books, isLoading, error } = useGetAllBookQuery(undefined);
  // const [deleteBook] = useDeletBookMutation();
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  if (error) return <p className="p-4 text-red-500">Failed to load books.</p>;
  const bookData = books.data;
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="max-w-6xl mx-auto p-4 pb-8 text-center bg-blue-50 rounded-md shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Discover Your Next Favorite Book
        </h1>
        <p className="text-gray-600 text-sm">
          Browse through our extensive collection and find books that inspire,
          educate, and entertain.
        </p>
      </div>

      {bookData && bookData.length > 0 ? (
        <BookTable data={bookData} />
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
};

export default AllBook;
