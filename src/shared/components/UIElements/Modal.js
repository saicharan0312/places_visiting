import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
 
import Backdrop from '../UIElements/Backdrop';
import './Modal.css';

const ModalOverlay = (props) => {
    const content = (
        <div className= {`modal ${ props.className } `}  style = { props.style } >
            <header className = {`modal_header ${ props.headerClass } `} >
                <h2>{ props.header }</h2>
            </header>
            <form onSubmit = {
                props.onSubmit ? props.onSubmit : event => event.preventDefault
            } 
            > 
            <div className= {`modal_content ${ props.ContentClass } `} >
                { props.children }
            </div>
            <footer className= {`modal_footer ${ props.footerClass } `} >
                { props.footer }
            </footer>
            </form>
        </div>
    );
    return ReactDOM.createPortal( content ,document.getElementById('modal-hook'));
};

const Modal = (props) => {

};

export default Modal;