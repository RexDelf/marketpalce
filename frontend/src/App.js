import './App.css';
import './assets/css/fonts.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
import CreateAdvertPage from "./pages/CreateAdvertPage";
import Header from "./components/Header";
import AdvertPage from "./pages/AdvertPage";
import Footer from "./components/Footer";
import {useState} from "react";
import HeaderFooterLayout from "./components/HeaderFooterLayout";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
    const token = localStorage.getItem("token");
    const [headerProps, setHeaderProps] = useState(null);

    const handleSearch = (elem) => {
        if(elem.value) setHeaderProps({title: elem.value});
    }

    return (
        <BrowserRouter>
                <Routes>
                    {token ? null : <Route>
                        <Route path='/signup' element={<SignupPage/>}/>
                        <Route path='/signin' element={<SigninPage/>}/>
                    </Route>}
                    <Route element={<HeaderFooterLayout handleSearch={handleSearch}/>}>
                        <Route path='/' element={<SearchPage headerProps={headerProps}/>}/>
                        <Route path='/create' element={<CreateAdvertPage/>}/>
                        <Route path='/:id' element={<AdvertPage/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
}

export default App;