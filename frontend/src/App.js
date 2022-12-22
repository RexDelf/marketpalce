import './App.css';
import './assets/css/fonts.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
import CreateAdvertPage from "./pages/CreateAdvertPage";
import Header from "./components/Header";
import AdvertPage from "./pages/AdvertPage";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main className="main">
                <Routes>
                    <Route path='/' element={<SearchPage/>}/>
                    <Route path='/create' element={<CreateAdvertPage/>}/>
                    <Route path='/:id' element={<AdvertPage/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
