// // import { Button } from "@/components/ui/button";
// // import { Calendar } from "@/components/ui/calendar";
// // import {
// //   Dialog,
// //   DialogClose,
// //   DialogContent,
// //   DialogDescription,
// //   DialogFooter,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// // } from "@/components/ui/form";
// // import { Input } from "@/components/ui/input";
// // import {
// //   Popover,
// //   PopoverContent,
// //   PopoverTrigger,
// // } from "@/components/ui/popover";

// // import { cn } from "@/lib/utils";
// // import { useAddBorrowMutation } from "@/redux/api/bookApi";

// // import { format } from "date-fns";
// // import { CalendarIcon } from "lucide-react";

// // import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
// // import { useNavigate } from "react-router";
// // import { toast } from "sonner";
// // interface BorrowBookModalProps {
// //   book: string;
// // }

// // const BorrowBookModal = ({ book }: BorrowBookModalProps) => {
// //   const navigae = useNavigate();
// //   const [addBorrow] = useAddBorrowMutation();
// //   // console.log(data)
// //   // const [open, setOpen] = useState(false);

// //   const form = useForm({
// //     defaultValues: {
// //       quantity: undefined,
// //       dueDate: undefined,
// //     },
// //   });

// //   // const dispatch = useDispatch();

// //   //   console.log("data", data);
// //   const onSubmit: SubmitHandler<FieldValues> = async (data) => {
// //     try {
// //       const due = data.dueDate ? new Date(data.dueDate) : new Date();

// //       const borrowData = {
// //         ...data,
// //         book,
// //         dueDate: due.toISOString(),
// //       };
// //       console.log("RTK quer", borrowData);
// //       const res = await addBorrow(borrowData).unwrap();
// //       console.log("Borrow successful:", res);

// //       form.reset();
// //       toast.success("Borrowed successfully!");
// //       navigae("/borrow-summary");
// //     } catch (err) {
// //       const error = err as {
// //         data?: {
// //           message?: string;
// //         };
// //       };

// //       const errMsg =
// //         error?.data?.message ?? "Failed to borrow. Please try again.";

// //       console.error("Borrow failed:", errMsg);
// //       toast.error(errMsg);
// //     }
// //   };
// //   return (
// //     <div>
// //       <Dialog>
// //         <DialogTrigger asChild>
// //           <button className="bg-yellow-500 text-white px-2 py-1 rounded">
// //             Borrow
// //           </button>
// //         </DialogTrigger>

// //         <DialogContent className="sm:max-w-[425px]">
// //           <DialogHeader>
// //             <DialogTitle>Borrow Book</DialogTitle>
// //             <DialogDescription className="sr-only">
// //               Edit book details
// //             </DialogDescription>
// //           </DialogHeader>
// //           <Form {...form}>
// //             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
// //               <div className="grid gap-4">
// //                 <FormField
// //                   control={form.control}
// //                   name="quantity"
// //                   render={({ field }) => (
// //                     <FormItem>
// //                       <FormLabel>Quntity</FormLabel>
// //                       <FormControl>
// //                         <Input
// //                           type="number"
// //                           {...field}
// //                           value={field.value ?? ""} // ✅ make sure it's not undefined
// //                           onChange={(e) =>
// //                             field.onChange(Number(e.target.value))
// //                           } // ✅ ensure number
// //                         />
// //                       </FormControl>
// //                     </FormItem>
// //                   )}
// //                 />

// //                 <FormField
// //                   control={form.control}
// //                   name="dueDate"
// //                   render={({ field }) => (
// //                     <FormItem className="flex flex-col">
// //                       <FormLabel>Due Date</FormLabel>
// //                       <Popover>
// //                         <PopoverTrigger asChild>
// //                           <FormControl>
// //                             <Button
// //                               variant={"outline"}
// //                               className={cn(
// //                                 " pl-3 text-left font-normal",
// //                                 !field.value && "text-muted-foreground"
// //                               )}
// //                             >
// //                               {field.value ? (
// //                                 format(field.value, "PPP")
// //                               ) : (
// //                                 <span>Pick a date</span>
// //                               )}
// //                               <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
// //                             </Button>
// //                           </FormControl>
// //                         </PopoverTrigger>
// //                         <PopoverContent className="w-auto p-0" align="start">
// //                           <Calendar
// //                             mode="single"
// //                             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// //                             // @ts-ignore
// //                             selected={field.value}
// //                             onSelect={field.onChange}
// //                             // disabled={(date) =>
// //                             //   date > new Date() || date < new Date("1900-01-01")
// //                             // }
// //                             captionLayout="dropdown"
// //                           />
// //                         </PopoverContent>
// //                       </Popover>
// //                     </FormItem>
// //                   )}
// //                 />
// //               </div>
// //               <DialogFooter>
// //                 <DialogClose asChild>
// //                   <Button variant="outline">Cancel</Button>
// //                 </DialogClose>
// //                 <Button type="submit">Save changes</Button>
// //               </DialogFooter>
// //             </form>
// //           </Form>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default BorrowBookModal;

// // form validation with zod

// "use client";

// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage, // ✅ ADDED for showing errors
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import { cn } from "@/lib/utils";
// import { useAddBorrowMutation } from "@/redux/api/bookApi";

// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";

// import { useForm } from "react-hook-form";
// import { z } from "zod"; // ✅ ADDED
// import { zodResolver } from "@hookform/resolvers/zod"; // ✅ ADDED
// import { useNavigate } from "react-router";
// import { toast } from "sonner";
// import { useState } from "react";

// interface BorrowBookModalProps {
//   book: string;
// }

// // ✅ Step 1: Create Zod Schema
// const borrowSchema = z.object({
//   quantity: z
//     .number({
//       required_error: "Quantity is required",
//       invalid_type_error: "Quantity must be a number",
//     })
//     .min(1, "Minimum 1 book required"),
//   dueDate: z.date({
//     required_error: "Due date is required",
//     invalid_type_error: "Invalid date",
//   }),
// });

// type BorrowFormData = z.infer<typeof borrowSchema>;

// const BorrowBookModal = ({ book }: BorrowBookModalProps) => {
//   const [dateOpen, setDateOpen] = useState(false);
//   const navigae = useNavigate();
//   const [addBorrow] = useAddBorrowMutation();

//   // ✅ Step 2: Use useForm with zodResolver
//   const form = useForm<BorrowFormData>({
//     resolver: zodResolver(borrowSchema),
//     defaultValues: {
//       quantity: undefined,
//       dueDate: undefined,
//     },
//   });

//   const onSubmit = async (data: BorrowFormData) => {
//     try {
//       const borrowData = {
//         ...data,
//         book,
//         dueDate: data.dueDate.toISOString(),
//       };
//       const res = await addBorrow(borrowData).unwrap();
//       console.log("Borrow book data", res);
//       form.reset();
//       toast.success("Borrowed successfully!");
//       navigae("/borrow-summary");
//     } catch (err) {
//       const error = err as {
//         data?: {
//           message?: string;
//         };
//       };
//       const errMsg =
//         error?.data?.message ?? "Failed to borrow. Please try again.";
//       console.error("Borrow failed:", errMsg);
//       toast.error(errMsg);
//     }
//   };

//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger asChild>
//           <button className="bg-yellow-500 text-white px-2 py-1 rounded">
//             Borrow
//           </button>
//         </DialogTrigger>

//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Borrow Book</DialogTitle>
//             <DialogDescription className="sr-only">
//               Edit book details
//             </DialogDescription>
//           </DialogHeader>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <div className="grid gap-4">
//                 {/* Quantity Field */}
//                 <FormField
//                   control={form.control}
//                   name="quantity"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Quantity</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="number"
//                           {...field}
//                           value={field.value ?? ""}
//                           onChange={(e) =>
//                             field.onChange(Number(e.target.value))
//                           }
//                         />
//                       </FormControl>
//                       <FormMessage /> {/* ✅ Show validation error */}
//                     </FormItem>
//                   )}
//                 />

//                 {/* Due Date Field */}
//                 <FormField
//                   control={form.control}
//                   name="dueDate"
//                   render={({ field }) => (
//                     <FormItem className="flex flex-col">
//                       <FormLabel>Due Date</FormLabel>
//                       <Popover open={dateOpen} onOpenChange={setDateOpen}>
//                         <PopoverTrigger asChild>
//                           <FormControl>
//                             <Button
//                               variant={"outline"}
//                               className={cn(
//                                 "pl-3 text-left font-normal",
//                                 !field.value && "text-muted-foreground"
//                               )}
//                             >
//                               {field.value ? (
//                                 format(field.value, "PPP")
//                               ) : (
//                                 <span>Pick a date</span>
//                               )}
//                               <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                             </Button>
//                           </FormControl>
//                         </PopoverTrigger>
//                         <PopoverContent className="w-auto p-0" align="start">
//                           <Calendar
//                             mode="single"
//                             selected={field.value}
//                             onSelect={(selectedDate) => {
//                               field.onChange(selectedDate);
//                               setDateOpen(false); // ✅ close after select
//                             }}
//                             captionLayout="dropdown"
//                           />
//                         </PopoverContent>
//                       </Popover>
//                       <FormMessage /> {/* ✅ Show validation error */}
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <DialogFooter>
//                 <DialogClose asChild>
//                   <Button variant="outline">Cancel</Button>
//                 </DialogClose>
//                 <Button type="submit">Confirm Borrow</Button>
//               </DialogFooter>
//             </form>
//           </Form>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default BorrowBookModal;

// backend error handling

import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { useAddBorrowMutation } from "@/redux/api/bookApi";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

interface BorrowBookModalProps {
  book: string;
}

const borrowSchema = z.object({
  quantity: z
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    })
    .min(1, "Minimum 1 book required"),
  dueDate: z.date({
    required_error: "Due date is required",
    invalid_type_error: "Invalid date",
  }),
});

type BorrowFormData = z.infer<typeof borrowSchema>;

const BorrowBookModal = ({ book }: BorrowBookModalProps) => {
  const [dateOpen, setDateOpen] = useState(false);
  const navigate = useNavigate();
  const [addBorrow] = useAddBorrowMutation();

  const form = useForm<BorrowFormData>({
    resolver: zodResolver(borrowSchema),
    defaultValues: {
      quantity: undefined,
      dueDate: undefined,
    },
  });

  const onSubmit = async (data: BorrowFormData) => {
    try {
      const borrowData = {
        ...data,
        book,
        dueDate: data.dueDate.toISOString(),
      };

      const res = await addBorrow(borrowData);

      if ("error" in res) {
        const errData = (res.error as any).data;
        const errMsg =
          (errData && typeof errData === "object" && "message" in errData
            ? (errData as { message?: string }).message
            : null) ?? "Failed to borrow. Please try again.";

        toast.error(errMsg);
        // console.error("Backend error:", errMsg);

        return;
      }

      // Success: reset form and navigate
      console.log("Borrow successful:", res.data ?? res);
      form.reset();
      toast.success("Borrowed successfully!");
      navigate("/borrow-summary");
    } catch (err) {
      const error = err as { data?: { message?: string } };
      const errMsg =
        error?.data?.message ?? "Failed to borrow. Please try again.";
      toast.error(errMsg);
      // console.error("Borrow failed:", errMsg);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-yellow-500 text-white px-2 py-1 rounded">
            Borrow
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Borrow Book</DialogTitle>
            <DialogDescription className="sr-only">
              Edit book details
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Quantity Field */}
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          value={field.value ?? ""}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Due Date Field */}
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Due Date</FormLabel>
                      <Popover open={dateOpen} onOpenChange={setDateOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(selectedDate) => {
                              field.onChange(selectedDate);
                              setDateOpen(false);
                            }}
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Confirm Borrow</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BorrowBookModal;
