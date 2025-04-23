import { PlayCircleOutlined } from '@ant-design/icons';
import './Logo.styles.css';
import { Select } from "antd";
import cinemaStore from '../../../../../stores/cinema-store';
import { observer } from 'mobx-react-lite';

const Logo = () => {
    const cinemas = cinemaStore.getCinemas();
    const options = cinemas.map(cinema => ({ value: cinema.id, label: `${cinema.city}: ${cinema.name}` }));
    return (
        <div className='logo-container'>
            <PlayCircleOutlined style={{fontSize: '48px', color: '#ffffff94'}}/>
            <Select
                options={options}
                className="select"
                popupClassName="dropdown"
                value={cinemaStore.currentCinema?.id}
                onChange={(value) => cinemaStore.selectCinema(value)}/>
        </div>
    )
}

export default observer(Logo);
