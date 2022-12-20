import '../../assets/css/ContentHeader.css';
import SortBy from "./SortBy";

export default function ContentHeader(){
    return(
        <div className="content-header">
            <div className="upper-content-header">
                <div className="results">
                    <span className="amount">1 - 16 over 7,000 result for </span>
                    <span className="product">"Asus"</span>
                </div>
                <div className="sorting">
                    <div className="sort-by">Sort by :</div>
                    <div className="sort-type">
                        <SortBy/>
                    </div>
                </div>
            </div>
        </div>
    )
}