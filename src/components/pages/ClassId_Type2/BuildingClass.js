import React from 'react'
//Actions
import { updateRoom } from './../../../store/actions/roomActions'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Assets
import Spin from './../../assets/images/Spin-1s-200px.gif'
//Grid
import { ContainerRow, ColCard, B_Col } from './../../grid/BootstrapGrid'
//plugins
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Reactstrap
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
//Pages
import BuildingClassModal from './BuildingClassModal'
class BuildingClass extends React.Component{
	state = {
		modal: false,
		loading: true,
		id: '',
		idRoom: '',
		room: '',
		status: '',
		bookedBy: '',
		bookedId: ''
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		},2000)
	}

	toggleModal = (data) => {
		this.setState({
			modal: !this.state.modal,
			id: data.id,
			idRoom: data.idRoom,
			room: data.room,
			status: data.status,
			bookedBy: data.bookedBy,
			bookedId: data.bookedId
		})
	}

	classAction = (mode) => {
		const { modal, loading, id, idRoom, room, status, bookedBy, bookedId } = this.state
		const { profile } = this.props
		switch(mode){
			case 'BOOKING':
				const detailProfile = profile.firstName + ' ' + profile.lastName + ' ' + profile.npm
				const detailProfileId = profile.userId
				const dataBooking = {
					id, 
					idRoom, 
					room, 
					status: true, 
					bookedBy: detailProfile,
					bookedId: detailProfileId
				}
				if(this.props.auth.uid == null){
					return alert('Must Sign in first')
				}else{
					const check = window.confirm('Booking?');
					if(check === true){
						this.setState({
							modal: !this.state.modal
						})
						return this.props.updateRoom(dataBooking)
					}
					else{
						return null
					}
				}
				break;

			case 'DONE':
				const dataDone = {
					id, 
					idRoom, 
					room, 
					status: false, 
					bookedBy: '',
					bookedId: ''
				}
				if(this.props.auth.uid == null){
					return alert('Must Sign in first')
				}
				else{
					const check = window.confirm('Done?');
					if(check === true){
						this.setState({
							modal: !this.state.modal
						})
						return this.props.updateRoom(dataDone)
					}
					else{
						return null
					}
				}
				break;

			case 'CLOSE':
				this.setState({
					modal: !this.state.modal,
					id: '',
					idRoom: '',
					room: '',
					status: '',
					bookedBy: '',
					bookedId: ''
				})
				break;

			default:
				return null
		}
	}
	
 	render(){
		const { modal, loading } = this.state
		const { id, idRoom, room, status, bookedBy, bookedId } = this.state
		const { classList, profile } = this.props
		const idBuilding = this.props.match.params.buildingId
		const value = { id, idRoom, room, status, bookedBy, bookedId }
		if(loading){
			return(
				<div className='Pages-Loading'>
					<img src={Spin} alt='loading' />
				</div>
			)
		}
		else{
			return(
				<div id='BuildingClassType2'>
					<ContainerRow>
						<B_Col lgCol='11' mdCol='11' smCol='11' xsCol='11' colClass='mx-auto' brCard='mb-3'>
							<div className='Pages-Title'>
								<CardTitle> Daftar Kelas </CardTitle>
							</div>
							<Card className='main-frame'>
								<CardBody>
									<ContainerRow>
										{classList && classList.map((data)=>{
											const statusColor = data.status === true ? '#d63031' : '#ffffff';
											if(data.idRoom == idBuilding){
												return(
													<ColCard lgCol='2' mdCol='2' smCol='6' xsCol='12' colClass='' brCard='mb-3' tlCard='' cardAction={() => this.toggleModal(data)} key={data.id}>
														<div className='classDetail'> 
															<FontAwesomeIcon icon='home' className='classIcon' style={{color: statusColor}}/>
															<CardText> {data.room} </CardText>
														</div>
													</ColCard>
												)	
											}
											else{
												return null
											}
										})}
									</ContainerRow>
								</CardBody>
							</Card>
						</B_Col>
						<BuildingClassModal 
							modal={modal}
							value={value}
							profile={profile}
							classAction={this.classAction}
						/>
					</ContainerRow>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth,
		classList: state.firestore.ordered.classList,
		profile: state.firebase.profile
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
)(BuildingClass)