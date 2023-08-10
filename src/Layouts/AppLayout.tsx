import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../components/Spinner";
export default function AppLayout() {
    const navigation = useNavigation();

    console.log(navigation.state);
    if (navigation.state === "loading") return "loading";

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
