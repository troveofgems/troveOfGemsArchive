import React from 'react';
import './Footer.scss';
import {BuildDniGorahyan} from 'dni-cavern-time';

export default function Footer() {
    const
        dniClock = BuildDniGorahyan(),
        dniTimeStamp = dniClock.converters.surfaceToCavern(),
        timestamp = dniTimeStamp.systemProvidedSurfaceTS;

    return (
        <footer>
            <p className="siteFooter">2024-25
                <a className="externalSiteLink px-2"
                   href="https://thegemtrove.herokuapp.com/">The Trove of Gems
                </a>- Dustin K Greco
            </p>
            <p className={"dniFooterDate"}>
                <a href={"https://archive.guildofarchivists.org/wiki/D%27ni_time_conversion#D'ni_Timekeeping"}>{timestamp}</a>
            </p>
        </footer>
    );
};