import React from 'react';
import './Footer.scss';

/*import { DniDate_V2 } from '../../../assets/js/DniDate';*/

export default function Footer() {
    return (
        <footer>
            <p className="siteFooter">2024
                <a className="externalSiteLink px-2"
                   href="https://thegemtrove.herokuapp.com/">ToG
                </a>- DKGreco
            </p>
            <p className={"dniFooterDate"}>
                <a href={"https://archive.guildofarchivists.org/wiki/D%27ni_time_conversion#D'ni_Timekeeping"}>D'ni Cavern Time</a>
            </p>
        </footer>
    );
};