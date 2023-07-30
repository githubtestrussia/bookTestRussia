import React, { useState } from 'react';

import { Divider, Menu, Switch } from 'antd';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const navItems = [
    getItem('Главная', '1',''),
    getItem('Новости библиотеки', '2', ''),
    getItem('Сотрудники библиотеки', '3', '' ),
    getItem('Мероприятия библиотеки', '4', ''),

];
const NavigationMenu = () => {

    return (
        <>

            <Divider type="vertical" />

            <br />
            <br />
            <Menu
                style={{
                    width: '18%',
                    paddingRight:25,
                    marginTop:20,
                    marginLeft:10,
                    border:'1px solid #e6f4ff',
                    padding:15,
                    // position:'fixed',
                    minHeight:'100vh',



                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                items={navItems}
            />
        </>
    );
};
export default NavigationMenu;