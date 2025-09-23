const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-zinc-950 items-center p-2 relative">
      <p className="text-zinc-400 text-sm">
        Created by{" "}
        <span className="relative group underline hover:text-zinc-200 cursor-pointer">
          Group 3
          <div
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
                       flex flex-col items-center gap-1
                       opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                       transition-all duration-200 ease-out
                       bg-zinc-800 text-zinc-200 text-xs rounded-lg shadow-lg p-2 w-48
                       pointer-events-none group-hover:pointer-events-auto"
          >
            <span>John Christian Rosuelo</span>
            <span>Hanz Philip Manaog</span>
            <span>Rameses Cruz</span>
            <span>Roi Nathaniel Balleszteros</span>
            <span>Jon Alfred Bernabe</span>
          </div>
        </span>
      </p>
      <p className="text-zinc-400 text-sm">
        Source code on{" "}
        <a
          href="https://github.com/AetherKnowledge/React-Tutorial-3-State"
          className="underline hover:text-zinc-200"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
