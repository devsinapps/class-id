import React from 'react'
//Grid
import { ColCard } from './../../grid/BootstrapGrid'
class BuildingSummary extends React.Component{
	render(){
		const { data } = this.props
		return(
			<ColCard lgCol='4' mdCol='4' smCol='4' xsCol='4' colClass='' tlCard='' brCard='mb-3' cardAction={this.props.openModal}>
				<h1> {data} </h1>
			</ColCard>
		)
	}
}

export default BuildingSummary