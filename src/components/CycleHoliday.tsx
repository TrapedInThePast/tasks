import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type HolidayType = "🎁" | "☘️" | "🦃" | "🎃" | "💖";
    const holidayYear: Record<HolidayType, HolidayType> = {
        "💖": "☘️",
        "☘️": "🎃",
        "🎃": "🦃",
        "🦃": "🎁",
        "🎁": "💖"
    };
    const holidayAlphabet: Record<HolidayType, HolidayType> = {
        "🎁": "🎃",
        "🎃": "☘️",
        "☘️": "🦃",
        "🦃": "💖",
        "💖": "🎁"
    };
    const [holiday, setHoliday] = useState<HolidayType>("🎁");
    return (
        <div>
            <span>
                <Button onClick={() => setHoliday(holidayAlphabet[holiday])}>
                    Advance by Alphabet
                </Button>
            </span>
            <span>
                <Button onClick={() => setHoliday(holidayYear[holiday])}>
                    Advance by Year
                </Button>
                Holiday: {holiday}
            </span>
        </div>
    );
}
