import React from 'react'
//Reactstrap
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
class UserContact extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.email.length > 0 &&
						value.phone.length > 0 &&
						value.npm.length > 0;
		return(
			<Form>
				<FormGroup> 
					<Label htmlFor='email'> Email </Label>
					<Input
						id='email'
						value={value.email}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup> 
					<Label htmlFor='phone'> Phone Number </Label>
					<Input
						id='phone'
						min='0'
						max='100'
						maxLength='14'
						value={value.phone}
						pattern="^-?[0-9]\d*\.?\d*$"
						onChange={this.props.onChangePhone}
					/>
				</FormGroup>
				<FormGroup> 
					<Label htmlFor='npm'> NPM </Label>
					<Input
						id='npm'
						min='0'
						max='100'
						maxLength='12'
						value={value.npm}
						pattern="^-?[0-9]\d*\.?\d*$"
						onChange={this.props.onChangeNpm}
						
					/>
				</FormGroup>
				<FormGroup> 
					<Button color='info' block onClick={() => this.props.nextStep('UserContact')} disabled={!enabled}> Next </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default UserContact