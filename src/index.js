import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

import List from "./List";
import Write from "./Write";
import Detail from "./Detail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
]);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
