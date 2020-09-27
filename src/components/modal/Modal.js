import React, { useState } from "react"
import "./Modal.scss"

const Modal = ({ children, title, modalButtonComponent }) => {
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }
  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <React.Fragment>
      <div onClick={handleShowModal}>
        {modalButtonComponent}
      </div>
      {
        showModal ?
          <div className="my-modal">
            <div className="modal-bg" onClick={handleCloseModal}></div>
            <div className="modal-wrapper">
              <div className="modal-contents">
                <div className="modal-head">
                  <span className="modal-title">{title}</span>
                  <button onClick={handleCloseModal}>&times;</button>
                </div>
                <div className="modal-main">
                  {
                    children
                  }
                </div>
              </div>
            </div>
          </div>
          :
          null
      }
    </React.Fragment>
  )
}

export default Modal