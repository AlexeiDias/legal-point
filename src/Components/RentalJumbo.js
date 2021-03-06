import React, { Component } from 'react';
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from "styled-components";
import reantal4 from "../images/reantal4.jpeg"

const Styles = styled.div`
 .Jumbo {
        background: url(${reantal4}) no-repeat;
        background-size: cover;
        height: 600px;
        margin-top: 0px;
        margin-bottom: 0px;
        padding-left: 100px;
        padding-top: 250px;
        color: white;
        font-size: 60px;
        text-align: left;
        }

`;

export default class RentalJumbo extends Component {
    render() {
        return (
            <Styles>
            <Jumbo fluid className="Jumbo">
                <Container>
                     {/* <h1>Home jumbotron</h1> */}
                    <p>
                    Around the World professional legal services.
                    </p>
                </Container>
            </Jumbo>
            </Styles>
        )
    }
}
