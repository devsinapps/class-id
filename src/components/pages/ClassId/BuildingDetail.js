import React from 'react'
//Tools
import { updateRoom } from './../../../store/actions/roomActions'
//Tools
import { compose } from 'redux'
import { connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' 
//Grid
import { ContainerRow, ColCard, B_Col } from './../../grid/BootstrapGrid'
//Reactstrap
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardTitle, CardText, Form, FormGroup, Label,Input, CustomInput } from 'reactstrap';
class BuildingDetail extends React.Component{
	state = {
		dataRoom: [],
		id: '',
		idRoom: '',
		status: '',
		room: '',
		bookedBy: ''
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				dataRoom: this.props.classList
			})
		},5000)
	}

	getDataRoom = (data) => {
		this.setState({
			id: data.id,
			idRoom:data.idRoom,
			status:data.status,
			room:data.room,
			bookedBy: data.bookedBy
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	updateRoom = (e) => {
		e.preventDefault();
		const { id, idRoom, status, room, bookedBy } = this.state
		const filter = status === '1' ? true : false;
		const dataRoom = {
			id, 
			idRoom, 
			status: filter, 
			room, 
			bookedBy
		}
		const check = window.confirm('Booking?');
		if(check === true){
			return this.props.updateRoom(dataRoom)
		}
		else{
			return null
		}
	}
	render(){
		const { dataRoom, status } = this.state
		const { classList, idBuilding } = this.props
		const statusRoom = status == 'true' ? 'terpakai' : 'kosong';
		return(
		 <div>
	        <Modal isOpen={this.props.modal} toggle={this.props.closeModal} className={this.props.className}>
	          <ModalHeader toggle={this.props.closeModal}>Modal title</ModalHeader>
	          <ModalBody>
	             <ContainerRow>
	             	{classList && classList.map((cl)=>{
	             		const statusBackground = cl.status === true ? 'red' : 'green';
	             		const style = {
	             			styleBackground: {
	             				backgroundColor: statusBackground
	             			}
	             		}
	          			if(cl.idRoom === idBuilding){
	          				return(
		             			<ColCard lgCol='3' mdCol='3' smCol='3' xsCol='3' colClass='' tlCard='' brCard='mb-3' style={style.styleBackground}>
		             				<CardTitle> {cl.room} </CardTitle>
		             			</ColCard>
		             		)
	          			}else{
	          				return null
	          			}
	             	})}
	             </ContainerRow>
	             <div className='text-center'>
	             	<Button color="primary" onClick={this.props.closeModal}>Do Something</Button>{' '}
		            <Button color="secondary" onClick={this.props.closeModal}>Cancel</Button>
				</div>
				 <Form onSubmit={this.updateRoom}>
					<FormGroup>
						<Label htmlFor='className'> Ruang Kelas </Label>
						<CustomInput type='select'> 
							<option value=''> Pilih -- </option>
							{dataRoom && dataRoom.map((data)=>{
								if(data.idRoom === idBuilding){
									return(
										<option value={data.room} onClick={()=> this.getDataRoom(data)}> {data.room} </option>
									)	
								}else{
									return null
								}				
							})}
						</CustomInput>
					</FormGroup>
					<FormGroup>
						<Label htmlFor='className'> Status </Label>
						<Input
							disabled
							value={statusRoom}
						/>
					</FormGroup>
					<FormGroup>
						<Label htmlFor='status'> Tindakan </Label>
						<CustomInput type='select' id='status' onChange={this.onChange}> 
							<option value=''> Pilih -- </option>
							<option value='1'> Booking </option>
							<option value='2'> Selesai </option>
						</CustomInput>
					</FormGroup>
					<FormGroup>
						<Button color="info">post</Button>
					</FormGroup>
				</Form>
	          </ModalBody>
	        </Modal>
	      </div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		classList: state.firestore.ordered.classList
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateRoom: (dataRoom) => dispatch(updateRoom(dataRoom))
	}
}

export default compose(
		connect(mapStateToProps, mapDispatchToProps),
		firestoreConnect([{
			collection: 'classList'
		}])
	)(BuildingDetail)