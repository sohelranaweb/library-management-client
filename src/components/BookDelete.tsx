import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/api/bookApi";
import { toast } from "sonner";

interface Props {
  bookId: string;
}

const BookDelete = ({ bookId }: Props) => {
  const [open, setOpen] = useState(false);
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = async () => {
    try {
      await deleteBook(bookId).unwrap();
      // close dialog
      setOpen(false);
      toast.success("Successfully book deleted");
    } catch (error) {
      console.error("Failed to delete book", error);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-2 py-1 rounded">
            Delete
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this book? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookDelete;
