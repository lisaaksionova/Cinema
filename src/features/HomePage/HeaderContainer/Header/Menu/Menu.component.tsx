import { SearchOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import './Menu.styles.css';
import { Button } from 'antd';

const Menu = () => {
    return (
        <div>
            <Button className='menu-button'>
                <SearchOutlined className='icon'/>
            </Button>
            <Button className='menu-button'>
                <UserOutlined className='icon'/>
            </Button>
            <Button className='menu-button'>
                <MenuOutlined className='icon'/>
            </Button>
        </div>
    );
}

export default Menu;