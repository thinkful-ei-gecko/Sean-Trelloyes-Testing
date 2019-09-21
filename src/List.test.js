import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import store from './store';
import Card from './Card';

it ('renders without crashing' , () => {
    const div = document.createElement('div');
    ReactDOM.render (<List cards={store.allCards} />, div);
    ReactDOM.unmountComponentAtNode(div);
})