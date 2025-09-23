import { Link, Route, Routes } from "react-router-dom";
import Api from "./components/Api/Api";
import Conditional from "./components/Conditional/Conditional";
import EventListener from "./components/EventListener/EventListener";
import Footer from "./components/Footer";
import Forms from "./components/Forms/Forms";
import Navbar from "./components/Navbar";
import PropsVsState from "./components/PropsVsState/PropsVsState";
import UseState from "./components/UseState/UseState";

function App() {

  return (
    <div className="flex flex-col bg-zinc-900 text-zinc-200 w-full h-full">
      <Navbar />
      <div className="flex h-full flex-grow overflow-auto items-center justify-center p-4">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-listeners" element={<EventListener />} />
        <Route path="/props-vs-state" element={<PropsVsState />} />
        <Route path="/conditional" element={<Conditional />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/api" element={<Api />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to the React Tutorial!</h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Explore interactive examples to learn key React concepts like state, props, event listeners, conditional rendering, forms, and working with APIs. Click a section below to get started!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        <Link to="/use-state" className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 flex flex-col items-center transition">
          <span className="text-3xl mb-2" role="img" aria-label="UseState">⚡</span>
          <span className="font-semibold">UseState</span>
        </Link>
        <Link to="/event-listeners" className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 flex flex-col items-center transition">
          <span className="text-3xl mb-2" role="img" aria-label="Event">🖱️</span>
          <span className="font-semibold">Event Listeners</span>
        </Link>
        <Link to="/props-vs-state" className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 flex flex-col items-center transition">
          <span className="text-3xl mb-2" role="img" aria-label="Props vs State">🔄</span>
          <span className="font-semibold">Props Vs State</span>
        </Link>
        <Link to="/conditional" className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 flex flex-col items-center transition">
          <span className="text-3xl mb-2" role="img" aria-label="Conditional">❓</span>
          <span className="font-semibold">Conditional</span>
        </Link>
        <Link to="/forms" className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 flex flex-col items-center transition">
          <span className="text-3xl mb-2" role="img" aria-label="Forms">📝</span>
          <span className="font-semibold">Forms</span>
        </Link>
        <Link to="/api" className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 flex flex-col items-center transition">
          <span className="text-3xl mb-2" role="img" aria-label="API">🌐</span>
          <span className="font-semibold">API</span>
        </Link>
      </div>
    </div>
  );
}

export default App
