import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/addCoffee',
        element: <AddCoffee/>
      }
      ,{
        path: 'updateCoffee',
        element: <UpdateCoffee/>
      }
    ]
  },
]);
