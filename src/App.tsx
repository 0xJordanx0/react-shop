import AppLayout from "./Layouts/AppLayout";
import HomePage from "./Pages/HomePage";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ProductPage from "./Pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />
      },
      {
        path: "product/:id",
        element: <ProductPage />
      }
    ]
  }
])
export default function App() {

  return (
   <RouterProvider router={router} />
  );
}
