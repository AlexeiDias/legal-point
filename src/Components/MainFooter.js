import React, { Component } from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import styled from "styled-components";



const Styles = styled.div`
    .MainFooter {
        background-color: #343a40;
        background-size: cover;
        height: 350px;
        margin-top: 0px;
        margin-bottom: 0px;
        padding-left: 100px;
        padding-top: 120px;
        color: white;
        font-size: 40px;
        text-align: left;
        }
    .title {
        height: 300px;
        width: 300px;
        margin-bottom: 100px;
        }
    .slogan {
        font-size: 20px;
        padding-top: 20px;
        /* word-spacing: 30px; */
    }

    .email {
        font-size: 25px;
        padding-top: 35px;
    }
   


`;

export default class MainFooter extends Component {
    render() {
        return (
            <div>
              <Styles>
                <Container fluid className="MainFooter ">
  <Row>
    <Col xs={6} md={4}>
      {/* <Image src="holder.js/171x180" rounded /> */}
      <h4>Legal Point</h4>
      <p className="slogan"> Join our Team</p>
      
      <p className="slogan"> Policies</p>
    </Col>
    <Col xs={6} md={4}>
    <h4>Support</h4>
    <p className="slogan"><a href="https://www.youtube.com/user/ChrisStudios" target="_blank"> OnLine Training Material</a></p>
    </Col>
   
    <Col xs={6} md={4}>
    <h4>Contact and Help</h4>
    <p className="email"><a href="mailto:littlestart@gmail.com">littlestart@gmail.com</a></p>
    <p className="email"><a href="tel:1-415-705-9104">415 - 7059104</a></p>
    </Col>
  </Row>
</Container>
</Styles>
            </div>
        )
    }
}
