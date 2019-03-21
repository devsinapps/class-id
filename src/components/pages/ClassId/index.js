import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
//Grid
import { ContainerRow, ColCard, B_Col } from './../../grid/BootstrapGrid'
//Reactstrap
import { Card } from 'reactstrap'
//Componets
import BuildingSummary from './BuildingSummary'
import BuildingDetail from './BuildingDetail'
class ClassId extends React.Component{
	state = {
		modal: false,
		idBuilding: ''
	}

	openModal = (data) => {
		this.setState({
			modal: !this.state.modal,
			idBuilding: data.idBuilding
		})
	}

	closeModal = () => {
		this.setState({
			modal: !this.state.modal
		})
	}
	render(){
		const { modal, idBuilding } = this.state
		const { buildingList } = this.props 
		return(
			<ContainerRow>
				<B_Col  lgCol='11' mdCol='11' smCol='11' xsCol='11' colClass='mx-auto'>
					<Card>
						<ContainerRow>
							{buildingList && buildingList.map((data)=>{
								return(
									<BuildingSummary key={data.idBuilding} idBuilding={data.idBuilding} data={data.buildingName} openModal={() => this.openModal(data)}  closeModal={this.closeModal}/>
								)
							})}
						</ContainerRow>
					</Card>
				</B_Col>
				<BuildingDetail  
					modal={modal}
					idBuilding={idBuilding}
					openModal={this.openModal}
					closeModal={this.closeModal}
				/>
			</ContainerRow>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		buildingList: state.firestore.ordered.buildingList
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{
		collection: 'buildingList'
	}])
)(ClassId)