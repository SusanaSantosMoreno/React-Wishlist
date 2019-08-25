import React from 'react';

const wishes = [
    { text : 'Travel to the moon', done : false},
    { text : 'Pay the gym', done : true },
    { text : 'Go to the gym', done : false},
];
const App = () => 
    <div>
        <h1>My wishlist app</h1>
        <fieldset>
            <legend>New Wish</legend>
            <input placeholder="Enter your wish here"/>
        </fieldset>
        <ul>
            {wishes.map(({text, done}, i) => (
                <li>
                    <label htmlFor={`wish${i}`}>
                        <input id={`wish${i}`} type="checkbox" checked={done}></input>
                        {text}
                    </label>
                </li>
            ))}
        </ul>
        <button type="button">Archive done</button>
    </div>
;
export default App;
