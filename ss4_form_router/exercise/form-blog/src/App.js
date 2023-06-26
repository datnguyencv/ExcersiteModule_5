import "./App.css";
import { ListBlog } from "./components/ListBlog";
import { Route, Routes } from "react-router-dom";
import { CreateBlog } from "./components/CreateBlog";
import { EditBlog } from "./components/EditBlog";
import { DetailBlog } from "./components/DetailBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListBlog />}></Route>
      <Route path="/create" element={<CreateBlog />}></Route>
      <Route path="/edit/:id" element={<EditBlog />}></Route>
      <Route path="/detail/:id" element={<DetailBlog />}></Route>
    </Routes>
  );
}

export default App;
