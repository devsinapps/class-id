import React from 'react'
//Reactstrap
import { Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
class UserInfo extends React.Component{
	render(){
		const { value, genderSelect } = this.props
		const enabled = value.firstName.length > 0 &&
						value.lastName.length > 0 &&
						value.gender.length > 0 &&
						value.age.length > 0
		return(
			<Form>
				<FormGroup> 
					<Label htmlFor='firstName'> First Name </Label>
					<Input
						id='firstName'
						value={value.firstName}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup> 
					<Label htmlFor='lastName'> Last Name </Label>
					<Input
						id='lastName'
						value={value.lastName}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup> 
					<Label htmlFor='gender'> Gender </Label>
					<CustomInput type='select' id='gender' onChange={this.props.onChange}>
						<option value={value.age}> Select -- </option>
						{genderSelect.map((data)=>{
							const view = data === 1 ? 'female' : 'male'
							return(
								<option value={data}> {view} </option>
							)
						})}
					</CustomInput>
				</FormGroup>
				<FormGroup> 
					<Label htmlFor='age'> Age </Label>
					<Input
						id='age'
						type='number'
						value={value.age}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup> 
					<Button color='info' block onClick={() => this.props.nextStep('UserInfo')} disabled={!enabled}> Next </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default UserInfo