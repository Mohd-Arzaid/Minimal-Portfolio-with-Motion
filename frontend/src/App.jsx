import { Routes, Route } from "react-router-dom";
import Navbar from "./components/manual/Navbar";
import Home from "./pages/Home";
import MarkdownDemo from "./pages/MarkdownDemo";
im
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markdown-demo" element={<MarkdownDemo />} />
      </Routes>
    </>
}

export default App;
