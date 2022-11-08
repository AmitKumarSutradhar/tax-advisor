import React from 'react';
import Carousel from '../../../components/Carosual/Carousel';
import NavMenu from '../../../components/Navbar/NavMenu';

const Header = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Carousel></Carousel>
        </div>
    );
};

export default Header;