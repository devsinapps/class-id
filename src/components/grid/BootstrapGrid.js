import React from 'react'
//Reactstrap
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'


export const B_Container = (props) => {
	const { children } = props
	return(
		<Container fluid>
		</Container>
	)
}

export const ContainerRow = (props) => {
	const { children, style } = props
	return(
		<Container fluid style={style}>
			<Row>
				{children}
			</Row>
		</Container>
	)
}

export const B_Col = (props) => {
	const { lgCol, mdCol, smCol, xsCol, colClass, children } = props
	return(
		<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
			{children}
		</Col>
	)
}

export const ColCard = (props) => {
	const { lgCol, mdCol, smCol, xsCol, colClass, tlCard, brCard, cardAction, style, children } = props
	const viewHeader = tlCard === '' ? null : <CardHeader> {tlCard} </CardHeader>;
	return(
		<Col lg={lgCol} md={mdCol} sm={smCol} xs={xsCol} className={colClass}>
			<Card className={brCard} onClick={cardAction} style={style}>
				{viewHeader}
				<CardBody>
					{children}
				</CardBody>
			</Card>
		</Col>
	)
}

export const B_Card = (props) => {
	const { brCard, tlCard, children } = props
	const viewHeader = tlCard === '' ? null : <CardHeader> {tlCard} </CardHeader>;
	return(
		<Card className={brCard}>
			{viewHeader}
			<CardBody>
				{children}
			</CardBody>
		</Card>

	)
}