import React from 'react'
import Modal from 'react-bootstrap/Modal'


export default function BsModal (props:any): JSX.Element  {
  const [isOpen, setIsOpen] = React.useState(true)
  // eslint-disable-next-line
  const showModal = () => {
    setIsOpen(true);
  }
  const hideModal = () => {
    setIsOpen(false);
  }  
   
  return(
    <Modal show={isOpen}>
      <Modal.Header>
        <Modal.Title>{props.header}</Modal.Title>
        <button 
          type="button" 
          className="close" 
          data-dismiss="modal" 
          aria-label="Close"
          onClick={hideModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer style={{height: '60px'}}>
        <input 
          type="button"
          value='ok'
          className='btn btn-primary'
          onClick={hideModal}
        />
      </Modal.Footer>
    </Modal>        
  )
}