import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1] = useState<number>(5);
    const [dice2, setDice2] = useState<number>(3);
    return (
        <div>
            <Button onClick={() => setDice1(d6())}>Roll Left</Button>
            <span data-testid="left-die">die one: {dice1}</span>
            <Button onClick={() => setDice2(d6())}>Roll Right</Button>
            <span data-testid="right-die">die two: {dice2}</span>
            {dice1 === 1 && dice2 === 1 ? "Sorry, You Lose \n" : ""}
            {dice2 !== 1 && dice1 === dice2
                ? "Congratulations, You Win \n"
                : ""}
        </div>
    );
}
