import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ListBlog } from './components/ListBlog';
import { CreateBlog } from './components/CreateBlog';
import { EditBlog } from './components/EditBlog';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<ListBlog/>}></Route>
      <Route path='/edit/:id' element={<EditBlog/>}></Route>
      <Route path='/create' element={<CreateBlog/>}></Route>
    </Routes>
    </>
  );
}

export default App;
