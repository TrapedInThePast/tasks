import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <span>
            <Button
                onClick={() => {
                    setProgress(true);
                    setAttempts(attempts - 1);
                }}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setProgress(false)}>Stop Quiz</Button>
            <Button onClick={() => setAttempts(attempts + 1)}>Mulligan</Button>
        </span>
    );
}
