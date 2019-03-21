import React from 'react'
//Tools
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Grid
import { B_Col, B_Card, ContainerRow, ColCard } from './../../grid/BootstrapGrid'
//Reactstra
import { CardText, CardTitle } from 'reactstrap'
class BuildingSummary extends React.Component{
	render(){
		const { data } = this.props
		return(
			<B_Col lgCol='3' mdCol='3' smCol='6' xsCol='12' colClass=''>
				<Link to={'/buildingclass/'+data.idBuilding}>
					<B_Card brCard='mb-3' tlCard=''>
						<ContainerRow>
							<B_Col lgCol='4' mdCol='4' smCol='4' xsCol='4' colClass=''>
								<FontAwesomeIcon icon='building' className='building'/>
							</B_Col>
							<B_Col lgCol='8' mdCol='8' smCol='8' xsCol='8' colClass=''>
								<CardText> {data.buildingName} </CardText> 
								<ul>
									<li> detail </li>
									<li> detail </li>
									<li> detail </li>
								</ul>
							</B_Col>
						</ContainerRow>
					</B_Card>
				</Link>
			</B_Col>
		)
	}
}

export default BuildingSummary

