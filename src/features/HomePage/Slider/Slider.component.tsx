import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './Slider.component.css';
import movieStore from '../../../stores/movie-store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const Slider = () => {
    const { currentMovie, selectMovie, getMovieCount } = movieStore; 
    const total = getMovieCount();
    const onChange = (page: number) => {
        selectMovie(page);
    };

    const handleWheel = (event: WheelEvent) => {
        event.preventDefault(); // Запобігаємо прокрутці сторінки
        if (event.deltaY < 0) {
            // Прокрутка вгору
            onChange(Math.max(1, currentMovie?.id ! - 1));
        } else {
            // Прокрутка вниз
            onChange(Math.min(total, currentMovie?.id ! + 1));
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel); // Додаємо обробник події

        return () => {
            window.removeEventListener('wheel', handleWheel); // Очищення обробника події
        };
    }, [ currentMovie, total]); // Залежності для useEffect

    return (
        <div className="vertical-pagination">
          <UpOutlined onClick={() => onChange(Math.max(1, currentMovie?.id ! - 1))} />
          <div className="page-numbers">
            <div className="page-current">{currentMovie?.id}</div>
            <div className="page-divider" />
            <div className="page-total">{total}</div>
          </div>
          <DownOutlined onClick={() => onChange(Math.min(total, currentMovie?.id ! + 1))} />
        </div>
      );
}

export default observer(Slider);