import React from 'react'
//Reactstrap
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardText } from 'reactstrap';
class BuildingClassModal extends React.Component{
	render(){
		const { value, profile } = this.props
		const action = {
			enabled: value.status === false,
			status: value.status === true ? 'Terpakai' : 'Kosong',
			booked: value.bookedBy === '' ? '-' : value.bookedBy,
			btnDetail: value.status === true ? 'Booked' : 'Booking',
			doneAction: value.bookedId === profile.userId //Tindakan Selesai hanya dapat di gunakan oleh peminjam atau id pada classList sama dengan User id
		}
		return(
		  <div>
	        <Modal isOpen={this.props.modal} toggle={()=>this.props.classAction('CLOSE')} className={this.props.className}>
	          <ModalHeader toggle={()=>this.props.classAction('CLOSE')}>Deskripsi Ruangan</ModalHeader>
	          <ModalBody>
	           	<CardText> Room : {value.room} </CardText>
	           	<CardText> Status : {action.status} </CardText>
	           	<CardText> Booked By : {action.booked} </CardText>
	           	<br />
	           	<div className='text-center'>
		           	<Button color='primary' onClick={()=>this.props.classAction('BOOKING')} disabled={!action.enabled}> {action.btnDetail} </Button>{' '}
		           	<Button color='danger' onClick={()=>this.props.classAction('DONE')} disabled={!action.doneAction}> Done </Button>{' '}
		           	<Button color='info' onClick={()=>this.props.classAction('CLOSE')}> Cancel </Button>
		        </div>
	          </ModalBody>
	        </Modal>
	      </div>
		)
	}
}

export default BuildingClassModal