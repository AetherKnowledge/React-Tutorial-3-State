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
  return <div className="flex flex-col w-full h-full items-center justify-center">
    <Link to="/event-listeners" className="bg-zinc-800 p-4 m-4 rounded hover:bg-zinc-700 w-40 text-center">Event Listeners</Link>
    <Link to="/props-vs-state" className="bg-zinc-800 p-4 m-4 rounded hover:bg-zinc-700 w-40 text-center">Props Vs State</Link>
    <Link to="/conditional" className="bg-zinc-800 p-4 m-4 rounded hover:bg-zinc-700 w-40 text-center">Conditional</Link>
    <Link to="/forms" className="bg-zinc-800 p-4 m-4 rounded hover:bg-zinc-700 w-40 text-center">Forms</Link>
    <Link to="/use-state" className="bg-zinc-800 p-4 m-4 rounded hover:bg-zinc-700 w-40 text-center">UseState</Link>
    <Link to="/api" className="bg-zinc-800 p-4 m-4 rounded hover:bg-zinc-700 w-40 text-center">Api</Link>
  </div>
}

export default App
