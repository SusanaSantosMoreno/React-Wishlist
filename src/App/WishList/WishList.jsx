import React from 'react'
import PropTypes from 'prop-types';
import WishItem from '../WishItem/WishItem';

const WishList = ({wishes, onWishesChange}) => (
    <ul className="wish-list">
        {wishes.map(({text, done}, i) => (
            <WishItem text={text} done={done} id={`wish${i}`} key={text} 
                onDoneChange = {(value) => {
                    const updateWishes = [...wishes];
                    updateWishes[i].done = value;
                    onWishesChange(updateWishes);
                }
            }></WishItem>
        ))}
    </ul>
);
WishList.propTypes = {
    wishes : PropTypes.arrayOf(PropTypes.shape(WishItem.propTypes)),
    onWishesChange : PropTypes.func,
}

WishList.defaultProps = {
    wishes : [],
    onWishesChange : () => {},
}

export default WishList;

