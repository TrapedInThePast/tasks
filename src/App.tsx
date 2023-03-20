import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div>
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
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <hr></hr>
                <CheckAnswer expectedAnswer="42"></CheckAnswer>
                <hr></hr>
                <GiveAttempts></GiveAttempts>
                <hr></hr>
                <EditMode></EditMode>
                <hr></hr>
                <ChangeColor></ChangeColor>
                <hr></hr>
                <MultipleChoiceQuestion
                    options={["a", "b", "c"]}
                    expectedAnswer="b"
                ></MultipleChoiceQuestion>
                <hr></hr>
                {/* <DoubleHalf></DoubleHalf> */}
                <hr></hr>
                <ChooseTeam></ChooseTeam>
                <hr></hr>
                <ColoredBox></ColoredBox>
                <hr></hr>
                <ShoveBox></ShoveBox>
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
            </div>
        </div>
    );
}

export default App;
