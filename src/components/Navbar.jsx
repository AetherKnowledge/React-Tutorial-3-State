import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [pirateMode, setPirateMode] = useState(false);

  const location = useLocation();
  const formatPath = (path) => {
    // Remove leading slash
    const cleanPath = path.replace("/", "");
    if (!cleanPath) return "Home"; // fallback for "/"

    // Split by "-" and capitalize each word
    return cleanPath
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };


  return <nav className="flex flex-row justify-between bg-zinc-950 h-16 items-center px-5">
    <div className="flex flex-row items-center justify-start w-60">
      {pirateMode && <img src="/pirate.jpg" alt="Pirate" className="h-10 w-10 mr-2" />}
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setPirateMode(!pirateMode)}>React Tutorial</h1>
    </div>
    <h2 className="font-semibold text-xl">{formatPath(location.pathname)}</h2>
    <div className="flex justify-end w-60">
      {location.pathname !== "/" && 
      <>
        <Link to="/">
        <IoMdArrowRoundBack className="text-zinc-200 hover:bg-zinc-800 rounded w-10 h-10 p-1" />
        </Link>
      </>}
    </div>
    
  </nav>;
};

export default Navbar;
