import BorrowSummaryTable from "@/components/BorrowSummaryTable";
import { useGetBorrowSummaryQuery } from "@/redux/api/bookApi";


const BorrowSummary = () => {
  const { data: borrows} = useGetBorrowSummaryQuery(undefined);
  const borrowData = borrows?.data;
  return (
    <div className="max-w-6xl mx-auto p-4">
      <BorrowSummaryTable borrowSummary={borrowData}></BorrowSummaryTable>
    </div>
  )
}

export default BorrowSummary