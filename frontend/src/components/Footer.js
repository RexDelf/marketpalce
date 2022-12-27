import '../assets/css/Footer.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="author">Dominic Malyukov, 2022</div>
                <a className="github" href="https://github.com/RexDelf/">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </footer>
    )
}