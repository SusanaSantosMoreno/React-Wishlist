import React, { useState } from 'react';
import './App.css';
import 'typeface-roboto';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
    { text : 'Travel to the moon', done : false},
    { text : 'Pay the gym', done : true },
    { text : 'Go to the gym', done : false},
];

const App = () => {
    const [wishes, setWishes] = useState(initialWishes)
    return (
        <div className="app card">
            <h1 className="card-title title" >My wishlist app</h1>
            <WishInput onNewWish = {wish => setWishes([wish, ...wishes])}></WishInput>
            <WishList wishes={wishes} onWishesChange={setWishes}></WishList>
            <button type="button" className="btn btn-info" 
                onClick={() => setWishes(wishes.filter(wish => !wish.done))}>
                Archive done
            </button>
        </div>
    );
};
export default App;

