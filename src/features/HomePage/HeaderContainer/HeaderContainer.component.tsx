import Header from './Header/Header.component';
import WatchType from './WatchType/WatchType.component';
import './HeaderContainer.styles.css';


const HeaderContainer = () => {
    return (
        <div>
            <Header/>
            <WatchType/>
        </div>
    );
}

export default HeaderContainer;