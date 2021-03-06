import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link } from "react-router-dom";
import img1 from './Images/matrice dincidence.png'
import img2 from './Images/matinci.png'

class Concept7 extends Component {



    render() {
        return (
            <div className="App" >

                <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                    <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman" }}> Matrice d’incidence:</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8">
                                <CardText>
                                    <p style={{ "font-size": "35px", "font-family": "Times New Roman" }}> Modélisation </p>
                                    <p style={{ "font-size": "25px", "font-family": "Times New Roman" }} >
                                        <br />

                                        Soit le graphe G = (S;A). La présentation par matrice d’incidence de G consiste en une
                                        matrice C de taille n m telle que:
                                        cik= 1 si i est la source de uk; -1 si i est la destination de uk;0 sinon
                                        <br />
                                        - Un graphe non orienté est un couple G=(S,A) :
                                        A inclue S × S ensemble d’arêtes.
                                    </p>
                                </CardText>
                            </Col>
                            <Col xs="1"></Col>
                            <Col xs="3">
                                <img src={img1} style={{ marginLeft: "-100px" }} />
                                <br />
                                <img src={img2} style={{ marginLeft: "-100px", marginTop: "20px", width: "390px" }} />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm="4" xs="6"  ></Col>
                            <Col sm="4" xs="6"></Col>
                            <Col sm="4" ></Col>
                            <br />
                            <div style={{ width: "300px", right: "100px" }} >
                                <nav>
                                    <Link to="/chapter1/qcm6" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                                </nav>
                            </div>
                        </Row>
                    </Container>
                </Card>

            </div>

        )

    }
}

export default Concept7;