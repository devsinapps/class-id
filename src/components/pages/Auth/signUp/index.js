import React from 'react'
//Tools
import { connect } from 'react-redux'
//Actions
import { signUp } from './../../../../store/actions/authActions'
//Reactstrap
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
//Pages
import UserInfo from './UserInfo'
import UserContact from './UserContact'
import UserKey from './UserKey'
class SignUp extends React.Component{
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		gender: '',
		age: '',
		email: '',
		phone: '',
		npm: '',
		password: '',
		keypass: ''
	}

	nextStep = (mode) => {
		const { step, email, password, keypass } = this.state
		if(mode === 'UserInfo'){
			this.setState({
				step: step + 1
			})
		}else if(mode === 'UserContact'){
			const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(!regex.test(email)){
				return alert('Email Invalid')
			}else{
				this.setState({
					step: step + 1
				})
			}
		}else if(mode === 'SignUp'){
			const { firstName, lastName, age, gender, email, phone, npm, password } = this.state
			const f_age = age === `${age}` ? parseInt(age) : null;
			const f_gender = gender === '1' ? 1 : 2;
			const dataUser = {
				firstName, 
				lastName, 
				age: f_age, 
				gender: f_gender, 
				email, 
				phone, 
				npm, 
				password
			}
			if(password !== keypass){
				return alert('Fail')
			}else{
				this.props.signUp(dataUser)
			}
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onChangePhone = (e) => {
		const phone = e.target.value 
		if(e.target.validity.valid){
			this.setState({
				phone: phone
			})
		}else if(phone === '' || phone === '-'){
			this.setState({
				phone: phone
			})
		}
	}

	onChangeNpm = (e) => {
		const npm = e.target.value 
		if(e.target.validity.valid){
			this.setState({
				npm: npm
			})
		}else if(npm === '' || npm === '-'){
			this.setState({
				npm: npm
			})
		}
	}

	render(){
		const { step, firstName, lastName, age, gender, email, phone, npm, password, keypass } = this.state
		const { genderSelect } = this.props
		const value = { firstName, lastName, age, gender, email, phone, npm, password, keypass }
		switch(step){
			case 1:
				return(
					<UserInfo
						value={value}
						genderSelect={genderSelect}
						onChange={this.onChange}
						nextStep={this.nextStep} 
					/>
				)

			case 2:
				return(
					<UserContact
						value={value}
						onChange={this.onChange} 
						onChangePhone={this.onChangePhone}
						onChangeNpm={this.onChangeNpm}
						nextStep={this.nextStep}
					/>
				)

			case 3:
				return(
					<UserKey
						value={value}
						onChange={this.onChange} 
						nextStep={this.nextStep}
					/>
				)

			default:
				return null
		}	
		
	}
}

const mapStateToProps = (state) => {
	return{
		genderSelect: state.data.genderSelect
	}
}

const mapDispatchToProp = (dispatch) => {
	return{
		signUp: (dataUser) => dispatch(signUp(dataUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProp)(SignUp)