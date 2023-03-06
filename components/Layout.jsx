import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <main className="container mx-auto">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </main>
  );
}
