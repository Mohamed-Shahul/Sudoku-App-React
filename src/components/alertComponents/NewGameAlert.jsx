import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NewGameAlert(props) {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className='text-dark'>New Game</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p className='text-center text-dark font-weight-bold h3'>
          Do You Want Start The New Game
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn btn-success' onClick={props.onHide}>Yes</Button>
        <Button className='btn btn-danger' onClick={props.onHideCancel}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default NewGameAlert;