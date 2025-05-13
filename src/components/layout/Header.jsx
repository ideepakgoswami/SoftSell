import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";

const Header = () => {
  return (
    <header className="w-full h-16 fixed top-0 z-30 bg-primary/70 backdrop-blur-lg border-b border-cloud/20 flex items-center justify-between px-6 sm:px-10">
      {/* LOGO  */}
      <Logo />

      {/* NAVBAR */}
      <Navbar />
    </header>
  );
};

export default Header;
