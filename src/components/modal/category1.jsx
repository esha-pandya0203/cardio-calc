import React from 'react'; 
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal.css';

export default function Category1Modal({ visible, onClose }) {

    return (
        <Modal 
            show={visible} 
            onHide={onClose}
            aria-labelledby='contained-modal-title-vcenter'
            className='modal'
            size='lg'
            centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Category 1</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
            <div className='equations'>
                <ul className='list-unstyled'>
                    <li className='equation-name'>Option 1</li>
                    <li className='equation-name'>Option 2</li>
                    <li className='equation-name'>Option 3</li>
                    <li className='equation-name'>Option 4</li>
                    <li className='equation-name'>Option 5</li>
                    <li className='equation-name'>Option 6</li>
                    <li className='equation-name'>Option 7</li>
                    <li className='equation-name'>Option 8</li>
                </ul>
            </div>
            <div className='calculator'>
                hello
            </div>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button variant="danger" onClick={onClose}>
            Calculate
          </Button>
          <h5 className='answer-text'>Answer: ________</h5>
        </Modal.Footer>
      </Modal>
    )
}