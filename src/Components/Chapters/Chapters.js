import react, { Component } from 'react';
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import chap1 from '../Images/chapter1.png'
import chap2 from '../Images/chapter2.png'
import chap3 from '../Images/chapter3.png'
import chap4 from '../Images/chapter4.png'
import jwtDecode from 'jwt-decode';
import axios from 'axios';

class Chapters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "score":"",
             UserId: jwtDecode(localStorage.getItem('token')).UserId,
             sc: jwtDecode(localStorage.getItem('token')).score,
        };

        this.handlescore = this.handlescore.bind(this);
        this.updatescore = this.updatescore.bind(this);
    }
    componentDidMount() {
  
        
        // console.log(localStorage.getItem('sc'))
        // console.log(this.state.sc);
        this.setState({ score: localStorage.getItem('sc') });

    }

    handlescore(){
        if(localStorage.getItem('sc') > this.state.sc){
            this.updatescore(this.state.UserId);
        }
        else{
            alert("ce n'est pas votre meilleur score ! vous devez dépasser :  " + this.state.score)
        }
    }
    
  updatescore(id) {
    console.log(localStorage.getItem('sc'))
    // axios({
    //   method: 'patch',
    //   url: `http://localhost:8000/api/users/${id}`,
    //   data: {
    //     "score": localStorage.getItem('sc')
    //   },
    //   headers: {
    //     "Content-Type": 'application/merge-patch+json'
    //   }
    // }).then(res =>{
    //   alert("score modifié")
    // }).catch(err => {
    //   alert("Failed operation")
    // })
    axios.put(`http://localhost:8000/api/users/${id}`, {

      "score": parseFloat(localStorage.getItem('sc'))

  })
  }

    render() {
        return (
            <Card body inverse /*color="success"*/ style={{ position: "center", width: "1200px", "background": "#2F8DD6" }}>
                <img id="profile-img" className="profile-img-card" src="http://www.ensi-uma.tn/wp-content/uploads/2017/01/cropped-Logo-p.png" />
                <CardTitle style={{ "font-size": "50px", "font-family": "Times New Roman", "text-align": "center" }}>Select a chapter</CardTitle>
                <br /> <br /><br />
                <Container>
                    <Row xs="4">

                        <nav ><Link to="/chapter1/Concept"><img className="profile-img-card" src={chap1} style={{ position: "center", marginBottom: "20px", width: "250px", height: "250px" }} /></Link></nav>  <br />
                        <nav ><Link to="/chapter2/Concept21"><img  className="profile-img-card" src={chap2} style={{ position: "center", marginBottom: "20px", width: "250px", height: "250px" }} /></Link></nav>  <br />
                        <nav ><Link to="/Concept3_1"><img  className="profile-img-card" src={chap3} style={{ position: "center", width: "250px", height: "250px" }} /></Link></nav>  <br />  <br />
                        <nav ><Link to="/Scoreboard"><img  className="profile-img-card" src={chap4} style={{ position: "center", marginBottom: "20px ", width: "250px", height: "250px" }} /></Link></nav>  <br />

                    </Row>

                    <Row>
                        <Col xs="4" />
                        <Col xs="4" ><Card style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "70px", width: "350px", fontSize:"25px" }}  > <p>Your current score is = {this.state.score}</p> </Card> </Col>
                        <Col xs="4" />
                    </Row>

                    <Row>
                        <Col xs="4" />
                        <Col xs="4" ><Button onClick={this.handlescore} style={{ "background": "#6FA6E6", "font-family": "Comic Sans MS", height: "50px", width: "350px" }}  > Submit Score </Button> </Col>
                        <Col xs="4" />
                    </Row>

                </Container>

                {/* {this.state.redirect ? <Navigate to="/" replace /> : null} */}
            </Card>
        )
    }

}


export default Chapters;