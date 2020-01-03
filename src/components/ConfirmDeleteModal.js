import React from 'react';
import Modal from 'react-modal'

const ConfirmDeleteModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedExpense}
            contentLabel="Delete confirmation"
            onRequestClose={props.handleDeletionNo}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Are you sure you want to delete?</h3>
            {props.selectedExpense && <p className="modal__body">{props.selectedExpense}</p>}
            <button className="button" onClick={props.handleDeletionNo}>Cancel</button>
            <button className="button" onClick={props.handleDeletionYes}>Ok</button>

        </Modal>
    </div>
);

export { ConfirmDeleteModal as default };