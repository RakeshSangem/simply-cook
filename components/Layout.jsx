import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <section className="mx-auto">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </section>
  );
}
