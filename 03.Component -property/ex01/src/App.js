import React, {Component} from 'react';
import './assets/css/styles.css';
import GroceryList from './GroceryList';

function App () {
    return (
            <div id='App'>
                <h1 class="title">{'Grocery List'}</h1>
                <GroceryList />
            </div>
    );
}

export default App;