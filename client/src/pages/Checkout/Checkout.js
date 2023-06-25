import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Checkout = ({ viewCartModal, toggleViewCart }) => {


    return (

        <div >
            <Modal isOpen={viewCartModal} toggle={toggleViewCart} fullscreen>
                <ModalBody>
                    <ModalHeader>Checkout page</ModalHeader>
                    <ModalFooter>Abc</ModalFooter>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Checkout