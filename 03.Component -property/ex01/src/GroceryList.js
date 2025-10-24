import React from 'react';
import Groceryitem from './GroceryItem';

function GroceryList() {
    return (
        <ol class={'grocery-list'}>
            <GroceryItem />

                <li>
                    <strong>Milk</strong>
                    <span>20</span>
                </li>
                
                <li>
                    <strong>Egg</strong>
                    <span>30</span>
                </li>
        </ol>
    );
}

export default GroceryList;