import '../../assets/css/ContentHeader.css';
import SortBy from "./SortBy";

export default function ContentHeader({setSort, resultInfo}){
    const base = resultInfo.page * resultInfo.size;

    return(
        <div className="content-header">
            <div className="upper-content-header">
                {resultInfo.queryTitle ?
                <div className="results">
                    <span className="amount">{base + 1} - {base + resultInfo.numberOfResults} of over {resultInfo.total} results for </span>
                    <span className="product">{`"${resultInfo.queryTitle}"`}</span>
                </div> :
                    <div className="overall">Total adverts: {resultInfo.total}</div>
                }
                <div className="sorting">
                    <div className="sort-by">Sort by :</div>
                    <div className="sort-type">
                        <SortBy setSort={setSort}/>
                    </div>
                </div>
            </div>
        </div>
    )
}