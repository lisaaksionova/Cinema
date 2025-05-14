import { DownOutlined, UpOutlined } from '@ant-design/icons';
import './Slider.component.css';
import movieStore from '../../../stores/movie-store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const Slider = () => {
    const { currentMovie, selectMovie, filteredMovies } = movieStore;
    const total = filteredMovies.length;
  
    const findRelative = (id: number, offset: number) => {
      const currentIndex = filteredMovies.findIndex(movie => movie.id === id);
      const targetMovie = filteredMovies[currentIndex + offset];
      return targetMovie?.id ?? id;
    };
  
    const onChange = (page: number) => {
      selectMovie(page);
    };
  
    const handleWheel = (event: WheelEvent) => {
      if (!currentMovie) return;
  
      const direction = event.deltaY > 0 ? 1 : -1;
      const newId = findRelative(currentMovie.id, direction);
      if (newId !== currentMovie.id) {
        onChange(newId);
      }
    };
  
    useEffect(() => {
      window.addEventListener('wheel', handleWheel);
      return () => window.removeEventListener('wheel', handleWheel);
    }, [currentMovie, filteredMovies]);
  
    if (!currentMovie) return null;
  
    const currentIndex = filteredMovies.findIndex(movie => movie.id === currentMovie.id);
  
    return (
      <div className="vertical-pagination">
        <UpOutlined onClick={() => onChange(findRelative(currentMovie.id, -1))} />
        <div className="page-numbers">
          <div className="page-current">{currentIndex + 1}</div>
          <div className="page-divider" />
          <div className="page-total">{total}</div>
        </div>
        <DownOutlined onClick={() => onChange(findRelative(currentMovie.id, 1))} />
      </div>
    );
  };
  

export default observer(Slider);