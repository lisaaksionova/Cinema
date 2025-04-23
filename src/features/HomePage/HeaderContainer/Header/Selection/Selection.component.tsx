import { useState } from 'react';
import './Selection.styles.css';

const Selection = () => {
    const [activeTab, setActiveTab] = useState('cinema'); // 'cinema' or 'online'

  return (
    <div className='selection-container'>
      <h3
        className={activeTab === 'cinema' ? 'active' : ''}
        onClick={() => setActiveTab('cinema')}
      >
        У КІНО
      </h3>
      <h3
        className={activeTab === 'online' ? 'active' : ''}
        onClick={() => setActiveTab('online')}
      >
        ОНЛАЙН
      </h3>
    </div>
  );
}

export default Selection;