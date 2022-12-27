import Header from "../components/Header";
import '../assets/css/SearchPage.css';
import Filter from "../feature/Filter";
import ContentHeader from "../feature/ContentHeader";
import Content from "../feature/Content";
import {useEffect, useState} from "react";
import api from "../api";
import {createTheme, makeStyles, Pagination, ThemeProvider} from "@mui/material";


export default function SearchPage({headerProps}){
    const [searchData, setSearchData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [sort, setSort] = useState(null);

    const theme = createTheme({
        palette:{
            primary:{
                main: 'rgb(0, 126, 251)',
                contrastText: '#EEE'
            },

            contrastThreshold: 4.5
        }
    })

    useEffect(() => {
        fetchSearchData();
    }, [currentPage, sort, headerProps])

    const changePage = (page) => {
        setCurrentPage(page - 1);
        window.scrollTo({top: 0, left: 0});
    }

    const fetchSearchData = async () => {
        const response = await api.get("", {params: {title: headerProps?.title, pageNumber: currentPage, sortDir: sort?.sortDir, sortBy: sort?.sortBy}});
        setSearchData(response.data);
    }

    return(
            <div className="search-page-wrapper">
                <Filter/>
                <ContentHeader setSort={setSort} resultInfo={{queryTitle: headerProps?.title, page: searchData.number, numberOfResults: searchData.numberOfElements, size: searchData.size, total: searchData.totalElements}}/>
                <div className="adverts">
                    <Content adverts={searchData.content}/>
                </div>
                <div className="pagination">
                    <ThemeProvider theme={theme}>
                        <Pagination sx={{button:{"&:hover":{backgroundColor: 'rgb(240,246,255)'}}}} size="large" color="primary" count={searchData.totalPages} onChange={(e, value) => changePage(value)}/>
                    </ThemeProvider>
                </div>
            </div>
    )
}