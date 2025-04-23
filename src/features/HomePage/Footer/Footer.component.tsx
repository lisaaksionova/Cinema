import FilmDetails from './FilmDetails/FilmDetails.component';
import './Footer.styles.css';
import SessionDetails from './SessionDetails/SessionDetails.component';

const Footer = () => {
    return (
        <div className='footer-container'>
            <FilmDetails/>
            <SessionDetails/>
        </div>
    );
}

export default Footer;
