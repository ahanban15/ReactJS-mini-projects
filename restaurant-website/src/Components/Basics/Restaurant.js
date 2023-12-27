import React, { useState } from 'react'
import "./style.css"
import Menu from './MenuAPI'
import MenuCard from './MenuCard';

const Restaurant = () => {
//   const colorStyle = {color: 'red'};
    const [menuData, setMenuData] = useState(Menu);
     
    return (
        <>
            <MenuCard menuData = {menuData}/ >
        </>
    );
}

export default Restaurant