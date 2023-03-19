import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <p>
                    <span>
                        The current color is{" "}
                        <span
                            data-testid="colored-box"
                            style={{ backgroundColor: chosen, color: "yellow" }}
                        >
                            {chosen}
                        </span>
                    </span>
                </p>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChosen(event.target.value)}
                        id={"colors-choice-" + color}
                        label={color}
                        style={{ backgroundColor: color }}
                        value={color}
                        checked={chosen === color}
                    />
                ))}
            </div>
        </div>
    );
}
