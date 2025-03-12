import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import DetailBlog from "../pages/blogs/details/DetailBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "blog/:id",
        element: <DetailBlog/>
      }
    ]
  },
]);

export default router;