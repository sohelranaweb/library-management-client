import AllBook from "@/components/AllBook/AllBook";
import Main from "@/layouts/Main";
import AddBook from "@/pages/AddBook/AddBook";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        path: "/",
        Component: Home,
      },

      {
        path: "/books",
        Component: AllBook,
      },
      {
        path: "/create-book",
        Component: AddBook,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);
