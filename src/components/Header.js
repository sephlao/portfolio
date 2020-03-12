import React from 'react';
import HeaderIcons from './HeaderIcons'
import sun from '../img/svg/sun.svg';
import menu from '../img/svg/menu.svg';

export default () => (
    <header className="header">
        <HeaderIcons icons={[{ src: sun, alt: 'theme' }, { src: menu, alt: 'menu' }]} />
    </header>
);