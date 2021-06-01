import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return <header className={h.header}>
        < img src='https://img2.freepng.ru/20180402/hyw/kisspng-autodesk-revit-logo-autodesk-inventor-autocad-a-letter-5ac291f7668176.6275410715227007914199.jpg'/>
        <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
        <h1> Social React Host </h1>
    </header>
}

export default Header;