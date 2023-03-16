import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <Button
                onClick={() =>
                    setValue(
                        value === "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    )
                }
            >
                Change Type
            </Button>
            to{" "}
            {value === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}{" "}
            .
        </div>
    );
}
