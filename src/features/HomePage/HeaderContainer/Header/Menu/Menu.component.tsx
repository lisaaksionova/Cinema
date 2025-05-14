import { SearchOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import './Menu.styles.css';
import { Button, Input } from 'antd';
import { useEffect, useState } from 'react';
import movieStore from '../../../../../stores/movie-store';

const Menu = () => {
    const {filteredMovies, selectMovie, filterMovies} = movieStore;
    const [searchFilm, setSearchFilm] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFilm(e.target.value);
    };

    useEffect(() => {
        filterMovies(searchFilm); // Filter movies based on the search term
        selectMovie(filteredMovies[0]?.id || 1); // Select the first movie from the filtered list or default to the first movie
      }, [searchFilm]);

    return (
        <div className='menu-container'>
            <Input className='search-input' placeholder='Пошук...' suffix={<SearchOutlined className='icon'/>} onChange={handleChange}/>
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