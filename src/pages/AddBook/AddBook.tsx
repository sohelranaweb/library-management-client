import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAddBookMutation } from "@/redux/api/bookApi";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

import { useNavigate } from "react-router";
import { toast } from "sonner";

interface BookFormValues {
  title: string;
  author: string;
  description: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
}

const AddBook = () => {
  const navigate = useNavigate();
  const form = useForm<BookFormValues>({
    defaultValues: {
      title: "",
      author: "",
      description: "",
      genre: "",
      isbn: "",
      copies: 1,
      available: true,
    },
  });

  const [addBook, { isLoading }] = useAddBookMutation();

  const onSubmit: SubmitHandler<BookFormValues> = async (data) => {
    try {
      const res = await addBook(data).unwrap();
      console.log("RTK query", res);
      toast.success("Book added successfully.");
      form.reset();
      navigate("/books");
    } catch (err) {
      const error = err as {
        status: number;
        data?: {
          message?: string;
          field?: string;
          error?: {
            errors?: {
              [key: string]: {
                message?: string;
              };
            };
          };
        };
      };

      console.error("Validation Error:", JSON.stringify(error, null, 2));

      // 1. uniqe isbn validation
      if (error?.data?.field && error?.data?.message) {
        form.setError(error.data.field as keyof BookFormValues, {
          type: "manual",
          message: error.data.message,
        });
        toast.error(error.data.message);
        return;
      }

      // 2. multiple validation
      const validationErrors = error?.data?.error?.errors;
      if (validationErrors) {
        Object.entries(validationErrors).forEach(([field, detail]) => {
          if (typeof detail === "object" && "message" in detail) {
            form.setError(field as keyof BookFormValues, {
              type: "manual",
              message: detail.message || "Invalid input",
            });
            toast.error(detail.message);
          }
        });
      } else {
        // 3. fallback error
        toast.error(error?.data?.message || "Failed to add book. Try again.");
      }
    }
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 text-center bg-red-50 rounded-md shadow-sm">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Add a New Book
        </h1>
        <p className="text-gray-600 text-sm">
          Fill in the details below to add a new book to your library
          collection.
        </p>
      </div>

      <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto my-12 px-4 sm:px-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Author */}
            <FormField
              control={form.control}
              name="author"
              rules={{ required: "Author is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Genre */}
            <FormField
              control={form.control}
              name="genre"
              rules={{ required: "Genre is required" }}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Genre</FormLabel>
                  <Select
                    value={field.value || ""}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION">FICTION</SelectItem>
                      <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                      <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                      <SelectItem value="FANTASY">FANTASY</SelectItem>
                      <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                      <SelectItem value="HISTORY">HISTORY</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ISBN */}
            <FormField
              control={form.control}
              name="isbn"
              rules={{ required: "ISBN is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Copies */}
            <FormField
              control={form.control}
              name="copies"
              rules={{
                required: "Copies is required",
                min: { value: 0, message: "Copies must be a positive number" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Book"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddBook;
