import React, { useState } from "react";
import ReactConfetti from "react-confetti";

function ClickCounterButton() {

    const localActive = localStorage.getItem("active");
    const storedActive:string = localActive ? localActive : "false";
    const [active, setActive] = useState(storedActive);

    const handleClick = () => {
        setActive("true");
        localStorage.setItem("active", "true");
    };

    if (active == "true")
        return <ReactConfetti/>;
    return <button
            onClick={handleClick}
            color="#841584">
                Click meeeeeee
            </button>;
}

export default ClickCounterButton;
