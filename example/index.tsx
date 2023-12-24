import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Angular } from '../src/index';

const App = () => {
  return (
    <div>
      <Angular />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
