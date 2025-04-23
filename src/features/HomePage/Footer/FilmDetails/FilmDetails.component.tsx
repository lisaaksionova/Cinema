import { Button } from 'antd';
import './FilmDetails.styles.css';
import movieStore from '../../../../stores/movie-store';
import { observer } from 'mobx-react-lite';

const FilmDetails = () => {
    const { currentMovie } = movieStore;

    const imageUrl = currentMovie?.image ? `../..${currentMovie.image}` : '';
    return (
        <div className='film-details-container'>
            <img src={imageUrl} alt={currentMovie?.title} className='film-image' />
            <div className="image-overlay" />
            <h1 className='film-title'>{ currentMovie?.title }</h1>
            <p className='film-description'>{ currentMovie?.description }</p>
            <Button className='film-button'>
                Обрати сеанс
            </Button>
        </div>
    );
}

export default observer(FilmDetails);