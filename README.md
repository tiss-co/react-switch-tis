# react-switch-tis

> 

[![NPM](https://img.shields.io/npm/v/react-switch-tis.svg)](https://www.npmjs.com/package/react-switch-tis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![react-switch-tis Banner](https://user-images.githubusercontent.com/76048512/119657978-dc1d6e00-be41-11eb-98dd-c7c6855e0df2.gif)

## Install

```bash
npm i react-switch-tis
```
or
```bash
yarn add react-switch-tis
```

## Usage

```jsx
import React from 'react';

import { Switch, labelPosition } from 'react-switch-tis';
import 'react-switch-tis/dist/index.css';

const App = () => {
  return (
      <Switch
        className='Switch'
        onChange={(e, checked) => console.log(checked)}
        label='Wi-Fi'
        color='#0085fe'
        small={true}
        labelPosition={labelPosition.start}
        checked={false}
        darkMode={false}
      />
  );
};

export default App;
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
