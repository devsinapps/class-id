import React from 'react'
//Reactstrap
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
class UserKey extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.password.length > 0 &&
						value.keypass.length > 0 ;
		return(
			<Form>
				<FormGroup> 
					<Label htmlFor='password'> Password </Label>
					<Input
						id='password'
						type='password'
						value={value.password}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup> 
					<Label htmlFor='keypass'> Confirm Password </Label>
					<Input
						id='keypass'
						type='password'
						value={value.keypass}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup> 
					<Button color='info' block onClick={() => this.props.nextStep('SignUp')} disabled={!enabled}> Sign Up </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default UserKey