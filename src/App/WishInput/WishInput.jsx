import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WishInput = ({ onNewWish }) => {
    const [newWishTest, setNewWishTest] = useState('');
    return (
        <fieldset className="form-group">
            <legend className="card-subtitle mb-2 text-muted">New Wish</legend>
            <input 
                placeholder="Enter your wish here" 
                className="form-control" 
                value={newWishTest} 
                onChange = { e => setNewWishTest(e.target.value)}
                onKeyUp = {(e) => {
                    if(e.key === 'Enter' && newWishTest.length){
                        onNewWish({done : false, text: newWishTest});
                        setNewWishTest('');
                    }
                }}
            />
        </fieldset>
    );
}

WishInput.protTypes = {
    onNewWish : PropTypes.func,
};

WishInput.defaultProps = {
    onNewWish : () => {},
};

export default WishInput;
