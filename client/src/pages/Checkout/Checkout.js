import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Checkout = ({ viewCartModal, toggleViewCart }) => {


    return (

        <div >
            <Modal isOpen={viewCartModal} toggle={toggleViewCart} fullscreen>
                <ModalHeader>Checkout page</ModalHeader>
                <ModalBody>


                    <h5>IN PROGRESS</h5>

                </ModalBody>
            </Modal>
        </div>
    )
}

export default Checkout