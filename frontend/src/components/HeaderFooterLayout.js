import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

export default function HeaderFooterLayout({handleSearch}) {

    return(
        <>
        <Header handleSearch={handleSearch}/>
            <main className="main">
                <Outlet/>
            </main>
        <Footer/>
    </>)
};