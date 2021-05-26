import React from 'react';

import { Switch, labelPosition } from 'react-switch-tis';
import 'react-switch-tis/dist/index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='Title'>
        Switch Tis
      </div>
      <Switch
        className='DateTimePicker'
        onChange={(e, checked) => console.log(checked)}
        label='Wi-Fi'
        color='#0085fe'
        small={true}
        labelPosition={labelPosition.start}
        checked={false}
        darkMode={false}
      />
    </div>
  );
};

export default App;