function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-30 backdrop-blur-lg px-6 py-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        MyPortfolio
      </h1>

      <div className="space-x-6 font-medium hidden md:flex">
        <a href="#home" className="hover:text-purple-400 duration-200">Home</a>
        <a href="#about" className="hover:text-purple-400 duration-200">About</a>
        <a href="#skills" className="hover:text-purple-400 duration-200">Skills</a>
        <a href="#projects" className="hover:text-purple-400 duration-200">Projects</a>
        <a href="#contact" className="hover:text-purple-400 duration-200">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

