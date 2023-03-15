import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>Header for 275 wedsite</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
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
            <div style={{ backgroundColor: "blue", width: 1500, height: 200 }}>
                <Container>
                    <Row>
                        <Col>Column 1</Col>
                        <Col>Column 2</Col>
                    </Row>
                </Container>
            </div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
