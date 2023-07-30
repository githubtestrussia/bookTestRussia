import { Link } from 'react-router-dom';
import {Divider, Menu} from "antd";


const NavigationMenu = () => {
    return (
        <>
            <Divider type="vertical" />
            <Menu
                style={{
                    width: '18%',
                    paddingRight: 25,
                    marginTop: 20,
                    marginLeft: 10,
                    border: '2px solid #e6f4ff',
                    padding: 15,
                    position: 'fixed',
                    minHeight: '100vh',
                    borderRadius:3,

                }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1">
                    <Link to="/">Главная</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/news">Новости библиотеки</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/employees">Сотрудники библиотеки</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/events">Мероприятия библиотеки</Link>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default NavigationMenu;
