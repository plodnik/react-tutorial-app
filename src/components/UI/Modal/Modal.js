import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    const modalStatus = props.show ? classes.Shown : classes.Hidden;

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={[classes.Modal, modalStatus].join(' ')}>
                {props.children}
            </div>
        </Aux>
    );
};

export default modal;