import { CalendarOutlined } from '@ant-design/icons';
import './SessionDetails.styles.css';
import movieStore from '../../../../stores/movie-store';
import { observer } from 'mobx-react-lite';

const SessionDetails = () => {
    const { currentMovie } = movieStore;
    
    return(
        <div className='session-details-container'>
            <div className='current-sessions'>
                <h2>Сеанси сьогодні</h2>
                <h3>18:45</h3>
            </div>
            <div className='current-sessions-details'>
                <ul className='film-rating'>
                    <li>{currentMovie?.imdb} IMDB</li>
                    <img src='src\assets\tomatoe.png'></img>
                    <li>{currentMovie?.tomatoes}</li>
                    <li>{currentMovie?.year}</li>
                    <li>{currentMovie?.genre}</li>
                    <li>{currentMovie?.duration} хв.</li>
                    <li>Від {currentMovie?.age} років</li>
                </ul>
                <ul className='film-rating'>
                    {
                        currentMovie?.technology.map((tech: string) => (
                            <li key={tech}>{tech}</li>
                        ))
                    }
                </ul>
                <p>Діють знижки</p>
                <div className='tag-container'>
                    <div className='session-tag'>
                        <CalendarOutlined /> 
                        <p>У кіно до 16 квітня</p>
                    </div>
                    <div className='session-tag'>
                        <p>{currentMovie?.accessibility}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default observer(SessionDetails);