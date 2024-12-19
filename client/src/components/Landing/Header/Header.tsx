import React from 'react';
import './Header.scss';

import SplashImg from '../img/Trove-of-Gems-8-20-2024(1).png';

class Header extends React.Component {
    render() {
        return (
            <header className={"fallingThroughSpaceBackground"}>
               <img id={"splashImg"} src={SplashImg} alt={"Site Header Splash"} />
            </header>
        );
    }
}

export default Header;