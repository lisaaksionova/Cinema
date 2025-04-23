import './HomePage.styles.css';
import HeaderContainer from './HeaderContainer/HeaderContainer.component';
import Slider from './Slider/Slider.component';
import Footer from './Footer/Footer.component';
import { useEffect } from 'react';
import movieStore from '../../stores/movie-store';
import cinemaStore from '../../stores/cinema-store';
import { observer } from 'mobx-react-lite';

const HomePage = () => {
    useEffect(() => {
        movieStore.loadMovies(); 
        cinemaStore.loadCinemas(); // Завантаження кінотеатрів при завантаженні компонента
    }, []);

    return (
        <div className='home-page'>
            <div className="content"> {/* Додано обгортку для інших елементів */}
                <HeaderContainer />
                <Slider />
                <Footer />
            </div>
        </div>
    );
};

export default observer(HomePage);
