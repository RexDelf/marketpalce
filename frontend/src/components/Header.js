import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Header.css';
import logo from '../assets/icons/logo.svg';
import SearchLocation from "../feature/SearchLocation";
import Dropdown from "./Dropdown";
import {Link} from "react-router-dom";

export default function Header () {
    return(
        <header className="header">
            <div className="upper-header">
                <div className="logo">
                    <img src={logo} alt="marketplace-logo" className="logo-icon"/>
                        <div className="company-name">Marketplace</div>
                </div>
                <nav className="navigation">
                    <div className="searchbar">
                        <div className="location">
                            <div className="location-icon"><FontAwesomeIcon icon={faLocationDot}/></div>
                            <SearchLocation/>
                        </div>
                        <div className="searchbar-vl"></div>
                        <input type="text" className="search-window" placeholder="Search..."/>
                            <div className="search">
                                <div className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                                <div className="search-btn">Search</div>
                            </div>
                    </div>
                </nav>
                <div className="actionbar">
                    <div className="create-advert">
                        <Link to="/create">
                            <button className="create-advert-btn">
                                <FontAwesomeIcon icon={faPlus}/>
                                <span className="create-advert-text">Create Advert</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="lower-header">
                <div className="category">
                    <div className="category-icon"><FontAwesomeIcon icon={faBars} /></div>
                    <Dropdown
                        trigger={<button className="category-btn">Categories
                                    <div className="category-arrow"><i className="arrow down"></i></div>
                                </button>}
                        menu={[
                            <button onClick={e => console.log(1)}>Menu 1</button>,
                            <button onClick={e => console.log(2)}>Menu 2</button>,
                        ]}
                    />
                </div>

                <div className="vl"></div>

                <div className="featured">
                    <a href="">Most Viewed</a>
                    <a href="">Popular Last Week</a>
                    <a href="">Trusted Salers</a>
                </div>
            </div>
        </header>
    )
}