import React from 'react'
//Actions
import { signOut } from './../../store/actions/authActions'
//Tools
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//Assets
import unindraLogo from './../assets/images/unindraLogo.png'
//Reactstrap
import { Button } from 'reactstrap'
class SidenavProfile extends React.Component{
	sliderProfile = () => {
		const SidenavProfileMenu = document.querySelector('.SidenavProfile-Menu');
		const SidenavProfileToggle = document.querySelector('.SidenavProfile-Toggle');
		SidenavProfileMenu.classList.toggle('SidenavProfile-Menu-Slider');
		SidenavProfileToggle.classList.toggle('SidenavProfile-Toggle-Active');
	}
	render(){
		const { auth, profile } = this.props
		const viewAuth = auth.uid != null ? (<a onClick={this.props.signOut}> Log Out </a>) : (<Link to='/auth'> Sign In </Link>);
		return(
			<div className='SidenavProfile'>
				<div className='SidenavProfile-Menu'>
					<div className='SidenavProfile-Img'>
						<img src={unindraLogo} alt='unindra-logo'/>
					</div>
					{
						auth.uid != null ? 
						(
							<ul>
								<li> 
									<span> Nama: {profile.firstName + ' ' + profile.lastName} </span> 
								</li>
								<li> 
									<span> NPM: {profile.npm} </span> 
								</li>
							</ul>
						)
						:
						(
							<div>
							</div>
						)
					}
					
					<hr />
					<div className='SidenavProfile-Auth'>
						{viewAuth}
					</div>
				</div>
				<div className='SidenavProfile-Toggle' onClick={this.sliderProfile}>
				</div>
			</div>
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

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidenavProfile)