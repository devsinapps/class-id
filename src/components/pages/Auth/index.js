import React from 'react'
//Tools
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
//Actions
import { signOut } from './../../../store/actions/authActions'
//Grid
import { ContainerRow, ColCard, B_Col } from './../../grid/BootstrapGrid'
//Pages
import SignIn from './signIn'
import SignUp from './signUp'
//Reactstrap
import { Button, CardTitle, CardText } from 'reactstrap'
class Auth extends React.Component{
	state = {
		authCase: 1
	}

	signInCase = () => {
		this.setState({
			authCase: 1
		})
	}

	signUpCase = () => {
		this.setState({
			authCase: 2
		})
	}
	render(){
		const { authCase } = this.state
		const { auth } = this.props
		const config = {
			authView: authCase === 1 ? <SignIn /> : <SignUp />,
			titleView: authCase === 1 ? 'Masuk' : 'Daftar',
			signUpTitle: authCase === 1 ? 'block' : 'none'
		}
		if(auth.uid != null) return <Redirect to='/' />;
		return(
			<div id='Auth'>
				<ContainerRow>
					<ColCard lgCol='4' mdCol='4' smCol='12' xsCol='12' colClass='mx-auto' brCard='mb-3' tlCard=''>
						<CardTitle className='Auth-Title'> Class - <span style={{fontStyle: 'italic'}}> Id  </span> </CardTitle>
						<CardText> {config.titleView} </CardText>
						{config.authView}
					</ColCard>
				</ContainerRow>
				<ContainerRow style={{display: config.signUpTitle}}>
					<B_Col lgCol='4' mdCol='4' smCol='12' xsCol='12' colClass='mx-auto'>
						<p> Belum punya akun ? <span onClick={this.signUpCase} className='SignUp'> daftar </span> </p>
					</B_Col>
				</ContainerRow>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)