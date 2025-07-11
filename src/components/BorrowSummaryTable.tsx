import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export interface Borrow {
  _id: string;
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}
interface BorrowSummaryProps {
  borrowSummary: Borrow[];
}

const BorrowSummaryTable = ({ borrowSummary }: BorrowSummaryProps) => {
  // console.log("borrow Summary table", borrowSummary);
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 text-center bg-blue-50 rounded-md shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Borrow Summary
        </h1>
        <p className="text-gray-600 text-sm">
          Review all the books currently borrowed and track their return status.
        </p>
      </div>

      <div className="rounded-md border shadow-sm mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrowSummary?.map((borrow, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {borrow.book.title}
                </TableCell>
                <TableCell>{borrow.book.isbn}</TableCell>
                <TableCell>{borrow.totalQuantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BorrowSummaryTable;
