import { Route, Routes } from 'react-router';
import './App.css';
import { ListPost } from './components/ListPost';
import { CreatePost } from './components/CreatePost';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element = {<ListPost/>}></Route>
    <Route path='/create' element = {<CreatePost/>}></Route>
    </Routes>
    </>

  );
}

export default App;
