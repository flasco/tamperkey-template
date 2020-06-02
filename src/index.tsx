import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.m.scss';

const Xuasd: React.FC<{ asd: string }> = ({ asd }) => {
  return (
    <div className={styles.asd}>
      {asd}
      <span className="asd">asd</span>
    </div>
  );
};

const el = document.querySelector('#app');

const App = <Xuasd asd={'123'} />;

ReactDOM.render(App, el);
