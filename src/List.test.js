import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import store from './store';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

it ('renders without crashing' , () => {
    const div = document.createElement('div');
    ReactDOM.render (<List cards={store.lists} />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it ('renders the UI as expected', () => {
    const tree = renderer  
        .create(<List cards={store.lists} />)
        .toJSON
    expect(tree).toMatchSnapshot();
});

