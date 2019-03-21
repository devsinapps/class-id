import React from 'react'
//Tools
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
//Assets
import Spin from './../../assets/images/Spin-1s-200px.gif'
//Grid
import { ContainerRow, B_Col } from './../../grid/BootstrapGrid'
//Pages
import BuildingSummary from './BuildingSummary'
//Reactstrap
import { Card, CardBody, CardTitle } from 'reactstrap'
class ClassId_Type2 extends React.Component{
	state = {
		loading: true
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: false
			})
		}, 4000)
	}
	render(){
		const { loading } = this.state
		const { buildingList } = this.props
		if(loading){
			return(
				<div className='Pages-Loading'>
					<img src={Spin} alt='loading' />
				</div>
			)
		}
		return(
			<div id='ClassId_Type2'>
				<ContainerRow>
					<B_Col lgCol='11' mdCol='11' smCol='11' xsCol='11' colClass='mx-auto'>
						<div className='Pages-Title'>
							<CardTitle> Daftar Gedung </CardTitle>
						</div>
						<Card className='main-frame'>
							<CardBody>
								<ContainerRow>
									{buildingList && buildingList.map((data)=>{
										return(
											<BuildingSummary key={data.id} data={data}/>
										)
									})
									}
								</ContainerRow>
							</CardBody>
						</Card>
					</B_Col>
				</ContainerRow>
			</div>
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
		collection: 'buildingList', orderBy: ['idBuilding', 'asc']
	}])
	)(ClassId_Type2)