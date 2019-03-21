import React from 'react'
//Tools
import { connect } from 'react-redux'
//Assets
import Spin from './../../assets/images/Spin-1s-200px.gif'
//Grid
import { ContainerRow, ColCard } from './../../grid/BootstrapGrid'
class Dashboard extends React.Component{
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
		const { auth } = this.props
		if(loading){
			return(
				<div className='Pages-Loading'>
					<img src={Spin} alt='loading' />
				</div>
			)
		}
		else{
			return(
				<div className='Dashboard'>
					<ContainerRow>
						<ColCard lgCol='11' mdCol='11' smCol='11' xsCol='11' colClass='mx-auto' brCard='mb-3' tlCard='Universitas Indraprasta'>
							<p> Dashboard </p>
						</ColCard>
					</ContainerRow>
				</div>
			)
		}
	}
}


const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(Dashboard)