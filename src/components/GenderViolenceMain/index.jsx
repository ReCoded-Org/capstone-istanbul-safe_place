import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import stopGenderViolenceImg from '../../images/home/stop-gender-violence.svg'
import './index.scss'

export default function GenderViolenceMain() {
    return (
        <Container fluid='md' className="main-container">
            <Row>
                <Col md={{ span: 6, order: 'first' }} sm={{ span: 12, order: 'last' }}>
                    <h1>You are not alone, Safe Place is <span>HERE</span></h1>
                    <p>
                        Safe Place provides access to immediate help and support for victims of violence. We offer a shelter, psychological help, lawyers and doctors.
                    </p>
                    <button>Find Help</button>
                </Col>
                <Col md={{ span: 6, order: 'last' }} sm={{ span: 12, order: 'first' }}>
                    <img src={stopGenderViolenceImg} alt="stop Gender Violence" />
                </Col>
            </Row>
        </Container>
    )
}
