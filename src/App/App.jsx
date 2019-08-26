import React from 'react';
import './App.css';
import 'typeface-roboto';
import Checkbox from '@material-ui/core/Checkbox';

const wishes = [
    { text : 'Travel to the moon', done : false},
    { text : 'Pay the gym', done : true },
    { text : 'Go to the gym', done : false},
];
const App = () => 
    <div className="app card">
        <h1 className="card-title title" >My wishlist app</h1>
        <fieldset className="form-group">
            <legend className="card-subtitle mb-2 text-muted">New Wish</legend>
            <input placeholder="Enter your wish here" className="form-control"/>
        </fieldset>
        <ul className="wish-list">
            {wishes.map(({text, done}, i) => (
                <li key={text} className={`${done ? 'wish-list_item--done' : ''}`}>
                    <Checkbox checked={done} id={`wish${i}`}/>
                    <label htmlFor={`wish${i}`} className="form-check-label">{text}</label>
                </li>
            ))}
        </ul>
        <button type="button" className="btn btn-info">Archive done</button>
    </div>
;
export default App;
