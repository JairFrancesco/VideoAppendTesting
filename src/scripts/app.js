import React from 'react';
import Main from './components/main';

require('../styles/base.scss');


let main = document.createElement('div');
main.id = 'main';
document.body.appendChild(main);

React.render(<Main />, main);
