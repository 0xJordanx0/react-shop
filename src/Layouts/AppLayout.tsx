import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { CartProvider } from "../contexts/useContextCart";
import Spinner from "../components/Spinner";
export default function AppLayout() {
  const navigation = useNavigation();

  console.log(navigation.state);
  if (navigation.state === "loading") return "loading";

  return (
    <>
      <CartProvider>
        <Navbar />
        <div className="max-w-7xl mx-auto">
          <Outlet />
          <Footer />
        </div>
      </CartProvider>
    </>
  );
}
