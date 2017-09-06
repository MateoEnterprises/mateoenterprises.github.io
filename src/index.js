import React from 'react';
import ReactDOM from 'react-dom';

import TitleBar from './components/titleBar/titleBar';

const App = () => {
  return (
    <div>
      <TitleBar/>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('.container'));