import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsGiven, setAttemptsGiven] = useState<string>("");

    const attemptRequired = parseInt(attemptsGiven) || 0;
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Input:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsGiven}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsGiven(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() =>
                        setAttemptsRemaining(
                            attemptsRemaining + attemptRequired
                        )
                    }
                >
                    {" "}
                    gain{" "}
                </Button>
                <Button
                    onClick={() => setAttemptsRemaining(attemptsRemaining - 1)}
                    disabled={attemptsRemaining <= 0}
                >
                    {" "}
                    use{" "}
                </Button>
                <div> Attempts: {attemptsRemaining} </div>
            </div>
        </div>
    );
}
