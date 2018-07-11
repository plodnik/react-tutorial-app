import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    
    render () {
        const modalStatus = this.props.show ? classes.Shown : classes.Hidden;
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={[classes.Modal, modalStatus].join(' ')}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;