import Footer from "./Footer";
import Navbar from "./Navbar";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }) {
  return (
    <section className={`${poppins.className} mx-auto`}>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </section>
  );
}
