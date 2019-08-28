import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import className from 'classnames';

const WishItem = ({done, text, id, onDoneChange}) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        let ageInterval;
        if(done) {
            setAge(0);
        }else {//se ejecutará la función cada segundo
            ageInterval = setInterval(() => {
                if(done){
                    clearInterval(ageInterval);
                }else{
                    setAge(a => a + 1);
                }
            }, 1000);
        }
        return () => clearInterval(ageInterval);
    }, [done]);
    return (
        <li key={text} className={className('', {
            'wish-list_item--done' : done,
            'wish-list-item--warning': age >= 5 && age < 10,
            'wish-list-item--danger': age >= 10,
        })}>
            <Checkbox checked={done} onChange={e => onDoneChange(e.target.checked)} id={id}/>
            <label htmlFor={id} className="form-check-label">{text}</label>
        </li>
    );
}; 

WishItem.propTypes = {
    done : PropTypes.bool,
    text : PropTypes.string,
    id : PropTypes.string,
    onDoneChange : PropTypes.func,
};

WishItem.defaultProps = {
    done : false,
    text : '',
    id : '',
    onDoneChange : () => {},
}


export default WishItem;
