import { Component, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import Mobiles from "./components/Mobiles.jsx";
import Laptops from "./components/Laptops.jsx";
import Users from "./components/Users.jsx";
import UserDetails from "./components/UserDetails.jsx";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/mobiles",
        Component: Mobiles,
      },
      {
        path: "/laptops",
        Component: Laptops,
      },
      {
        path: "/users",
        element: (
          <Suspense fallback={"Users data loading"}>
            <Users usersPromise={usersPromise}></Users>
          </Suspense>
        ),
      },
      {
        path: "/users/:userId",
        loader: ({ params }) => {
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`,
          );
        },
        Component: UserDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
