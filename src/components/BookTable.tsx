import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import EditBookModal from "./EditBookModal";
import BorrowBookModal from "./BorrowBookModal";
import BookDelete from "./BookDelete";

export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
  description: string;
}

interface BookTableProps {
  data: Book[];
}

export function BookTable({ data }: BookTableProps) {
  return (
    <div className="rounded-md border shadow-sm mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((book) => (
            <TableRow key={book._id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.genre}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    book.available
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  {book.available ? "Available" : "Unavailable"}
                </span>
              </TableCell>
              <TableCell className="flex space-x-2 text-center">
                {/* Edit Modal Trigger */}

                <EditBookModal bookId={book._id} />

                <BookDelete bookId={book._id}></BookDelete>
                <BorrowBookModal book={book._id}></BorrowBookModal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
