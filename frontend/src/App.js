import './App.css';
import './assets/css/fonts.css';
import API from "./api";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import SearchPage from "./pages/SearchPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<SearchPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
