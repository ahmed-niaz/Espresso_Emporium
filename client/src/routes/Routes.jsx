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
        element: <Home/>,
        loader: ()=> fetch(`http://localhost:3000/coffee`)
      },
      {
        path: '/addCoffee',
        element: <AddCoffee/>
      }
      ,{
        path: '/updateCoffee/:id',
        element: <UpdateCoffee/>,
        loader: ({params})=> fetch(`http://localhost:3000/coffee/${params.id}`)
      }
    ]
  },
]);
