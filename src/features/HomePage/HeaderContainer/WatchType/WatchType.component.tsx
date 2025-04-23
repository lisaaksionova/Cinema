import { Button } from 'antd';
import './WatchType.styles.css';
import { FilterOutlined } from '@ant-design/icons';
import { useState } from 'react';

const WatchType = () => {
    const [activeType, setActiveType] = useState('now');

    return (
        <div className='watch-type-container'>
        <ul className='watch-type-list'>
            <li
            className={activeType === 'now' ? 'watch-type-active' : ''}
            onClick={() => setActiveType('now')}
            >
            Зараз у кіно
            </li>
            <li
            className={activeType === 'sales' ? 'watch-type-active' : ''}
            onClick={() => setActiveType('sales')}
            >
            Продажі відкрито
            </li>
            <li
            className={activeType === 'soon' ? 'watch-type-active' : ''}
            onClick={() => setActiveType('soon')}
            >
            Скоро у кіно
            </li>
        </ul>
        <Button className='watch-type-button'>
            <FilterOutlined className='icon' />
        </Button>
        </div>
    );
}

export default WatchType;