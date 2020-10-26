import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
    <Aux>
        <div
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            className={classes.Modal}>
            {props.children}
        </div>
        <Backdrop
            show={props.show}
            clicked={props.modalClosed} />
    </Aux>
);

export default modal; 