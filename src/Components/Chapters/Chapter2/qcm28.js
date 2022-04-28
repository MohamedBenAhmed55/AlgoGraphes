import React, { Component } from 'react'
import {
    Card,
    Button,
    Container,
    Row,
    Col, 
    CardTitle,
    CardBody
} from 'reactstrap';
import "./mcqstyle.css";
import { Routes, Route, Link } from "react-router-dom";
import img8 from "./Images/graph_qcm26_8.jpg";

class QCM28 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "rSelected": "",
            "setRSelected": "",
            "response": "",
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ response: e.target.name });
        console.log(e.target.name);
        if (this.state.response.localeCompare("2") == 0) {
            //  alert("true"); 
            let c = parseInt(localStorage.getItem("sc"));
            c += 1;
            localStorage.setItem("sc", c);
            alert("True");
        }
        else
            alert("False");
    }

    render() {

        return (

            <div className="grid">
                <Card className="cardpostion mcqstyle">
                    <CardBody>
                        <CardTitle className="textstyleheader">
                            <h2>Q8. Le diagramme de PERT permet un(e) :</h2>
                            <br />
                        </CardTitle>
                        <Row>
                            <Col>
                                <Row>
                                    <Button
                                        className="buttonstyle" value={this.state.response} name="1" onClick={this.onChange}
                                    >
                                        1. Définition du projet
                                    </Button>

                                </Row>
                                <br />
                                <Row style={{ paddingTop: "5px" }}>
                                    <Button

                                        className="buttonstyle" value={this.state.response} name="2" onClick={this.onChange}
                                    >
                                        2. Preparation et creation du projet
                                    </Button>
                                </Row>

                                <br />
                                <Row style={{ paddingTop: "5px" }}>
                                    <Button

                                        className="buttonstyle" value={this.state.response} name="3" onClick={this.onChange}
                                    >
                                        3. Ordonnancement et planification du projet ààà
                                    </Button>
                                </Row>
                                <br />
                                <Row style={{ paddingTop: "5px" }}>
                                    <Button

                                        className="buttonstyle" value={this.state.response} name="4" onClick={this.onChange}
                                    >
                                        4. Modification du projet
                                    </Button>
                                </Row>
                                <br />
                                {/* <p className="buttonstyle">You Selected: </p> */}
                            </Col>
                            <Col> 
                               <br/>
                                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 
                               <img src={img8} style={{height:"60%"}}/>
                            </Col>
                        </Row>
                    </CardBody>
                    <Row>
                        <Col sm="4" xs="6"  ></Col>
                        <Col sm="4" xs="6">  </Col>
                        <Col sm="4" >  </Col>
                        <br />
                        <div style={{ width: "300px", right: "100px" }} >
                            <nav>
                                <Link to="/chapter2/concept29" style={{ "font-size": "25px", "font-family": "Times New Roman", color: "green" }}><img style={{ height: "40px", width: "100px" }} id="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/2560px-Arrow_east.svg.png" /></Link>
                            </nav>
                        </div>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default QCM28;