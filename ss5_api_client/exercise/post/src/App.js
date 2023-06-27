import "./App.css";
import { CreatePost } from "./components/CreatePost";
import { ListPost } from "./components/ListPost";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPost />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
