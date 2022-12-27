import './App.css';
import './assets/css/fonts.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
import CreateAdvertPage from "./pages/CreateAdvertPage";
import Header from "./components/Header";
import AdvertPage from "./pages/AdvertPage";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
    const [headerProps, setHeaderProps] = useState(null);

    const handleSearch = (elem) => {
        setHeaderProps({title: elem.value});
    }

    return (
        <BrowserRouter>
            <Header handleSearch={handleSearch}/>
            <main className="main">
                <Routes>
                    <Route path='/' element={<SearchPage headerProps={headerProps}/>}/>
                    <Route path='/create' element={<CreateAdvertPage/>}/>
                    <Route path='/:id' element={<AdvertPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;