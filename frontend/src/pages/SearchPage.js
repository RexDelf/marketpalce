import Header from "../components/Header";
import '../assets/css/SearchPage.css';
import Filter from "../feature/Filter";
import ContentHeader from "../feature/ContentHeader";
import Content from "../feature/Content";

export default function SearchPage(){
    return(
        <div className="wrapper">
            <Header/>
            <main className="main">
                <Filter/>
                <ContentHeader/>
                <Content/>
            </main>
        </div>
    )
}