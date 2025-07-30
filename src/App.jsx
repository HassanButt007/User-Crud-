import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './pages/Create';
import AllList from './pages/AllList';
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './pages/Update';

function App() {

  return (
    <>
      <BrowserRouter>
  
        <Routes>
          <Route exact path="/" element={<Header />}>
            <Route path="allposts" element={<AllList />} />
            <Route path="create" element={<Create />} />
            <Route path="update/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
