import React from 'react'
//Tools
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//Reactstrap
import { Navbar,NavbarBrand,CardText } from 'reactstrap'
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Navigations extends React.Component{
	sliderProfile = () => {
		const SidenavProfileMenu = document.querySelector('.SidenavProfile-Menu');
		const SidenavProfileToggle = document.querySelector('.SidenavProfile-Toggle');
		SidenavProfileMenu.classList.toggle('SidenavProfile-Menu-Slider');
		SidenavProfileToggle.classList.toggle('SidenavProfile-Toggle-Active');
	}
	render(){
		const { auth, profile } = this.props
		const viewProfile = auth.uid != null ? <CardText> <FontAwesomeIcon icon='sign-out-alt' /> </CardText> : <CardText> <FontAwesomeIcon icon='sign-in-alt' /> </CardText> ;
		return(
			<Navbar className='Navigations'>
				<div className='menu'>
					<Link to='/'> Dashboard </Link>
					<Link to='/classidtype2'> Info </Link>
				</div>
				<div className='initials' onClick={this.sliderProfile}>
					{viewProfile}
				</div>
			</Navbar>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Navigations)