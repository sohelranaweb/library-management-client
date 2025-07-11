import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useGetBookByIdQuery } from "@/redux/api/bookApi";

interface BookDetailModalProps {
  bookId: string;
}

const BookDetailModal = ({ bookId }: BookDetailModalProps) => {
  const { data, isLoading, isError } = useGetBookByIdQuery(bookId);
  const book = data?.data;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Book Details</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          Detailed information about this book.
        </DialogDescription>

        {isLoading ? (
          <div className="flex justify-center py-6">
            <span className="loading loading-bars loading-lg" />
          </div>
        ) : isError || !book ? (
          <p className="text-red-500 text-sm text-center">
            Failed to load book details.
          </p>
        ) : (
          <div className="mt-4">
            <table className="w-full text-sm text-left text-gray-700">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium w-1/3">Title</td>
                  <td>{book?.title}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Author</td>
                  <td>{book?.author}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Genre</td>
                  <td>{book?.genre}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">ISBN</td>
                  <td>{book?.isbn}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Copies</td>
                  <td>{book?.copies}</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Description</td>
                  <td>{book?.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookDetailModal;
