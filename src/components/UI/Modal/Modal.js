import React from 'react';

import classes from './Modal.css';

const modal = (props) => {
    const modalStatus = props.show ? classes.Shown : classes.Hidden;

    return (
        <div className={`${classes.Modal} ${modalStatus}`}>
            {props.children}
        </div>
    );
};

export default modal;