import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div className="App-header">
                <h1>Header for 275 wedsite</h1>
            </div>
            <img
                src="https://wolf-wallpapers.pro/images/wolf-howling-at-the-moon-wallpapers-wallpaper-cave-98-1-wolf-wallpapers.pro.jpg"
                alt="A white wolf howling at the moon"
            />
            <p>List of my favorite foods</p>
            <ul>
                <li>Sushi</li>
                <li>Mac and Cheese</li>
                <li>Ice Cream</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload Emma Metcalfe. Hello World.
            </p>
            <Container>
                <Row>
                    <div
                        style={{
                            width: 600,
                            height: 200,
                            backgroundColor: "red",
                            border: "5px solid blue",
                            padding: "50px"
                        }}
                    ></div>
                    <Col>First column.</Col>

                    <div
                        style={{
                            width: 600,
                            height: 200,
                            backgroundColor: "red",
                            border: "5px solid blue",
                            padding: "50px"
                        }}
                    ></div>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
