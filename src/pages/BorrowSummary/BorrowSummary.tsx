import BorrowSummaryTable from "@/components/BorrowSummaryTable";
import { useGetBorrowSummaryQuery } from "@/redux/api/bookApi";

const BorrowSummary = () => {
  const { data: borrows, isLoading } = useGetBorrowSummaryQuery(undefined);
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  const borrowData = borrows?.data;
  return (
    <div className="max-w-6xl mx-auto p-4">
      <BorrowSummaryTable borrowSummary={borrowData}></BorrowSummaryTable>
    </div>
  );
};

export default BorrowSummary;
