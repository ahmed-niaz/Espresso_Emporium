import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Register from "../components/Register";
import Users from "../components/Users";
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
      },
      {
        path: '/register',
        element: <Register/>
      },{
        path: '/users',
        element: <Users/>,
        loader: ()=>fetch(`http://localhost:3000/user`),
      }
    ]
  },
]);
