import '../../assets/css/Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

export default function Filter(){

return (
    <aside className="sidebar">
        <div className="filter">Filter
            <div className="supplier-types">Suppliers Types
                <label>
                    <input type="checkbox" name="supplier-type"/>Trade Assurance
                </label>
                <label>
                    <input type="checkbox" name="supplier-type"/>Verified Suppliers
                </label>
            </div>
            <div className="product-types">Product Types
                <label>
                    <input type="checkbox" name="product-type"/>Ready To Ship
                </label>
                <label>
                    <input type="checkbox" name="product-type"/>Paid Samples
                </label>
            </div>
            <div className="condition-types">Condition
                <label><input type="checkbox" name="condition"/>New Stuff</label>
                <label><input type="checkbox" name="condition"/>Second hand</label>
            </div>
            <div className="price">Price
                <div className="min-price">
                    <div className="price-bg"><FontAwesomeIcon icon={faDollarSign}/></div>
                    <input type="number" name=""/>
                </div>
                <div className="max-price">
                    <div className="price-bg"><FontAwesomeIcon icon={faDollarSign}/></div>
                    <input type="number" name=""/>
                </div>
            </div>
        </div>
    </aside>)
}